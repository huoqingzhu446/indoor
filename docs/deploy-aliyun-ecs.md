# 阿里云 ECS 部署指南

本文档适用于当前仓库部署到阿里云 ECS，推荐配置为 `2 核 4G / 5 Mbps / 80G` 或更高。

## 1. 服务器准备

当前服务器信息：

- 操作系统：Alibaba Cloud Linux 3
- 推荐开放端口：`22`、`80`
- 如果后续要接 HTTPS，再额外开放：`443`

建议先在阿里云安全组中只放行 `22`、`80`、`443`，不要放行 `5432`、`6379`、`9000`、`9001`。

## 2. 安装 Docker 和 Git

连接服务器：

```bash
ssh root@YOUR_SERVER_IP
```

安装基础工具：

```bash
dnf update -y
dnf install -y git curl
```

安装 Docker：

```bash
curl -fsSL https://get.docker.com | sh
systemctl enable docker
systemctl start docker
docker version
docker compose version
```

可选但推荐：给小规格 ECS 增加 swap，避免构建时偶发 OOM。

```bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile swap swap defaults 0 0' >> /etc/fstab
free -h
```

## 3. 拉取项目

```bash
mkdir -p /srv
cd /srv
git clone YOUR_REPO_URL room-ai
cd /srv/room-ai
```

如果你是把本地项目直接传到服务器，也建议最终放在：

```bash
/srv/room-ai
```

## 4. 配置生产环境变量

复制生产模板：

```bash
cp .env.production.example .env.production
```

编辑：

```bash
vim .env.production
```

至少要改这些值：

- `POSTGRES_PASSWORD`
- `MINIO_ROOT_USER`
- `MINIO_ROOT_PASSWORD`
- `OSS_ACCESS_KEY`
- `OSS_SECRET_KEY`
- `JWT_SECRET`
- `INTERNAL_SERVICE_TOKEN`
- `MINIMAX_API_KEY`
- `MINIMAX_CALLBACK_SECRET`
- `APP_BASE_URL`
- `PUBLIC_WEB_BASE_URL`
- `VITE_API_BASE_URL`
- `VITE_STATIC_BASE_URL`
- `OSS_PUBLIC_BASE_URL`

如果你当前还没有域名，可以先把以下变量写成公网 IP：

```env
APP_BASE_URL=http://YOUR_SERVER_IP
PUBLIC_WEB_BASE_URL=http://YOUR_SERVER_IP
VITE_API_BASE_URL=http://YOUR_SERVER_IP/api
VITE_STATIC_BASE_URL=http://YOUR_SERVER_IP/static
OSS_PUBLIC_BASE_URL=http://YOUR_SERVER_IP/static
```

## 5. 启动项目

推荐直接使用根目录的一键脚本：

```bash
bash deploy.sh
```

脚本会自动执行这些操作：

- `git pull --rebase --autostash`
- `docker compose up -d --build --pull never`
- 在 `api` 容器中执行 Prisma `db push`
- 对 `/`、`/admin/`、`/api/`、`/api/docs` 做本机健康检查
- 对 `ai-service` 的 `/health` 做容器内健康检查

如果你当前只想部署服务器上已有代码，不拉远端最新提交：

```bash
bash deploy.sh --no-pull
```

如果你只想看原始 compose 启动命令，也可以手动执行：

```bash
docker compose --env-file .env.production -f docker-compose.yml -f docker-compose.prod.yml up -d --build --pull never
```

查看状态：

```bash
docker compose --env-file .env.production -f docker-compose.yml -f docker-compose.prod.yml ps
```

查看日志：

```bash
docker compose --env-file .env.production -f docker-compose.yml -f docker-compose.prod.yml logs -f nginx api ai-service worker
```

## 6. 初始化数据库

当前 API 使用 Prisma。`deploy.sh` 默认会自动执行数据库同步；如果你要手动执行，请用容器里的本地 Prisma CLI：

```bash
docker compose --env-file .env.production -f docker-compose.yml -f docker-compose.prod.yml exec api sh -lc './node_modules/.bin/prisma db push'
```

如果之后 schema 变更，再重复执行一次即可。

## 7. 验证访问

浏览器访问：

- 用户端首页：`http://YOUR_SERVER_IP/`
- 管理后台：`http://YOUR_SERVER_IP/admin/`
- API 文档：`http://YOUR_SERVER_IP/api/docs`

命令行健康检查：

```bash
curl http://YOUR_SERVER_IP/api/
curl http://YOUR_SERVER_IP/api/docs
```

如果要检查 AI 服务是否在容器内正常：

```bash
docker compose --env-file .env.production -f docker-compose.yml -f docker-compose.prod.yml exec ai-service python -c "import urllib.request; print(urllib.request.urlopen('http://localhost:8000/health').read().decode())"
```

## 8. 生产注意事项

- `docker-compose.prod.yml` 已经把 `postgres`、`redis`、`minio` 的宿主机端口去掉，避免直接暴露到公网。
- 当前 Nginx 会把 `/static/` 代理到 MinIO，所以前端拿资源地址时统一走 `http://YOUR_SERVER_IP/static/...`。
- 前端和 API 地址都来自构建时环境变量；如果你改了 IP 或域名，需要重新构建并重启容器。
- 如果你准备正式对外，建议尽快接域名并配置 HTTPS。
- 如果服务器只用于首版演示，这套 `2 核 4G` 配置已经够用。

## 9. 常用运维命令

停止服务：

```bash
docker compose --env-file .env.production -f docker-compose.yml -f docker-compose.prod.yml down
```

重启服务：

```bash
docker compose --env-file .env.production -f docker-compose.yml -f docker-compose.prod.yml up -d
```

重新构建指定服务：

```bash
docker compose --env-file .env.production -f docker-compose.yml -f docker-compose.prod.yml up -d --build api user-web admin-web
```

查看磁盘占用：

```bash
df -h
docker system df
```

清理无用镜像缓存：

```bash
docker system prune -f
```

## 10. 后续发布

以后本地改完代码后，推荐流程是：

1. 本地提交并推送到远端
2. SSH 登录服务器
3. 进入项目目录执行 `bash deploy.sh`

常见发布命令：

```bash
cd /srv/room-ai
bash deploy.sh
```

如果服务器工作区里有你临时修改的内容，不适合直接 `git pull`，可以改用：

```bash
cd /srv/room-ai
bash deploy.sh --no-pull
```
