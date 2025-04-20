# WordGame 项目概览

## 产品定位
WordGame 是一个面向中学生的英语词汇学习应用，通过游戏化的方式帮助学生掌握教材中的词汇。目前支持：
- 初中八年级下册词汇
- 高中一年级词汇

## 技术栈
- 框架：Next.js
- 语言：TypeScript
- UI框架：TailwindCSS
- 状态管理：React Hooks
- 本地存储：LocalStorage（用于保存用户进度和词根数据）

## 目录结构

### `/app`
Next.js 应用的主要路由和页面组件
- `layout.tsx`: 全局布局组件
- `page.tsx`: 首页组件

### `/components`
可复用的 React 组件
- `ui/`: 基础 UI 组件
- `game/`: 游戏相关组件
- `vocabulary/`: 词汇展示相关组件

### `/data`
词汇数据和游戏数据
- `words/`: 词汇数据文件
  - `middleschool/`: 初中词汇数据
  - `highschool/`: 高中词汇数据
- `vocabulary-data-by-level.ts`: 词汇数据整合
- `root-spirits-data.ts`: 词根精灵数据

### `/types`
TypeScript 类型定义
- `vocabulary.ts`: 词汇相关类型定义
- `level.ts`: 关卡和单元相关类型定义
- `game.ts`: 游戏相关类型定义

### `/lib`
核心库和工具函数
- `storage.ts`: 本地存储基础操作封装
- `storage-manager.ts`: 本地存储管理器
- `user-progress.ts`: 用户进度管理
- `utils.ts`: 通用工具函数

### `/utils`
工具函数
- `vocabulary.ts`: 词汇处理相关工具函数
- `game.ts`: 游戏逻辑相关工具函数

### `/styles`
样式文件
- `globals.css`: 全局样式

## 核心功能模块

### 词汇系统
- 支持多个年级和单元的词汇管理
- 每个单词包含：单词、音标、词性、释义、例句等信息
- 支持词根记忆法

### 游戏系统
- 词根精灵收集游戏
- 单词记忆小游戏
- 进度追踪系统

### 数据结构
1. 词汇数据结构 (VocabularyWord):
```typescript
{
  word: string
  pronunciation: string
  partOfSpeech: string
  definition: string
  examples: string[]
  wordRootMemory?: string
  usageNotes?: string[]
  relatedWords?: string[]
}