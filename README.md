# 🚀 孟健的代码仓库

<div align="center">
  <h2>✨ 精选项目集合 ✨</h2>
  <p>使用 Git Submodules 管理的多项目主仓库</p>
  
  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![Projects](https://img.shields.io/badge/projects-10+-green.svg)](#项目列表)
  [![Languages](https://img.shields.io/badge/languages-TypeScript%2C%20Python%2C%20JavaScript-blue.svg)](#技术栈)
</div>

## 🌟 重点推荐

### 📝 [飞书文档转公众号排版工具](./lark-to-markdown/)
> **🔥 热门项目** - 一键将飞书文档转换为美观的微信公众号文章

**核心功能**：
- ✨ **智能转换**：飞书文档一键转 Markdown，格式完美保留
- 🎨 **多套主题**：科技蓝、商务橙、极简黑、清新绿、典雅紫等多种风格
- 📱 **双屏预览**：同时支持手机和电脑端预览效果
- 🚀 **一键导出**：直接复制到微信公众号后台使用

**技术栈**：Next.js 14 + React 18 + TypeScript + TailwindCSS

🔗 **在线体验**：[https://lark-to-markdown.vercel.app](https://lark-to-markdown.vercel.app)

---

## 📁 项目列表

### 🚀 核心应用

| 项目 | 描述 | 技术栈 | 状态 |
|------|------|--------|------|
| **[lark-to-markdown](./lark-to-markdown/)** | 飞书文档转公众号排版工具 | Next.js + React + TS | 🟢 活跃 |
| **[wechat-daily-report](./wechat-daily-report/)** | 微信群聊日报生成器 | Electron + React | 🟢 活跃 |
| **[mengjian-homepage](./mengjian-homepage/)** | 个人主页网站 | Next.js + MDX | 🟢 维护中 |
| **[mcp-cn](./mcp-cn/)** | MCP 协议中文文档 | Next.js + MDX | 🟡 更新中 |

### 📝 内容创作

| 项目 | 描述 | 类型 | 状态 |
|------|------|------|------|
| **[wechat-mp](./wechat-mp/)** | 微信公众号文章管理 | 内容库 | 🟢 持续更新 |
| **[deepseek-newsletter](./deepseek-newsletter/)** | DeepSeek 技术通讯 | 技术文档 | 🟡 归档 |
| **[study-notes](./study-notes/)** | 学习笔记和知识整理 | 笔记库 | 🟢 日常更新 |
| **[diary](./diary/)** | 个人日记 | 生活记录 | 🟢 私人 |

### 💼 其他项目

| 项目 | 描述 | 状态 |
|------|------|------|
| **[personal-ip](./personal-ip/)** | 个人IP建设相关内容 | 🟡 规划中 |
| **[mengjian-github](./mengjian-github/)** | GitHub 个人资料 | 🟢 维护中 |

## 🛠️ 使用方式

### 克隆仓库

```bash
# 🔄 克隆主仓库及所有子模块
git clone --recurse-submodules https://github.com/mengjian-github/mengjian.git

# 或者分步操作
git clone https://github.com/mengjian-github/mengjian.git
cd mengjian
git submodule init
git submodule update
```

### 更新子模块

```bash
# 🔄 更新所有子模块到最新版本
git submodule update --remote

# 🎯 更新特定子模块
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

<div align="center">

| 指标 | 数值 |
|------|------|
| 🗂️ **总项目数** | 10+ |
| 💻 **主要语言** | TypeScript, JavaScript, Python |
| 🏗️ **技术栈** | React, Next.js, Node.js, Electron |
| ⭐ **热门项目** | lark-to-markdown, wechat-daily-report |
| 🚀 **活跃项目** | 6 个 |

</div>

## 🌟 快速导航

### 📱 在线工具
- 🔗 [飞书转公众号工具](https://lark-to-markdown.vercel.app) - 最受欢迎
- 🔗 [个人主页](https://mengjian.vercel.app) - 了解更多

### 📚 技术文档
- 📖 [MCP 中文文档](./mcp-cn/) - Model Context Protocol
- 📝 [学习笔记](./study-notes/) - 技术总结

### 🎯 内容创作
- ✍️ [公众号文章](./wechat-mp/) - 技术分享
- 📰 [技术通讯](./deepseek-newsletter/) - 行业动态

## 🤝 贡献指南

欢迎提出问题和建议！每个子项目都有独立的贡献指南。

1. 🍴 Fork 感兴趣的项目
2. 🌿 创建特性分支
3. 💡 提交您的改进
4. 🚀 发起 Pull Request

## 📞 联系方式

- 📧 **邮箱**：通过各项目的 Issue 联系
- 🐱 **GitHub**：[@mengjian-github](https://github.com/mengjian-github)
- 💬 **微信**：在飞书转公众号工具中扫码添加

## 📄 许可证

除非另有说明，所有项目均采用 [MIT 许可证](LICENSE)。

---

<div align="center">
  <p>💡 <strong>提示</strong>：这是一个主仓库，实际代码在各子模块中</p>
  <p>⭐ 如果项目对您有帮助，请给个 Star 支持一下！</p>
  
  **🔥 推荐先试用 [飞书文档转公众号工具](./lark-to-markdown/)，体验一键转换的便捷！**
</div> 