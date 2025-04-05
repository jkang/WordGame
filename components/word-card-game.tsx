"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ArrowLeft, ChevronLeft, ChevronRight, CreditCard, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WordCard } from "@/components/word-card"
import { vocabularyByLevelUnit} from "@/data/vocabulary-data-by-level"
import type { VocabularyWord } from "@/types/vocabulary"
import { getLevelName } from "@/utils/level-utils"
import { updateAchievement } from "@/lib/user-progress"
import { playSound } from "@/utils/sound-effects"

interface WordCardGameProps {
  level: keyof typeof vocabularyByLevelUnit // 修改这里，限制 level 只能是 vocabularyByLevel 的键
  onBack: (currentLevel: string) => void // 添加返回参数
}

export default function WordCardGame({ level, onBack }: WordCardGameProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [words, setWords] = useState<VocabularyWord[]>([])
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [levelName, setLevelName] = useState<string>("")
  const [cardCollected, setCardCollected] = useState(false)
  const [collectedCards, setCollectedCards] = useState<string[]>([])

  // Get words for the current level
  useEffect(() => {
    const levelWords = vocabularyByLevelUnit[level] || []
    setWords(levelWords)
    setCurrentIndex(0)
    setLevelName(getLevelName(level))

    // Load collected cards from localStorage
    const storedCards = localStorage.getItem("collectedCards") || "[]"
    try {
      setCollectedCards(JSON.parse(storedCards))
    } catch (e) {
      setCollectedCards([])
    }
  }, [level])

  const currentWord = words[currentIndex]

  const handlePrevious = () => {
    if (currentIndex > 0) {
      playSound("cardFlip")
      setCurrentIndex(currentIndex - 1)
      setCardCollected(false)
    }
  }

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      playSound("cardFlip")
      setCurrentIndex(currentIndex + 1)
      setCardCollected(false)
    }
  }

  const handleCollectCard = () => {
    if (!currentWord || cardCollected) return

    const newCollectedCards = [...collectedCards]
    if (!newCollectedCards.includes(currentWord.word)) {
      playSound("collect")
      newCollectedCards.push(currentWord.word)
      setCollectedCards(newCollectedCards)
      localStorage.setItem("collectedCards", JSON.stringify(newCollectedCards))

      // Update achievement
      updateAchievement("collector")
    }

    setCardCollected(true)
  }

  // Touch event handlers for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < words.length - 1) {
      playSound("cardFlip")  // 添加左滑音效
      setCurrentIndex(currentIndex + 1)
      setCardCollected(false)
    }

    if (isRightSwipe && currentIndex > 0) {
      playSound("cardFlip")  // 添加右滑音效
      setCurrentIndex(currentIndex - 1)
      setCardCollected(false)
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#f9c851] mb-6 flex items-center">
        <CreditCard className="h-7 w-7 mr-2 text-[#f9c851]" />
        词根卡牌收集
      </h2>

      {/* Display current level */}
      <div className="bg-[#3a1d6f]/70 p-3 rounded-lg border border-[#6366f1]/30 mb-6">
        <p className="text-[#d8b4fe] font-medium">当前探索区域: {levelName}</p>
      </div>

      <div className="mb-6 bg-[#3a1d6f]/30 p-3 rounded-lg border border-[#6366f1]/20 text-center">
        <p className="text-[#a5b4fc] font-medium">
          <span className="text-[#f9c851]">
            卡牌 {currentIndex + 1} / {words.length}
          </span>{" "}
          ·<span className="text-[#d8b4fe]"> 已收集: {collectedCards.length}</span>
        </p>
      </div>

      {words.length > 0 ? (
        <div
          className="relative mb-6 w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex justify-center items-center">
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#2a1b6a] rounded-full p-2 shadow-[0_0_10px_rgba(123,97,255,0.3)] z-10 hover:bg-[#3a1d6f]"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className={`h-8 w-8 ${currentIndex === 0 ? "text-[#a5b4fc]/50" : "text-[#f9c851]"}`} />
            </button>

            <div className="w-full px-12">
              {currentWord && (
                <div className="min-h-[400px]">
                  {" "}
                  {/* 添加最小高度 */}
                  <WordCard word={currentWord} />
                </div>
              )}
            </div>

            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#2a1b6a] rounded-full p-2 shadow-[0_0_10px_rgba(123,97,255,0.3)] z-10 hover:bg-[#3a1d6f]"
              onClick={handleNext}
              disabled={currentIndex === words.length - 1}
            >
              <ChevronRight
                className={`h-8 w-8 ${currentIndex === words.length - 1 ? "text-[#a5b4fc]/50" : "text-[#f9c851]"}`}
              />
            </button>
          </div>

          {/* Collect button */}
          <div className="flex justify-center mt-4">
            <Button
              className={`${
                cardCollected || !currentWord
                  ? "bg-[#3a1d6f] text-[#a5b4fc]"
                  : "bg-gradient-to-r from-[#f9c851] to-[#ff8a5c] hover:from-[#f8b037] hover:to-[#ff7a43] text-white"
              } px-6 py-2 rounded-full shadow-[0_0_10px_rgba(123,97,255,0.3)] transition-all duration-300`}
              onClick={handleCollectCard}
              disabled={cardCollected || !currentWord}
            >
              <Sparkles className="h-5 w-5 mr-2" />
              {cardCollected ? "已收集" : "收集卡牌"}
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-10 bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg shadow-[0_0_15px_rgba(123,97,255,0.3)] border border-[#6366f1]/30">
          <p className="text-[#a5b4fc]">当前区域没有词根卡牌</p>
        </div>
      )}

      <Button
      variant="ghost"
      className="flex items-center text-[#a5b4fc] hover:text-[#d8b4fe] hover:bg-[#3a1d6f]/30"
      onClick={() => onBack(level)} // 传递当前关卡
      >
      <ArrowLeft className="mr-2 h-4 w-4" /> 返回魔法岛
      </Button>
    </div>
  )
}

