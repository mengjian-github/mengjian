# 孟健的代码仓库

这是一个包含多个项目的主仓库，使用 Git Submodules 管理各个独立的项目。

## 📁 项目列表

### 🚀 主要项目

- **[lark-to-markdown](./lark-to-markdown/)** - 飞书文档转Markdown工具
- **[wechat-daily-report](./wechat-daily-report/)** - 微信群聊日报生成器
- **[mengjian-homepage](./mengjian-homepage/)** - 个人主页网站
- **[mcp-cn](./mcp-cn/)** - MCP（Model Context Protocol）中文文档

### 📝 内容创作

- **[wechat-mp](./wechat-mp/)** - 微信公众号文章管理
- **[deepseek-newsletter](./deepseek-newsletter/)** - DeepSeek 技术通讯
- **[study-notes](./study-notes/)** - 学习笔记和知识整理
- **[diary](./diary/)** - 个人日记

### 💼 其他项目

- **[personal-ip](./personal-ip/)** - 个人IP建设相关内容
- **[mengjian-github](./mengjian-github/)** - GitHub 个人资料

## 🛠️ 使用方式

### 克隆仓库

```bash
# 克隆主仓库及所有子模块
git clone --recurse-submodules https://github.com/mengjian-github/mengjian.git

# 或者先克隆主仓库，再初始化子模块
git clone https://github.com/mengjian-github/mengjian.git
cd mengjian
git submodule init
git submodule update
```

### 更新子模块

```bash
# 更新所有子模块到最新版本
git submodule update --remote

# 更新特定子模块
git submodule update --remote <submodule-name>
```

### 提交更改

```bash
# 在子模块中提交更改
cd <submodule-name>
git add .
git commit -m "your message"
git push

# 在主仓库中更新子模块引用
cd ..
git add <submodule-name>
git commit -m "update submodule <submodule-name>"
git push
```

## 📊 项目统计

- **总项目数**: 10
- **主要编程语言**: TypeScript, JavaScript, Python, HTML
- **主要技术栈**: React, Next.js, Node.js, Electron

## 🤝 贡献

欢迎提出问题和建议！每个子项目都有独立的贡献指南，请查看对应项目的 README。

## 📄 许可证

除非另有说明，所有项目均采用 MIT 许可证。具体许可证信息请查看各个子项目。

---

💡 **提示**: 这是一个主仓库，实际的代码都在各个子模块中。如果你对某个特定项目感兴趣，请直接访问对应的子模块目录。

# 微信群聊日报系统（wechat-daily-report）

一个基于 React + TypeScript 的微信群聊日报系统，支持群聊消息的可视化浏览、自动总结与美观导出。

## 功能特点

- 📅 按日期查看群聊记录
- 📊 自动生成群聊总结（话题、统计、金句、待办等）
- 🎨 美观的 UI 界面，支持导出
- 📱 响应式设计，适配多端
- 📝 支持自定义群聊数据

## 技术栈

- React 18
- TypeScript
- Ant Design
- Emotion (CSS-in-JS)
- Redux Toolkit
- React Router
- Axios
- Day.js

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发环境

```bash
npm start
```

### 3. 构建生产版本

```bash
npm run build
```

## 数据自定义与配置

本项目默认使用本地 mock 数据进行演示。你可以通过修改 `src/data/messages.ts` 文件，加载你自己的群聊消息和日报数据。

**推荐流程：**
1. 复制 `src/data/messages.example.ts` 为 `src/data/messages.ts`
2. 按照 example 文件中的格式，填充你的群聊数据
3. 保存后刷新页面即可看到效果

> 数据结构详细说明请参考 `src/types/index.ts`。

### 数据格式示例

```ts
export const groupMessages = {
  'group1': {
    name: '示例群聊',
    messages: {
      '2025-04-30': {
        messages: [ /* 群聊消息数组 */ ],
        digest: { /* 日报总结对象 */ }
      }
    }
  }
};
```

详细字段说明和自定义技巧可参考[这篇文章](https://mp.weixin.qq.com/s/uQ_SZECCEdxlUUpnCWNF-g)。

## 目录结构

```
src/
  ├── components/    # 复用组件
  ├── pages/         # 页面组件
  ├── data/          # 群聊数据（messages.ts）
  ├── types/         # TypeScript 类型定义
  └── ...            # 其他
```

## 常见问题（FAQ）

**Q: 如何自定义群聊数据？**  
A: 复制 `src/data/messages.example.ts` 为 `src/data/messages.ts`，并按格式填写。

**Q: 支持哪些消息类型？**  
A: 支持文本、图片、链接、表情等，详见 `src/types/index.ts`。

**Q: 如何部署到生产环境？**  
A: 构建后将 `build/` 目录部署到任意静态服务器即可。

## 贡献

欢迎提 issue 或 PR 参与改进！

---

> 数据结构和自定义方法详见：[微信群聊日报数据格式与玩法](https://mp.weixin.qq.com/s/uQ_SZECCEdxlUUpnCWNF-g) 