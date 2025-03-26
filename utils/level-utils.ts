import { LEVELS } from "@/types/level"

export function getLevelName(levelId: string): string {
  // Find the level or unit name
  for (const mainLevel of LEVELS) {
    if (mainLevel.id === levelId) {
      return mainLevel.name
    }
    if (mainLevel.units) {
      const unit = mainLevel.units.find((u) => u.id === levelId)
      if (unit) {
        return `${mainLevel.description} - ${unit.description}`
      }
    }
  }
  return levelId
}

