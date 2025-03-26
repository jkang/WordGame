"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ArrowLeft, Trophy, Clock, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { rootClassificationDataByLevel } from "@/data/root-classification-data-by-level"
import { getLevelName } from "@/utils/level-utils"
import { addScoreAndExperience, updateAchievement } from "@/lib/user-progress"
import { playSound } from "@/utils/sound-effects"

// Update the interface to include level
interface RootClassificationProps {
  level: keyof typeof rootClassificationDataByLevel 
  onBack: (currentLevel: string) => void // 添加返回参数
}

export default function RootClassification({ level, onBack }: RootClassificationProps) {
  const [categories, setCategories] = useState<Array<{ id: string; root: string; meaning: string }>>([])
  const [words, setWords] = useState<Array<{ id: string; word: string; categoryId: string }>>([])
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [gameOver, setGameOver] = useState(false)
  const [classifiedWords, setClassifiedWords] = useState<Record<string, string[]>>({})
  const [gameResult, setGameResult] = useState<"timeout" | "completed" | null>(null)
  const [draggedWord, setDraggedWord] = useState<string | null>(null)
  const [activeDropzone, setActiveDropzone] = useState<string | null>(null)
  const [levelName, setLevelName] = useState<string>("")
  const [magicEffect, setMagicEffect] = useState<string | null>(null)

  // Get level name
  useEffect(() => {
    setLevelName(getLevelName(level))
  }, [level])

  useEffect(() => {
    const levelData = rootClassificationDataByLevel[level] || rootClassificationDataByLevel["middle-school-8"]

    // Get 3 random categories
    const shuffledCategories = [...levelData.categories].sort(() => 0.5 - Math.random()).slice(0, 3)
    setCategories(shuffledCategories)

    // Get words for these categories
    const wordsForCategories = levelData.words
      .filter((word) => shuffledCategories.some((cat) => cat.id === word.categoryId))
      .sort(() => 0.5 - Math.random())

    setWords(wordsForCategories)

    // Initialize classified words object
    const initialClassified: Record<string, string[]> = {}
    shuffledCategories.forEach((cat) => {
      initialClassified[cat.id] = []
    })
    setClassifiedWords(initialClassified)

    // 播放游戏开始声音
    playSound("gameStart")
  }, [level])

  useEffect(() => {
    if (gameOver) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setGameOver(true)
          setGameResult("timeout")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameOver])

  useEffect(() => {
    // Check if all words are classified
    const totalClassified = Object.values(classifiedWords).flat().length
    if (totalClassified > 0 && totalClassified >= words.length) {
      setGameOver(true)
      setGameResult("completed")

      // Add score and experience
      addScoreAndExperience(score, score * 12)

      // Update achievement
      updateAchievement("classification_expert", score)
    }
  }, [classifiedWords, words, score])

  const handleDragStart = (e: React.DragEvent, wordId: string) => {
    setDraggedWord(wordId)
    e.dataTransfer.setData("text/plain", wordId)
    // 播放拖动声音
    playSound("drag")
    // Make the drag image semi-transparent
    if (e.target instanceof HTMLElement) {
      e.dataTransfer.setDragImage(e.target, 20, 20)
    }
  }

  const handleDragOver = (e: React.DragEvent, categoryId: string) => {
    e.preventDefault()
    setActiveDropzone(categoryId)
  }

  const handleDragLeave = () => {
    setActiveDropzone(null)
  }

  const handleDrop = (e: React.DragEvent, categoryId: string) => {
    e.preventDefault()
    setActiveDropzone(null)

    if (!draggedWord) return

    const word = words.find((w) => w.id === draggedWord)
    if (!word) return

    // Check if the word is already classified in any category
    const isAlreadyClassified = Object.values(classifiedWords).some((wordList) => wordList.includes(draggedWord))

    if (isAlreadyClassified) return

    if (word.categoryId === categoryId) {
      // Correct classification
      setScore(score + 1)
      // 播放成功声音
      playSound("success")

      // Add word to the category's classified words
      setClassifiedWords((prev) => ({
        ...prev,
        [categoryId]: [...prev[categoryId], draggedWord],
      }))

      setMagicEffect(categoryId)

      setTimeout(() => {
        setMagicEffect(null)
      }, 1000)
    } else {
      // 播放放置声音
      playSound("drop")
    }

    setDraggedWord(null)
  }

  const handleRestart = () => {
    const levelData = rootClassificationDataByLevel[level] || rootClassificationDataByLevel["middle-school-8"]

    // Get 3 random categories
    const shuffledCategories = [...levelData.categories].sort(() => 0.5 - Math.random()).slice(0, 3)
    setCategories(shuffledCategories)

    // Get words for these categories
    const wordsForCategories = levelData.words
      .filter((word) => shuffledCategories.some((cat) => cat.id === word.categoryId))
      .sort(() => 0.5 - Math.random())

    setWords(wordsForCategories)

    // Reset classified words
    const initialClassified: Record<string, string[]> = {}
    shuffledCategories.forEach((cat) => {
      initialClassified[cat.id] = []
    })
    setClassifiedWords(initialClassified)

    setScore(0)
    setTimeLeft(60)
    setGameOver(false)
    setGameResult(null)
    setDraggedWord(null)
    setActiveDropzone(null)
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#f9c851] mb-6 flex items-center">
        <Layers className="h-7 w-7 mr-2 text-[#f9c851]" />
        词根分类法阵
      </h2>

      {/* Display current level */}
      <div className="bg-[#3a1d6f]/70 p-3 rounded-lg border border-[#6366f1]/30 mb-6">
        <p className="text-[#d8b4fe] font-medium">当前探索区域: {levelName}</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="bg-[#2a1b6a] px-6 py-2 rounded-full shadow-[0_0_10px_rgba(123,97,255,0.3)] text-[#f9c851]">
          魔法能量: {score}
        </div>
        <div
          className={`${
            timeLeft <= 10
              ? "bg-gradient-to-r from-[#ef4444] to-[#f87171]"
              : "bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa]"
          } text-white px-6 py-2 rounded-full shadow-[0_0_10px_rgba(123,97,255,0.3)]`}
        >
          {timeLeft}
        </div>
      </div>

      {gameOver ? (
        <div className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg shadow-[0_0_15px_rgba(123,97,255,0.3)] p-8 mb-6 text-center border border-[#6366f1]/30">
          <div className="flex justify-center mb-4">
            {gameResult === "timeout" ? (
              <Clock className="h-16 w-16 text-[#f87171]" />
            ) : (
              <Trophy className="h-16 w-16 text-[#f9c851]" />
            )}
          </div>
          <h3 className="text-2xl font-bold mb-2 text-[#f9c851]">
            {gameResult === "timeout" ? "魔法时间结束！" : "分类完成！"}
          </h3>
          <p className="text-lg mb-4 text-[#d8b4fe]">
            你的魔法能量: <span className="font-bold text-[#f9c851]">{score}</span> / {words.length}
          </p>
          <p className="mb-6 text-[#a5b4fc]">
            {score >= words.length * 0.7
              ? "太棒了！你已经掌握了强大的词根分类能力！"
              : "继续练习，你的词根魔法将会更加强大！"}
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="border-[#6366f1] text-[#a5b4fc] hover:bg-[#3a1d6f] hover:text-[#d8b4fe]"
              onClick={onBack}
            >
              返回魔法岛
            </Button>
            <Button
              className="bg-gradient-to-r from-[#f9c851] to-[#ff8a5c] hover:from-[#f8b037] hover:to-[#ff7a43] text-white"
              onClick={handleRestart}
            >
              再次分类
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`p-4 rounded-lg text-center transition-all min-h-[180px] relative ${
                  activeDropzone === category.id
                    ? "bg-[#3a1d6f] border-2 border-dashed border-[#6366f1]"
                    : "bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] border border-[#6366f1]/30"
                } shadow-md`}
                onDragOver={(e) => handleDragOver(e, category.id)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, category.id)}
              >
                {magicEffect === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f9c851]/20 to-[#ff8a5c]/20 animate-pulse rounded-lg"></div>
                )}
                <div className="font-medium mb-2 text-[#f9c851]">{category.root}</div>
                <div className="text-[#d8b4fe] mb-3">({category.meaning})</div>

                {/* Display classified words in this category */}
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {classifiedWords[category.id]?.map((wordId) => {
                    const word = words.find((w) => w.id === wordId)
                    return word ? (
                      <div
                        key={word.id}
                        className="bg-[#3a1d6f] text-[#d8b4fe] px-3 py-1 rounded-lg text-sm border border-[#6366f1]/30"
                      >
                        {word.word}
                      </div>
                    ) : null
                  })}
                </div>

                {classifiedWords[category.id]?.length === 0 && (
                  <div className="text-sm text-[#a5b4fc]">将词根精灵拖到这里</div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {words.map((word) => {
              // Check if this word is already classified in any category
              const isClassified = Object.values(classifiedWords).some((wordList) => wordList.includes(word.id))

              if (isClassified) return null // Don't render classified words

              return (
                <div
                  key={word.id}
                  className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                    draggedWord === word.id
                      ? "bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white shadow-[0_0_10px_rgba(123,97,255,0.5)] cursor-grabbing"
                      : "bg-[#2a1b6a] text-[#d8b4fe] hover:bg-[#3a1d6f] border border-[#6366f1]/30 cursor-grab"
                  } shadow-md`}
                  draggable={true}
                  onDragStart={(e) => handleDragStart(e, word.id)}
                >
                  {word.word}
                </div>
              )
            })}
          </div>
        </>
      )}

      {!gameOver && (
        <Button
          variant="ghost"
          className="flex items-center text-[#a5b4fc] hover:text-[#d8b4fe] hover:bg-[#3a1d6f]/30"
          onClick={() => onBack(level)} // 传递当前关卡
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> 返回魔法岛
        </Button>
      )}
    </div>
  )
}

