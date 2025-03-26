"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Trophy, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { wordBuildingDataByLevel } from "@/data/word-building-data-by-level"
import { getLevelName } from "@/utils/level-utils"
import { addScoreAndExperience, updateAchievement } from "@/lib/user-progress"
import { playSound } from "@/utils/sound-effects"

// Update the interface to include level
interface WordBuildingProps {
  level: keyof typeof wordBuildingDataByLevel 
  onBack: (currentLevel: string) => void // 添加返回参数
}

export default function WordBuilding({ level, onBack }: WordBuildingProps) {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [gameResult, setGameResult] = useState<"timeout" | "completed" | null>(null)
  const [shuffledQuestions, setShuffledQuestions] = useState<(typeof wordBuildingDataByLevel)["middle-school-8-unit1"]>(
    [],
  )
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([])
  const [lastAnswer, setLastAnswer] = useState<{ correct: string[]; selected: string[] } | null>(null)
  const [formedWord, setFormedWord] = useState<string>("")
  const [levelName, setLevelName] = useState<string>("")
  const [magicEffect, setMagicEffect] = useState(false)

  // Get level name
  useEffect(() => {
    setLevelName(getLevelName(level))
  }, [level])

  // Shuffle questions on component mount
  useEffect(() => {
    const levelQuestions = wordBuildingDataByLevel[level] || wordBuildingDataByLevel["middle-school-8-unit1"]
    const shuffled = [...levelQuestions].sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)

    if (shuffled.length > 0) {
      // Shuffle options for the first question
      setShuffledOptions([...shuffled[0].options].sort(() => Math.random() - 0.5))
      // 播放游戏开始声音
      playSound("gameStart")
    }
  }, [level])

  // Current question from shuffled array
  const currentQuestion = shuffledQuestions[currentQuestionIndex] || wordBuildingDataByLevel["middle-school-8-unit1"][0]

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

  // Shuffle options when question changes
  useEffect(() => {
    if (shuffledQuestions.length > 0 && currentQuestionIndex < shuffledQuestions.length) {
      setShuffledOptions([...shuffledQuestions[currentQuestionIndex].options].sort(() => Math.random() - 0.5))
    }
  }, [currentQuestionIndex, shuffledQuestions])

  const handleOptionClick = (option: string) => {
    if (gameOver) return

    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  const handleCheck = () => {
    if (gameOver) return

    // 修改检查逻辑：检查选项数量和顺序是否都正确
    const isSelectionCorrect =
      // 检查长度是否相同
      selectedOptions.length === currentQuestion.correctOptions.length &&
      // 检查每个位置的元素是否匹配
      selectedOptions.every((option, index) => option === currentQuestion.correctOptions[index])

    // 存储最后一次回答用于调试
    setLastAnswer({
      correct: [...currentQuestion.correctOptions],
      selected: [...selectedOptions],
    })

    if (isSelectionCorrect) {
      setScore(score + 1)
      setIsCorrect(true)
      // 设置正确的单词
      setFormedWord(selectedOptions.join(""))
      setMagicEffect(true)
      // 播放成功声音
      playSound("success")

      // Update achievements
      if (score === 0) {
        updateAchievement("first_word")
      }
      updateAchievement("word_master")
    } else {
      setIsCorrect(false)
      setFormedWord("")
      // 播放失败声音
      playSound("failure")
    }

    setTimeout(() => {
      setIsCorrect(null)
      setSelectedOptions([])
      setFormedWord("")
      setMagicEffect(false)
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        setGameOver(true)
        setGameResult("completed")
        // 播放游戏结束声音
        playSound("gameEnd")
        // Add score and experience
        addScoreAndExperience(score, score * 10)
      }
    }, 1500)
  }

  const handleSkip = () => {
    if (gameOver) return

    setSelectedOptions([])
    setFormedWord("")
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setGameOver(true)
      setGameResult("completed")
      // Add score and experience
      addScoreAndExperience(score, score * 10)
    }
  }

  const handleRestart = () => {
    // Reshuffle questions for a new game
    const levelQuestions = wordBuildingDataByLevel[level] || wordBuildingDataByLevel["middle-school-8-unit1"]
    const shuffled = [...levelQuestions].sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)

    if (shuffled.length > 0) {
      setShuffledOptions([...shuffled[0].options].sort(() => Math.random() - 0.5))
    }

    setScore(0)
    setTimeLeft(60)
    setCurrentQuestionIndex(0)
    setSelectedOptions([])
    setIsCorrect(null)
    setGameOver(false)
    setGameResult(null)
    setLastAnswer(null)
    setFormedWord("")
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#f9c851] mb-6 flex items-center">
        <Sparkles className="h-7 w-7 mr-2 text-[#f9c851]" />
        词根锻造坊
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
            {gameResult === "timeout" ? "魔法时间结束！" : "锻造完成！"}
          </h3>
          <p className="text-lg mb-4 text-[#d8b4fe]">
            你的魔法能量: <span className="font-bold text-[#f9c851]">{score}</span> / {shuffledQuestions.length}
          </p>
          <p className="mb-6 text-[#a5b4fc]">
            {score >= shuffledQuestions.length * 0.7
              ? "太棒了！你已经掌握了强大的词根锻造能力！"
              : "继续练习，你的词根魔法将会更加强大！"}
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="border-[#6366f1] text-[#a5b4fc] hover:bg-[#3a1d6f] hover:text-[#d8b4fe]"
              onClick={() => onBack(level)} // 传递当前关卡
            >
              返回魔法岛
            </Button>
            <Button
              className="bg-gradient-to-r from-[#f9c851] to-[#ff8a5c] hover:from-[#f8b037] hover:to-[#ff7a43] text-white"
              onClick={handleRestart}
            >
              再次锻造
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg shadow-[0_0_15px_rgba(123,97,255,0.3)] p-6 mb-6 border border-[#6366f1]/30 relative overflow-hidden">
          {magicEffect && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#f9c851]/20 to-[#ff8a5c]/20 animate-pulse z-0"></div>
          )}

          <div className="mb-4 relative z-10">
            <h3 className="text-lg font-medium mb-2 text-[#d8b4fe]">锻造目标:</h3>
            <div className="flex items-center">
              <p className="text-xl text-[#f9c851]">{currentQuestion.meaning}</p>
              {formedWord && (
                <div className="ml-4 border border-[#f9c851] px-4 py-1 text-xl text-[#f9c851] bg-[#2a1b6a]/50 rounded">
                  {formedWord}
                </div>
              )}
            </div>
          </div>

          <div className="h-24 bg-[#1a0b4b]/50 rounded-lg mb-6 border border-[#6366f1]/30 relative z-10">
            <div className="flex flex-wrap gap-2 p-4">
              {selectedOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white px-3 py-1 rounded-md shadow-[0_0_5px_rgba(123,97,255,0.5)]"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6 relative z-10">
            {shuffledOptions.map((option, index) => (
              <button
                key={index}
                className={`py-3 px-4 rounded-lg text-center transition-all duration-300 ${
                  selectedOptions.includes(option)
                    ? "bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white shadow-[0_0_10px_rgba(123,97,255,0.5)]"
                    : "bg-[#1a0b4b]/50 text-[#a5b4fc] border border-[#6366f1]/30 hover:bg-[#3a1d6f] hover:text-[#d8b4fe]"
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {isCorrect !== null && (
            <div
              className={`mb-4 p-3 rounded-md text-center relative z-10 ${
                isCorrect
                  ? "bg-gradient-to-r from-[#10b981]/20 to-[#34d399]/20 border border-[#10b981]"
                  : "bg-gradient-to-r from-[#ef4444]/20 to-[#f87171]/20 border border-[#ef4444]"
              }`}
            >
              {isCorrect ? (
                <p className="text-[#34d399] font-medium">魔法锻造成功！</p>
              ) : (
                <div>
                  <p className="text-[#f87171] font-medium">魔法锻造失败！</p>
                  <p className="text-xs mt-1 text-[#f87171]">正确的魔法组合: {lastAnswer?.correct.join(" + ")}</p>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-between relative z-10">
            <Button
              variant="outline"
              className="border-[#6366f1] text-[#a5b4fc] hover:bg-[#3a1d6f] hover:text-[#d8b4fe]"
              onClick={handleSkip}
            >
              跳过
            </Button>
            <Button
              className="bg-gradient-to-r from-[#f9c851] to-[#ff8a5c] hover:from-[#f8b037] hover:to-[#ff7a43] text-white"
              onClick={handleCheck}
            >
              锻造
            </Button>
          </div>
        </div>
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

