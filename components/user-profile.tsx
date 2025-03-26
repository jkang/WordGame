"use client"

import { useState } from "react"
import type { UserProgress } from "@/lib/user-progress"
import { loadUserProgress } from "@/lib/user-progress"
import { Sparkles, Star, Trophy, Flame, Zap, Layers, CreditCard, BookOpen, X } from "lucide-react"

interface UserProfileProps {
  userProgress?: UserProgress
  onClose?: () => void
}

export function UserProfile({ userProgress: propUserProgress, onClose }: UserProfileProps) {
  // If userProgress is not provided as a prop, load it from localStorage
  const [localUserProgress] = useState(() => propUserProgress || loadUserProgress())
  const [activeTab, setActiveTab] = useState<"stats" | "achievements">("stats")
  const [isOpen, setIsOpen] = useState(false)

  const userProgress = propUserProgress || localUserProgress

  // Map achievement icon names to components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="h-5 w-5" />
      case "Flame":
        return <Flame className="h-5 w-5" />
      case "Zap":
        return <Zap className="h-5 w-5" />
      case "Layers":
        return <Layers className="h-5 w-5" />
      case "CreditCard":
        return <CreditCard className="h-5 w-5" />
      default:
        return <Trophy className="h-5 w-5" />
    }
  }

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => {
    setIsOpen(false)
    if (onClose) onClose()
  }

  // If no onClose prop is provided, render a button that opens the modal
  if (!onClose && !isOpen) {
    return (
      <button
        onClick={handleOpen}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-[#f9c851] to-[#ff8a5c] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <span className="text-white font-bold">{userProgress.level}</span>
      </button>
    )
  }

  // If modal is not open and onClose is provided, don't render anything
  if (!isOpen && onClose) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg shadow-xl w-full max-w-md relative overflow-hidden border border-[#6366f1]/30">
        {/* Close button */}
        <button onClick={handleClose} className="absolute top-4 right-4 text-[#a5b4fc] hover:text-white">
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="p-6 pb-0">
          <h2 className="text-2xl font-bold text-[#f9c851] mb-1">词根探险家</h2>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#f9c851] to-[#ff8a5c] flex items-center justify-center mr-4">
              <span className="text-white text-3xl font-bold">{userProgress.level}</span>
            </div>
            <div>
              <p className="text-[#d8b4fe] font-medium">探险等级</p>
              <div className="w-full bg-[#1a0b4b] h-2 rounded-full mt-1 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#f9c851] to-[#ff8a5c] h-full rounded-full"
                  style={{ width: `${(userProgress.experience / userProgress.experienceToNextLevel) * 100}%` }}
                ></div>
              </div>
              <p className="text-[#a5b4fc] text-xs mt-1">
                {userProgress.experience} / {userProgress.experienceToNextLevel} 经验值
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#6366f1]/30">
          <button
            className={`flex-1 py-3 text-center font-medium ${
              activeTab === "stats" ? "text-[#f9c851] border-b-2 border-[#f9c851]" : "text-[#a5b4fc]"
            }`}
            onClick={() => setActiveTab("stats")}
          >
            探险数据
          </button>
          <button
            className={`flex-1 py-3 text-center font-medium ${
              activeTab === "achievements" ? "text-[#f9c851] border-b-2 border-[#f9c851]" : "text-[#a5b4fc]"
            }`}
            onClick={() => setActiveTab("achievements")}
          >
            成就徽章
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === "stats" ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-[#1a0b4b]/50 rounded-lg">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-[#f9c851] mr-3" />
                  <span className="text-[#d8b4fe]">总积分</span>
                </div>
                <span className="text-[#f9c851] font-bold">{userProgress.totalScore}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#1a0b4b]/50 rounded-lg">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[#f9c851] mr-3" />
                  <span className="text-[#d8b4fe]">收集星星</span>
                </div>
                <span className="text-[#f9c851] font-bold">{userProgress.totalStars}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#1a0b4b]/50 rounded-lg">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-[#f9c851] mr-3" />
                  <span className="text-[#d8b4fe]">已完成关卡</span>
                </div>
                <span className="text-[#f9c851] font-bold">{userProgress.completedLevels.length}</span>
              </div>

              <div className="mt-6">
                <h3 className="text-[#d8b4fe] font-medium mb-3">最近探险</h3>
                <p className="text-[#a5b4fc]">
                  {new Date(userProgress.lastPlayed).toLocaleString("zh-CN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {userProgress.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border ${
                    achievement.unlocked ? "bg-[#1a0b4b]/50 border-[#f9c851]" : "bg-[#1a0b4b]/30 border-[#6366f1]/30"
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        achievement.unlocked ? "bg-gradient-to-r from-[#f9c851] to-[#ff8a5c]" : "bg-[#3a1d6f]"
                      }`}
                    >
                      {getIcon(achievement.icon)}
                    </div>
                    <div>
                      <h3 className={achievement.unlocked ? "text-[#f9c851]" : "text-[#a5b4fc]"}>{achievement.name}</h3>
                      <p className="text-[#a5b4fc] text-sm">{achievement.description}</p>

                      {achievement.progress !== undefined && achievement.maxProgress !== undefined && (
                        <div className="mt-2">
                          <div className="w-full bg-[#1a0b4b] h-1.5 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                achievement.unlocked ? "bg-gradient-to-r from-[#f9c851] to-[#ff8a5c]" : "bg-[#6366f1]"
                              }`}
                              style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                            ></div>
                          </div>
                          <p className="text-[#a5b4fc] text-xs mt-1">
                            {achievement.progress} / {achievement.maxProgress}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserProfile

