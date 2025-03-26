"use client"

import { useState, useEffect } from "react"
import HomePage from "@/components/home-page"
import WordBuilding from "@/components/word-building"
import RootMatching from "@/components/root-matching"
import RootClassification from "@/components/root-classification"
import LearningCenter from "@/components/learning-center"
import LevelSelection from "@/components/level-selection"
import WordCardGame from "@/components/word-card-game"
import RootSpirits from "@/components/root-spirits"
import { UserProfile } from "@/components/user-profile"
import { loadUserProgress } from "@/lib/user-progress"
import SoundControl from "@/components/sound-control"

// Key for storing the selected level and unit in localStorage
const SELECTED_LEVEL_KEY = "selectedLevel"
const SELECTED_UNIT_KEY = "selectedUnit"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>("home")
  const [selectedLevel, setSelectedLevel] = useState<string>("middle-school-8")
  const [selectedUnit, setSelectedUnit] = useState<string>("")
  const [showProfile, setShowProfile] = useState<boolean>(false)
  const [userProgress, setUserProgress] = useState(loadUserProgress())

  // Load the selected level and unit from localStorage on initial render
  useEffect(() => {
    const savedLevel = localStorage.getItem(SELECTED_LEVEL_KEY)
    if (savedLevel) {
      setSelectedLevel(savedLevel)
    }
    
    const savedUnit = localStorage.getItem(SELECTED_UNIT_KEY)
    if (savedUnit) {
      setSelectedUnit(savedUnit)
    }

    // Refresh user progress data
    setUserProgress(loadUserProgress())

    // Set up interval to refresh user progress every 5 seconds
    const interval = setInterval(() => {
      setUserProgress(loadUserProgress())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Save the selected level to localStorage whenever it changes
  const handleSelectLevel = (levelId: string) => {
    setSelectedLevel(levelId)
    localStorage.setItem(SELECTED_LEVEL_KEY, levelId)
  }
  
  // 添加处理选择 unit 的函数
  const handleSelectUnit = (unitId: string) => {
    setSelectedUnit(unitId)
    localStorage.setItem(SELECTED_UNIT_KEY, unitId)
  }

  // 添加统一的返回处理函数
  const handleBack = () => {
    // 可以在这里添加额外的返回逻辑
    // 例如：playSound("back")
    setCurrentPage("home")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0b4b] to-[#4b1055] flex flex-col items-center p-4 overflow-hidden relative">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="stars-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-70"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* User profile button */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <SoundControl />
        <UserProfile userProgress={userProgress} onClose={() => setShowProfile(false)} />
      </div>

      <div className="w-full max-w-3xl z-10">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9c851] to-[#ff8a5c] mb-2">
            词根冒险岛
          </h1>
          <p className="text-[#a5b4fc] text-xl">Word Root Adventure Island</p>
          <p className="mt-4 text-[#d8b4fe]">踏上魔法词根岛的奇幻旅程，成为词根探险家！</p>
        </div>

        {currentPage === "home" && (
          <>
            <LevelSelection 
              onSelectLevel={handleSelectLevel} 
              currentLevel={selectedLevel}
              onSelectUnit={handleSelectUnit}
              currentUnit={selectedUnit}
            />
            <HomePage onNavigate={setCurrentPage} userProgress={userProgress} />
          </>
        )}

        {currentPage === "word-building" && (
          <WordBuilding level={selectedLevel} onBack={handleBack} />
        )}

        {currentPage === "root-matching" && (
          <RootMatching level={selectedLevel} onBack={handleBack} />
        )}

        {currentPage === "root-classification" && (
          <RootClassification level={selectedLevel} onBack={handleBack} />
        )}

        {currentPage === "word-card-game" && (
          <WordCardGame level={selectedLevel} onBack={handleBack} />
        )}

        {currentPage === "learning-center" && (
          <LearningCenter level={selectedLevel} onBack={() => setCurrentPage("home")} />
        )}

        {currentPage === "root-spirits" && <RootSpirits level={selectedLevel} onBack={() => setCurrentPage("home")} />}
      </div>

      {/* Floating islands decoration */}
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-40 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20,70 Q35,60 50,70 Q65,80 80,70 L90,80 Q75,90 50,85 Q25,90 10,80 Z" fill="#8b5cf6" />
          <path d="M30,65 Q40,55 50,60 Q60,65 70,60 L75,65 Q65,70 50,68 Q35,70 25,65 Z" fill="#6366f1" />
          <path d="M40,55 L45,50 L55,50 L60,55 Q55,60 50,58 Q45,60 40,55 Z" fill="#4f46e5" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-0 w-40 h-40 opacity-40 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20,70 Q35,60 50,70 Q65,80 80,70 L90,80 Q75,90 50,85 Q25,90 10,80 Z" fill="#8b5cf6" />
          <path d="M30,65 Q40,55 50,60 Q60,65 70,60 L75,65 Q65,70 50,68 Q35,70 25,65 Z" fill="#6366f1" />
          <path d="M40,55 L45,50 L55,50 L60,55 Q55,60 50,58 Q45,60 40,55 Z" fill="#4f46e5" />
        </svg>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </main>
  )
}

