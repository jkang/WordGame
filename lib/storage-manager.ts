// Types for storage management
interface GameProgress {
  totalScore: number
  totalStars: number
  achievements: UserAchievement[]
}

interface UserAchievement {
  id: string
  name: string
  description: string
  icon: string
  unlocked: boolean
  progress?: number
  maxProgress?: number
}

const STORAGE_KEY = "wordGameProgress"

// Save game progress to localStorage
export const saveGameProgress = (progress: GameProgress): void => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch (error) {
      console.error("Error saving game progress:", error)
    }
  }
}

// Load game progress from localStorage
export const loadGameProgress = (): GameProgress | null => {
  if (typeof window !== "undefined") {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY)
      if (storedData) {
        return JSON.parse(storedData)
      }
    } catch (error) {
      console.error("Error loading game progress:", error)
    }
  }
  return null
}

// Update specific progress values
export const updateGameProgress = (updates: Partial<GameProgress>): void => {
  const currentProgress = loadGameProgress() || {
    totalScore: 0,
    totalStars: 0,
    achievements: []
  }
  
  const updatedProgress = {
    ...currentProgress,
    ...updates
  }
  
  saveGameProgress(updatedProgress)
}