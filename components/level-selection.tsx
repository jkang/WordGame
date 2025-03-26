"use client"

import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"
import { LEVELS, type Unit } from "@/types/level"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { playSound } from "@/utils/sound-effects"

// 假设这是 LevelSelection 组件的路径
interface LevelSelectionProps {
  onSelectLevel: (levelId: string) => void
  currentLevel: string
  onSelectUnit: (unitId: string) => void
  currentUnit: string
}

export default function LevelSelection({ 
  onSelectLevel, 
  currentLevel,
  onSelectUnit,
  currentUnit
}: LevelSelectionProps) {
  // 添加默认值处理
  const initialLevel = currentLevel || LEVELS[0]?.id || ""
  const [selectedGradeId, setSelectedGradeId] = useState<string>(initialLevel)
  const [selectedUnitId, setSelectedUnitId] = useState<string>("")
  const [availableUnits, setAvailableUnits] = useState<Unit[]>([])

  // Initialize with current level if provided
  useEffect(() => {
    if (currentLevel) {
      // Find which grade this level belongs to
      for (const grade of LEVELS) {
        if (grade.id === currentLevel) {
          setSelectedGradeId(grade.id)
          setSelectedUnitId("")
          break
        }

        const unit = grade.units?.find((u) => u.id === currentLevel)
        if (unit) {
          setSelectedGradeId(grade.id)
          setSelectedUnitId(unit.id)
          break
        }
      }
    } else {
      // 添加默认值处理
      setSelectedGradeId(initialLevel)
      setSelectedUnitId("")
    }
  }, [currentLevel])

  // Update available units when grade changes
  useEffect(() => {
    if (selectedGradeId) {
      const grade = LEVELS.find((g) => g.id === selectedGradeId)
      setAvailableUnits(grade?.units || [])

      // If no unit is selected yet, select the first one
      if (!selectedUnitId && grade?.units?.length) {
        setSelectedUnitId(grade.units[0].id)
        onSelectLevel(grade.units[0].id)
      } else if (!grade?.units?.length) {
        // If this grade has no units, select it directly
        onSelectLevel(selectedGradeId)
      }
    } else {
      setAvailableUnits([])
      setSelectedUnitId("")
    }
  }, [selectedGradeId, onSelectLevel])

  const handleGradeChange = (gradeId: string) => {
    setSelectedGradeId(gradeId)

    // Reset unit selection
    setSelectedUnitId("")

    // If this grade has no units, select it directly
    const grade = LEVELS.find((g) => g.id === gradeId)
    if (!grade?.units?.length) {
      onSelectLevel(gradeId)
    }
  }

  const handleUnitChange = (unitId: string) => {
    setSelectedUnitId(unitId)
    onSelectLevel(unitId)
  }

  // 在选择 unit 的地方调用 onSelectUnit
  const handleUnitClick = (unitId: string) => {
    onSelectUnit(unitId)
  }

  return (
    <div className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg p-6 shadow-[0_0_15px_rgba(123,97,255,0.3)] mb-8 border border-[#6366f1]/30 backdrop-blur-sm">
      <div className="flex items-center mb-4">
        <Sparkles className="h-6 w-6 text-[#f9c851] mr-2" />
        <h2 className="text-2xl font-bold text-[#f9c851]">选择冒险岛</h2>
      </div>
      <p className="text-[#a5b4fc] mb-6">选择你要探索的魔法词根岛</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#d8b4fe] mb-1">魔法区域</label>
          <Select value={selectedGradeId} onValueChange={handleGradeChange}>
            <SelectTrigger className="w-full bg-[#2d1a5a] border-[#6366f1]/50 text-[#d8b4fe]">
              <SelectValue placeholder="选择魔法区域" />
            </SelectTrigger>
            <SelectContent className="bg-[#2d1a5a] border-[#6366f1]/50">
              {LEVELS.map((level) => (
                <SelectItem
                  key={level.id}
                  value={level.id}
                  className="text-[#d8b4fe] focus:bg-[#3a1d6f] focus:text-[#f9c851]"
                >
                  <div className="flex items-center">
                    <Sparkles className="h-4 w-4 text-[#f9c851] mr-2" />
                    <span>{level.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {availableUnits.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-[#d8b4fe] mb-1">神秘岛屿</label>
            <Select value={selectedUnitId} onValueChange={handleUnitChange}>
              <SelectTrigger className="w-full bg-[#2d1a5a] border-[#6366f1]/50 text-[#d8b4fe]">
                <SelectValue placeholder="选择神秘岛屿" />
              </SelectTrigger>
              <SelectContent className="bg-[#2d1a5a] border-[#6366f1]/50">
                {availableUnits.map((unit) => (
                  <SelectItem
                    key={unit.id}
                    value={unit.id}
                    className="text-[#d8b4fe] focus:bg-[#3a1d6f] focus:text-[#f9c851]"
                  >
                    <div className="flex items-center">
                      <span>{unit.name}</span>
                      <span className="ml-2 text-xs text-[#a5b4fc]">({unit.wordCount}个词根精灵)</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {(selectedGradeId || selectedUnitId) && (
          <div className="mt-6 bg-[#3a1d6f]/50 p-4 rounded-lg border border-[#6366f1]/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-transparent animate-pulse"></div>
            <h3 className="font-medium text-[#f9c851] relative z-10">当前探索区域</h3>
            <p className="text-[#d8b4fe] relative z-10">
              {selectedGradeId && LEVELS.find((g) => g.id === selectedGradeId)?.description}
              {selectedUnitId && ` - ${availableUnits.find((u) => u.id === selectedUnitId)?.name}`}
            </p>
            {selectedUnitId && (
              <p className="text-sm text-[#a5b4fc] mt-1 relative z-10">
                {availableUnits.find((u) => u.id === selectedUnitId)?.description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

