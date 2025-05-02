# 微信群聊日报系统

一个基于React的微信群聊日报系统，用于展示和总结群聊记录。

## 功能特点

- 📅 按日期查看群聊记录
- 📊 自动生成群聊总结
- 🎨 美观的UI界面
- 📱 响应式设计

## 技术栈

- React 18
- TypeScript
- Ant Design
- Emotion (CSS-in-JS)
- Redux Toolkit
- React Router
- Axios
- Day.js

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm start
```

### 构建生产版本

```bash
npm run build
```

## 环境变量

创建 `.env` 文件并设置以下环境变量：

```
REACT_APP_API_BASE_URL=你的API地址
```

## 项目结构

```
src/
  ├── assets/        # 静态资源
  ├── components/    # 共用组件
  ├── pages/         # 页面组件
  ├── services/      # API服务
  ├── store/         # Redux store
  ├── types/         # TypeScript类型定义
  └── utils/         # 工具函数
```

## API接口

### 获取聊天记录

```
GET /api/chat-logs?date=YYYY-MM-DD&groupId=xxx
```

### 生成日报总结

```
POST /api/generate-summary
{
  "date": "YYYY-MM-DD",
  "groupId": "xxx"
}
```

# 个人项目集合

这是我的个人项目集合，包含多个子项目，每个项目都有其特定的用途和目标。

## 项目列表

### 学习笔记 (study-notes)
- 用于整理个人学习笔记的知识库
- 涵盖技术、管理、产品等多个领域
- 使用结构化的模板和分类系统

### 个人IP (personal-ip)
- 个人品牌建设项目
- 包含内容创作、社交媒体运营等
- 建立个人影响力

### 微信公众号 (wechat-mp)
- 公众号内容管理和运营
- 粉丝互动和数据分析
- 内容创作和排期管理

### 个人主页 (mengjian-homepage)
- 个人网站项目
- 展示个人作品和经历
- 技术博客分享

### MCP中文版 (mcp-cn)
- MCP项目的中文本地化
- 技术文档翻译
- 中文社区建设

### GitHub个人主页 (mengjian-github)
- GitHub个人主页定制
- 项目展示和统计
- 个人介绍

### 飞书文档转换 (lark-to-markdown)
- 飞书文档转Markdown工具
- 支持多种格式转换
- 保持文档结构完整

## 使用说明

1. 每个子项目都是独立的Git仓库
2. 使用Git子模块管理项目关系
3. 每个项目都有自己的README和文档
4. 定期更新和维护各个项目

## 项目状态

| 项目名称 | 状态 | 最后更新 |
|---------|------|---------|
| study-notes | 活跃 | 2024-03-11 |
| personal-ip | 规划中 | 2024-03-11 |
| wechat-mp | 开发中 | 2024-03-11 |
| mengjian-homepage | 开发中 | 2024-03-11 |
| mcp-cn | 开发中 | 2024-03-11 |
| mengjian-github | 活跃 | 2024-03-11 |
| lark-to-markdown | 开发中 | 2024-03-11 |

## 贡献

欢迎对任何子项目提出建议或贡献代码。每个项目都有自己的贡献指南，请参考各自的文档。 