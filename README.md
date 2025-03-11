# 孟健的个人项目集合

这是一个个人项目集合仓库，采用类似monorepo的方式组织，使用git submodule管理各个子项目。

## 项目结构

- `lark-to-markdown`: 飞书文档转Markdown工具
- `mengjian-github`: GitHub相关项目
- `mcp-cn`: MCP中文版
- `mengjian-homepage`: 个人主页
- `wechat-operation`: 微信运营相关工具

## 使用方法

### 克隆仓库及所有子模块

```bash
git clone --recursive https://github.com/yourusername/mengjian.git
```

### 更新所有子模块

```bash
git submodule update --remote --merge
```

### 添加新的子模块

```bash
git submodule add <repository-url> <path>
git commit -m "Add new submodule"
```

## 开发指南

每个子项目都有自己的开发流程和依赖，请参考各子项目中的README文件获取详细信息。 