FROM nginx:1.27-alpine

RUN printf '%s\n' \
  '<!doctype html>' \
  '<html lang="zh-CN">' \
  '<head><meta charset="utf-8"><title>user-web placeholder</title></head>' \
  '<body><h1>user-web placeholder</h1><p>Replace this image with the actual Vite build output.</p></body>' \
  '</html>' \
  > /usr/share/nginx/html/index.html

EXPOSE 80
