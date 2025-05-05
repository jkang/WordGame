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

### 成就与积分系统

#### 游戏得分规则

1. 词根卡牌收集
   - 每收集一张卡牌获得成就进度
   - 收集30张卡牌可解锁"词根收藏家"成就

2. 词根锻造坊
   - 每成功锻造一个单词获得1分
   - 每次得分可获得10点经验值
   - 首次锻造解锁"初学者"成就
   - 成功锻造10个单词解锁"词根锻造师"成就

3. 词根连接术
   - 每次正确连接获得1分
   - 每次得分可获得15点经验值
   - 完美连接（满分）可解锁"完美连接"成就

4. 词根分类法阵
   - 每次正确分类获得1分
   - 每次得分可获得12点经验值
   - 正确分类20个单词可解锁"分类大师"成就

5. 词根精灵的秘密
   - 每次阅读获得5分
   - 每次得分可获得10点经验值

#### 等级与星星系统

1. 等级提升
   - 初始等级为1级
   - 每级所需经验值为上一级的1.5倍
   - 初始升级所需经验值为100点

2. 星星获取
   - 完成每个关卡可获得1颗星星
   - 星星数量反映游戏进度
   - 解锁成就也会增加总分

#### 1. 单词卡片游戏 (Word Card Game)
- 页面组件：`/app/page.tsx` 中的 `WordCardGame` 组件
- 核心组件：
  - `/components/word-card-game.tsx`：游戏主逻辑
  - `/components/word-card.tsx`：单词卡片展示
  - `/components/visual-memory-generator.tsx`：视觉记忆生成器
- 数据文件：
  - `/data/words/`：按年级和单元划分的词汇数据
  - `/data/vocabulary-data-by-level.ts`：词汇数据整合

#### 2. 词根匹配游戏 (Root Matching)
- 页面组件：`/app/page.tsx` 中的 `RootMatching` 组件
- 核心组件：`/components/root-matching.tsx`
- 数据文件：
  - `/data/root-matching-data.ts`：词根匹配基础数据
  - `/data/root-matching-data-by-level.ts`：按级别整合的匹配数据

#### 3. 词根分类游戏 (Root Classification)
- 页面组件：`/app/page.tsx` 中的 `RootClassification` 组件
- 核心组件：`/components/root-classification.tsx`
- 数据文件：
  - `/data/root-classification-data.ts`：词根分类基础数据
  - `/data/root-classification-data-by-level.ts`：按级别整合的分类数据

#### 4. 词根精灵收集游戏 (Root Spirits)
- 页面组件：`/app/page.tsx` 中的 `RootSpirits` 组件
- 核心组件：`/components/root-spirits.tsx`
- 数据文件：
  - `/data/root-spirits-data.ts`：词根精灵数据
  - `/data/spirits/`：精灵相关资源

#### 5. 单词构建游戏 (Word Building)
- 页面组件：`/app/page.tsx` 中的 `WordBuilding` 组件
- 核心组件：`/components/word-building.tsx`
- 数据文件：
  - `/data/buildings/`：单词构建数据
  - `/data/word-building-data-by-level.ts`：按级别整合的构建数据

#### 游戏公共功能
- 进度追踪：
  - `/lib/user-progress.ts`：用户进度管理
  - `/lib/storage-manager.ts`：本地存储管理
- 音效系统：
  - `/utils/sound-effects.ts`：音效管理
  - `/public/sounds/`：音效资源文件
- UI组件：
  - `/components/ui/`：通用UI组件库

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