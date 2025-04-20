// Types for user progress tracking
import { playSound } from "@/utils/sound-effects"

export interface UserAchievement {
  id: string
  name: string
  description: string
  icon: string
  unlocked: boolean
  progress?: number
  maxProgress?: number
}

export interface UserProgress {
  totalScore: number
  totalStars: number
  level: number
  experience: number
  experienceToNextLevel: number
  completedLevels: string[]
  achievements: UserAchievement[]
  lastPlayed: string
}

import { loadGameProgress, saveGameProgress, updateGameProgress } from "./storage-manager"

// Initial achievements
const initialAchievements: UserAchievement[] = [
  {
    id: "first_word",
    name: "初学者",
    description: "成功锻造第一个单词",
    icon: "Sparkles",
    unlocked: false,
  },
  {
    id: "word_master",
    name: "词根锻造师",
    description: "成功锻造10个单词",
    icon: "Flame",
    unlocked: false,
    progress: 0,
    maxProgress: 10,
  },
  {
    id: "perfect_match",
    name: "完美连接",
    description: "在词根连接中获得满分",
    icon: "Zap",
    unlocked: false,
  },
  {
    id: "classification_expert",
    name: "分类大师",
    description: "在词根分类中正确分类20个单词",
    icon: "Layers",
    unlocked: false,
    progress: 0,
    maxProgress: 20,
  },
  {
    id: "collector",
    name: "词根收藏家",
    description: "收集30张词根卡牌",
    icon: "CreditCard",
    unlocked: false,
    progress: 0,
    maxProgress: 30,
  },
]

// Initial user progress
const initialUserProgress: UserProgress = {
  totalScore: 0,
  totalStars: 0,
  level: 1,
  experience: 0,
  experienceToNextLevel: 100,
  completedLevels: [],
  achievements: initialAchievements,
  lastPlayed: new Date().toISOString(),
}

// Load user progress
export const loadUserProgress = (): UserProgress => {
  const savedProgress = loadGameProgress()
  if (savedProgress) {
    return {
      ...initialUserProgress,
      totalScore: savedProgress.totalScore,
      totalStars: savedProgress.totalStars,
      achievements: savedProgress.achievements
    }
  }
  return initialUserProgress
}

// Save user progress
export const saveUserProgress = (progress: UserProgress): void => {
  saveGameProgress({
    totalScore: progress.totalScore,
    totalStars: progress.totalStars,
    achievements: progress.achievements
  })
}

// Add score and experience to user progress
export const addScoreAndExperience = (score: number, experience: number): UserProgress => {
  const progress = loadUserProgress()

  progress.totalScore += score
  progress.experience += experience

  // Check if user leveled up
  while (progress.experience >= progress.experienceToNextLevel) {
    progress.experience -= progress.experienceToNextLevel
    progress.level += 1
    progress.experienceToNextLevel = Math.floor(progress.experienceToNextLevel * 1.5)
  }

  saveUserProgress(progress)
  return progress
}

// Mark a level as completed
export const completeLevel = (levelId: string): UserProgress => {
  const progress = loadUserProgress()

  if (!progress.completedLevels.includes(levelId)) {
    progress.completedLevels.push(levelId)
    progress.totalStars += 1
  }

  saveUserProgress(progress)
  return progress
}

// Update achievement progress
export const updateAchievement = (achievementId: string, increment = 1): UserProgress => {
  const progress = loadUserProgress()

  const achievement = progress.achievements.find((a) => a.id === achievementId)
  if (achievement) {
    const wasUnlocked = achievement.unlocked

    if (achievement.progress !== undefined && achievement.maxProgress !== undefined) {
      achievement.progress = Math.min(achievement.progress + increment, achievement.maxProgress)

      // Check if achievement is completed
      if (achievement.progress >= achievement.maxProgress) {
        achievement.unlocked = true

        // 如果成就刚刚解锁，播放成就解锁声音
        if (!wasUnlocked && typeof window !== "undefined") {
          try {
            playSound("achievement")
          } catch (e) {
            console.log("Error playing achievement sound:", e)
          }
        }
      }
    } else {
      achievement.unlocked = true

      // 如果成就刚刚解锁，播放成就解锁声音
      if (!wasUnlocked && typeof window !== "undefined") {
        try {
          playSound("achievement")
        } catch (e) {
          console.log("Error playing achievement sound:", e)
        }
      }
    }
  }

  saveUserProgress(progress)
  return progress
}

