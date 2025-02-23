# Hirelevater 求职平台主页项目文档

## 项目概述
这是一个现代化的求职平台主页项目，旨在为求职者和招聘方提供一个高效、直观的交互平台。项目采用最新的前端技术栈，提供响应式设计和流畅的用户体验。

## 功能模块

### 1. 主页 (/)
- 平台概览展示
- 主要功能导航
- 快速访问入口

### 2. 面试准备 (/interview-prep)
- 面试技巧和建议
- 常见面试问题
- 模拟面试资源

### 3. 推荐系统 (/referrals)
- 职位推荐
- 内部推荐机会
- 推荐流程说明

### 4. 社区 (/community)
- 经验分享
- 职业讨论
- 行业动态

## 技术栈

- **框架**: Next.js
- **UI组件**: shadcn/ui
- **样式**: Tailwind CSS
- **类型系统**: TypeScript

## 设计规范

### 组件库
项目使用 shadcn/ui 组件库，提供了以下核心组件：
- Button
- Card
- Dialog
- Form
- Navigation
- 等其他UI组件

### 响应式设计
- 移动端优先的设计理念
- 使用 Tailwind CSS 的响应式类
- 自定义 hooks 处理移动端逻辑

### 主题
- 支持亮色/暗色模式
- 统一的色彩系统
- 一致的间距和排版规范

## 开发指南

### 本地开发
```bash
npm install
npm run dev
```

### 项目结构
- `/app`: 页面路由和组件
- `/components`: 可重用UI组件
- `/hooks`: 自定义React Hooks
- `/lib`: 工具函数和通用逻辑
- `/public`: 静态资源
- `/styles`: 全局样式定义

## 部署
项目使用 Next.js 的默认构建系统：
```bash
npm run build
npm start
```

## 贡献指南
1. Fork 项目
2. 创建特性分支
3. 提交变更
4. 发起 Pull Request

## 许可证
MIT License