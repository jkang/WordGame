"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Trophy, Clock, CheckCircle, Bolt } from "lucide-react"
import { Button } from "@/components/ui/button"
import { rootsMatchingDataByLevel } from "@/data/root-matching-data-by-level"
import { getLevelName } from "@/utils/level-utils"
import { addScoreAndExperience, updateAchievement } from "@/lib/user-progress"
import { playSound } from "@/utils/sound-effects"

// Update the interface to include level
interface RootMatchingProps {
  level: keyof typeof rootsMatchingDataByLevel
  onBack: (currentLevel: string) => void // 添加返回参数
}

interface RootPair {
  id: number
  root: string
  meaning: string
}

export default function RootMatching({ level, onBack }: RootMatchingProps) {
  const [rootItems, setRootItems] = useState<RootPair[]>([])
  const [meaningItems, setMeaningItems] = useState<RootPair[]>([])
  const [selectedRoot, setSelectedRoot] = useState<number | null>(null)
  const [selectedMeaning, setSelectedMeaning] = useState<number | null>(null)
  const [matchedPairs, setMatchedPairs] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(90)
  const [gameOver, setGameOver] = useState(false)
  const [gameResult, setGameResult] = useState<"timeout" | "completed" | null>(null)
  const [correctMatch, setCorrectMatch] = useState<{ id: number; root: string; meaning: string } | null>(null)
  const [levelName, setLevelName] = useState<string>("")
  const [connectionEffect, setConnectionEffect] = useState(false)

  // Get level name
  useEffect(() => {
    setLevelName(getLevelName(level))
  }, [level])

  // 初始化游戏数据
  useEffect(() => {
    const levelData = rootsMatchingDataByLevel[level] || rootsMatchingDataByLevel["middle-school-8-unit1"]

    // 左侧按原始顺序展示所有词根
    setRootItems([...levelData])

    // 右侧随机打乱意思的顺序
    const shuffledMeanings = [...levelData].sort(() => 0.5 - Math.random())
    setMeaningItems(shuffledMeanings)

    // 播放游戏开始声音
    playSound("gameStart")
  }, [level])

  // 计时器
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

  // 处理匹配逻辑
  useEffect(() => {
    if (selectedRoot !== null && selectedMeaning !== null) {
      // 查找选中的词根和意思是否匹配
      const rootItem = rootItems.find((p) => p.id === selectedRoot)
      const meaningItem = meaningItems.find((p) => p.id === selectedMeaning)

      if (rootItem && meaningItem && rootItem.id === meaningItem.id) {
        // 匹配成功
        setCorrectMatch({
          id: rootItem.id,
          root: rootItem.root,
          meaning: rootItem.meaning,
        })

        setConnectionEffect(true)
        // 播放匹配成功声音
        playSound("match")

        // 短暂显示匹配成功的视觉效果
        setTimeout(() => {
          // 更新已匹配的对和分数
          setMatchedPairs((prev) => [...prev, rootItem.id])
          setScore((prev) => prev + 1)
          setCorrectMatch(null)
          setSelectedRoot(null)
          setSelectedMeaning(null)
          setConnectionEffect(false)

          // 检查是否所有对都已匹配
          if (matchedPairs.length + 1 >= rootItems.length) {
            setGameOver(true)
            setGameResult("completed")
            // 播放游戏结束声音
            playSound("gameEnd")

            // Add score and experience
            addScoreAndExperience(score, score * 15)

            // Check for perfect match achievement
            if (score + 1 >= rootItems.length) {
              updateAchievement("perfect_match")
              // 播放成就解锁声音
              playSound("achievement")
            }
          }
        }, 800)
      } else {
        // 匹配失败，只清除右侧选择，允许用户重新选择左侧或右侧
        setSelectedMeaning(null)
      }
    }
  }, [selectedRoot, selectedMeaning, rootItems, meaningItems, matchedPairs, score])

  const handleRootClick = (id: number) => {
    if (gameOver || correctMatch) return

    // 如果该词根已匹配，不做任何操作
    if (matchedPairs.includes(id)) {
      return
    }

    // 允许重新选择左侧词根
    setSelectedRoot(id)
  }

  const handleMeaningClick = (id: number) => {
    if (gameOver || correctMatch || selectedRoot === null) return

    // 如果该意思已匹配，不做任何操作
    if (matchedPairs.includes(id)) {
      return
    }

    setSelectedMeaning(id)
  }

  const isRootMatched = (id: number) => {
    return matchedPairs.includes(id)
  }

  const isMeaningMatched = (id: number) => {
    return matchedPairs.includes(id)
  }

  const isRootCorrect = (id: number) => {
    return correctMatch?.id === id
  }

  const isMeaningCorrect = (id: number) => {
    return correctMatch?.id === id
  }

  const handleRestart = () => {
    const levelData = rootsMatchingDataByLevel[level] || rootsMatchingDataByLevel["middle-school-8-unit1"]

    // 左侧按原始顺序展示所有词根
    setRootItems([...levelData])

    // 右侧随机打乱意思的顺序
    const shuffledMeanings = [...levelData].sort(() => 0.5 - Math.random())
    setMeaningItems(shuffledMeanings)

    setSelectedRoot(null)
    setSelectedMeaning(null)
    setMatchedPairs([])
    setScore(0)
    setTimeLeft(90)
    setGameOver(false)
    setGameResult(null)
    setCorrectMatch(null)
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#f9c851] mb-6 flex items-center">
        <Bolt className="h-7 w-7 mr-2 text-[#f9c851]" />
        词根连接术
      </h2>

      {/* Display current level */}
      <div className="bg-[#3a1d6f]/70 p-3 rounded-lg border border-[#6366f1]/30 mb-6">
        <p className="text-[#d8b4fe] font-medium">当前探索区域: {levelName}</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="bg-[#2a1b6a] px-6 py-2 rounded-full shadow-[0_0_10px_rgba(123,97,255,0.3)] text-[#f9c851]">
          魔法连接: {score}/{rootItems.length}
        </div>
        <div
          className={`${
            timeLeft <= 15
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
            {gameResult === "timeout" ? "魔法时间结束！" : "连接完成！"}
          </h3>
          <p className="text-lg mb-4 text-[#d8b4fe]">
            你的魔法连接: <span className="font-bold text-[#f9c851]">{score}</span> / {rootItems.length}
          </p>
          <p className="mb-6 text-[#a5b4fc]">
            {score >= rootItems.length * 0.7
              ? "太棒了！你已经掌握了强大的词根连接能力！"
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
              再次连接
            </Button>
          </div>
        </div>
      ) : (
        <div className="relative">
          {connectionEffect && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#f9c851]/10 to-[#ff8a5c]/10 animate-pulse z-0 rounded-lg"></div>
          )}

          <div className="grid grid-cols-2 gap-6 relative z-10">
            <div className="space-y-4">
              {rootItems.map((item) => (
                <div
                  key={`root-${item.id}`}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 relative ${
                    isRootMatched(item.id)
                      ? "bg-[#1a0b4b]/30 text-[#a5b4fc]/50 border border-[#6366f1]/20"
                      : isRootCorrect(item.id)
                        ? "bg-gradient-to-r from-[#10b981]/20 to-[#34d399]/20 text-[#34d399] border border-[#10b981]"
                        : selectedRoot === item.id
                          ? "bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white shadow-[0_0_10px_rgba(123,97,255,0.5)]"
                          : "bg-[#2a1b6a] hover:bg-[#3a1d6f] text-[#d8b4fe] border border-[#6366f1]/30"
                  } shadow-md`}
                  onClick={() => handleRootClick(item.id)}
                >
                  <div className="text-right">{item.root}</div>
                  {isRootCorrect(item.id) && (
                    <CheckCircle className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#34d399] h-5 w-5" />
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {meaningItems.map((item) => (
                <div
                  key={`meaning-${item.id}`}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 relative ${
                    isMeaningMatched(item.id)
                      ? "bg-[#1a0b4b]/30 text-[#a5b4fc]/50 border border-[#6366f1]/20"
                      : isRootCorrect(item.id)
                        ? "bg-gradient-to-r from-[#10b981]/20 to-[#34d399]/20 text-[#34d399] border border-[#10b981]"
                        : selectedMeaning === item.id
                          ? "bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white shadow-[0_0_10px_rgba(123,97,255,0.5)]"
                          : selectedRoot !== null
                            ? "bg-[#2a1b6a] hover:bg-[#3a1d6f] text-[#d8b4fe] border border-[#6366f1]/30"
                            : "bg-[#2a1b6a] text-[#a5b4fc]/70 border border-[#6366f1]/20"
                  } shadow-md ${selectedRoot === null && !isMeaningMatched(item.id) ? "cursor-not-allowed" : ""}`}
                  onClick={() => handleMeaningClick(item.id)}
                >
                  <div>{item.meaning}</div>
                  {isMeaningCorrect(item.id) && (
                    <CheckCircle className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#34d399] h-5 w-5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {!gameOver && (
        <div className="mt-6">
          <Button
            variant="ghost"
            className="flex items-center text-[#a5b4fc] hover:text-[#d8b4fe] hover:bg-[#3a1d6f]/30"
            onClick={() => onBack(level)} // 传递当前关卡
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> 返回魔法岛
          </Button>
        </div>
      )}
    </div>
  )
}

