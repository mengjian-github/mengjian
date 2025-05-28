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