export interface ProjectModuleTemplate {
  moduleCode: string;
  moduleName: string;
  sortOrder: number;
}

const templates: Record<string, ProjectModuleTemplate[]> = {
  客厅: [
    { moduleCode: 'main', moduleName: '客厅主视角', sortOrder: 1 },
    { moduleCode: 'sofa', moduleName: '沙发区视角', sortOrder: 2 },
    { moduleCode: 'tv', moduleName: '电视墙视角', sortOrder: 3 },
  ],
  卧室: [
    { moduleCode: 'main', moduleName: '卧室主视角', sortOrder: 1 },
    { moduleCode: 'bed', moduleName: '床头视角', sortOrder: 2 },
    { moduleCode: 'window', moduleName: '窗边视角', sortOrder: 3 },
  ],
  餐厅: [
    { moduleCode: 'main', moduleName: '餐厅主视角', sortOrder: 1 },
    { moduleCode: 'dining', moduleName: '餐桌视角', sortOrder: 2 },
    { moduleCode: 'cabinet', moduleName: '餐边柜视角', sortOrder: 3 },
  ],
  书房: [
    { moduleCode: 'main', moduleName: '书房主视角', sortOrder: 1 },
    { moduleCode: 'desk', moduleName: '书桌视角', sortOrder: 2 },
    { moduleCode: 'storage', moduleName: '收纳柜视角', sortOrder: 3 },
  ],
};

export function getProjectModuleTemplate(roomType: string): ProjectModuleTemplate[] {
  return (
    templates[roomType] ?? [
      { moduleCode: 'main', moduleName: `${roomType}主视角`, sortOrder: 1 },
      { moduleCode: 'left', moduleName: `${roomType}左侧补充视角`, sortOrder: 2 },
      { moduleCode: 'right', moduleName: `${roomType}右侧补充视角`, sortOrder: 3 },
    ]
  );
}
