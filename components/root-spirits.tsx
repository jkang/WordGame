"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Sparkles, Search, Filter, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getLevelName } from "@/utils/level-utils"
import { addScoreAndExperience } from "@/lib/user-progress"
import { SPIRIT_TYPES, rootSpiritsData } from "@/data/root-spirits-data"
import { playSound } from "@/utils/sound-effects"

interface RootSpiritsProps {
  level: string
  onBack: (currentLevel: string) => void // 添加返回参数
}

export default function RootSpirits({ level, onBack }: RootSpiritsProps) {
  const [spirits, setSpirits] = useState(rootSpiritsData)
  const [filteredSpirits, setFilteredSpirits] = useState(rootSpiritsData)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [levelName, setLevelName] = useState("")
  const [collectedSpirits, setCollectedSpirits] = useState<Set<string>>(new Set())
  const [activeSpirit, setActiveSpirit] = useState<any | null>(null)
  const [showSpiritDetails, setShowSpiritDetails] = useState(false)
  const [showOnlyCollected, setShowOnlyCollected] = useState(false)

  // Get level name
  useEffect(() => {
    setLevelName(getLevelName(level))
  }, [level])

  // Filter spirits based on search, category, and collection status
  useEffect(() => {
    let filtered = [...spirits]

    if (searchTerm) {
      filtered = filtered.filter(
        (spirit) =>
          spirit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          spirit.meaning.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter((spirit) => spirit.category === selectedCategory)
    }

    if (showOnlyCollected) {
      filtered = filtered.filter((spirit) => spirit.collected)
    }

    setFilteredSpirits(filtered)
  }, [searchTerm, selectedCategory, showOnlyCollected, spirits])

  // Load collected spirits from localStorage
  useEffect(() => {
    const savedCollected = localStorage.getItem("collectedSpirits")
    if (savedCollected) {
      const collected = new Set(JSON.parse(savedCollected))
      setCollectedSpirits(collected as Set<string>)

      // Update spirits collection status
      setSpirits(
        spirits.map((spirit) => ({
          ...spirit,
          collected: collected.has(spirit.id) || spirit.collected,
        })),
      )
    } else {
      // Initialize with pre-collected spirits
      const initialCollected = new Set(spirits.filter((s) => s.collected).map((s) => s.id))
      setCollectedSpirits(initialCollected)
      localStorage.setItem("collectedSpirits", JSON.stringify([...initialCollected]))
    }
  }, [])

  const handleSpiritClick = (spirit: any) => {
    setActiveSpirit(spirit)
    setShowSpiritDetails(true)
    // 播放卡片翻动声音
    playSound("cardFlip")

    // If not already collected, add to collection
    if (!spirit.collected) {
      const newCollected = new Set(collectedSpirits)
      newCollected.add(spirit.id)
      setCollectedSpirits(newCollected)

      // Save to localStorage
      localStorage.setItem("collectedSpirits", JSON.stringify([...newCollected]))

      // Update spirit collection status
      setSpirits(spirits.map((s) => (s.id === spirit.id ? { ...s, collected: true } : s)))

      // 播放收集声音
      playSound("collect")

      // Add experience points for discovering a new spirit
      addScoreAndExperience(5, 10)
    }
  }

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category === selectedCategory ? null : category)
  }

  const handleCloseDetails = () => {
    setShowSpiritDetails(false)
    setTimeout(() => setActiveSpirit(null), 300) // Wait for animation to complete
  }

  const toggleShowCollected = () => {
    setShowOnlyCollected(!showOnlyCollected)
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#f9c851] mb-6 flex items-center">
        <Sparkles className="h-7 w-7 mr-2 text-[#f9c851]" />
        词根精灵的秘密
      </h2>

      {/* Display current level */}
      <div className="bg-[#3a1d6f]/70 p-3 rounded-lg border border-[#6366f1]/30 mb-6">
        <p className="text-[#d8b4fe] font-medium">当前探索区域: {levelName}</p>
      </div>

      {/* Spirit collection progress */}
      <div className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg p-4 mb-6 border border-[#6366f1]/30">
        <p className="text-[#a5b4fc] mb-2">词根精灵收集进度:</p>
        <div className="w-full bg-[#1a0b4b] h-4 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#f9c851] to-[#ff8a5c] transition-all duration-500"
            style={{ width: `${Math.min(100, (spirits.filter((s) => s.collected).length / spirits.length) * 100)}%` }}
          ></div>
        </div>
        <p className="text-right text-[#d8b4fe] mt-1">
          {spirits.filter((s) => s.collected).length} / {spirits.length}
        </p>
      </div>

      {/* Introduction section */}
      <div className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg p-4 mb-6 border border-[#6366f1]/30">
        <div className="flex items-center mb-2">
          <BookOpen className="h-5 w-5 mr-2 text-[#f9c851]" />
          <h3 className="text-xl font-bold text-[#f9c851]">词根精灵图鉴</h3>
        </div>
        <p className="text-[#d8b4fe] mb-3">
          在魔法词根岛上，英语单词由神秘的词根、前缀和后缀精灵组成。词根精灵掌管单词的核心意义，而前缀和后缀精灵则能改变或增强这个意义。
        </p>
        <p className="text-[#a5b4fc]">
          收集并掌握这些词根精灵的力量，你将能轻松理解和记忆成千上万的英语单词！点击精灵卡片了解更多信息。
        </p>
      </div>

      {/* Search and filter */}
      <div className="mb-6">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a5b4fc]" size={18} />
          <Input
            type="text"
            placeholder="搜索词根精灵..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[#2a1b6a] border-[#6366f1]/30 text-[#d8b4fe] placeholder:text-[#a5b4fc]/70"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => handleCategorySelect(null)}
            className={`px-3 py-1 rounded-full text-sm transition-all ${
              selectedCategory === null
                ? "bg-[#f9c851] text-[#1a0b4b] font-medium shadow-[0_0_10px_rgba(249,200,81,0.5)]"
                : "bg-[#2a1b6a] text-[#a5b4fc] border border-[#6366f1]/30 hover:bg-[#3a1d6f]"
            }`}
          >
            全部精灵
          </button>

          {SPIRIT_TYPES.map((type) => (
            <button
              key={type.category}
              onClick={() => handleCategorySelect(type.category)}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                selectedCategory === type.category
                  ? `bg-[${type.color}] text-[#1a0b4b] font-medium shadow-[0_0_10px_rgba(123,97,255,0.5)]`
                  : `bg-[#2a1b6a] text-[${type.color}] border border-[#6366f1]/30 hover:bg-[#3a1d6f]`
              }`}
            >
              {type.name}
            </button>
          ))}

          <button
            onClick={toggleShowCollected}
            className={`ml-auto px-3 py-1 rounded-full text-sm transition-all flex items-center ${
              showOnlyCollected
                ? "bg-[#f9c851] text-[#1a0b4b] font-medium"
                : "bg-[#2a1b6a] text-[#a5b4fc] border border-[#6366f1]/30"
            }`}
          >
            <Filter className="h-4 w-4 mr-1" />
            仅显示已收集
          </button>
        </div>
      </div>

      {/* Spirit grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {filteredSpirits.map((spirit) => {
          const spiritType = SPIRIT_TYPES.find((t) => t.category === spirit.category) || SPIRIT_TYPES[0]

          return (
            <div
              key={spirit.id}
              onClick={() => handleSpiritClick(spirit)}
              className={`relative bg-gradient-to-br ${spiritType.bgGradient} border border-[${spiritType.color}]/30 
                rounded-lg p-4 cursor-pointer transition-all hover:shadow-[0_0_15px_rgba(123,97,255,0.3)] 
                hover:scale-105 ${spirit.collected ? "opacity-100" : "opacity-70"}`}
            >
              {/* Sparkle effects */}
              <div className="absolute top-2 right-2">
                <Sparkles
                  size={16}
                  className={`text-[${spiritType.color}] ${spirit.collected ? "animate-pulse" : "opacity-50"}`}
                />
              </div>

              <h3 className={`text-[${spiritType.color}] font-bold mb-1`}>{spirit.name}</h3>
              <p className="text-[#d8b4fe] text-sm">{spirit.meaning}</p>

              {!spirit.collected && (
                <div className="absolute inset-0 bg-[#1a0b4b]/50 rounded-lg flex items-center justify-center">
                  <p className="text-[#a5b4fc] text-sm">点击探索</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Spirit details modal */}
      {activeSpirit && (
        <div
          className={`fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity duration-300 ${
            showSpiritDetails ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleCloseDetails}
        >
          <div
            className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg p-6 max-w-md w-full mx-4 transform transition-all duration-300 border border-[#6366f1]/30"
            style={{
              boxShadow: "0 0 30px rgba(123, 97, 255, 0.4)",
              transform: showSpiritDetails ? "scale(1)" : "scale(0.9)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-[#f9c851]">词根精灵详情</h3>
              <button onClick={handleCloseDetails} className="text-[#a5b4fc] hover:text-[#d8b4fe]">
                ✕
              </button>
            </div>

            <div className="mb-6 flex items-center">
              <div className="mr-4 bg-[#1a0b4b] p-3 rounded-full">
                <Sparkles size={32} className="text-[#f9c851] animate-pulse" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#d8b4fe]">{activeSpirit.name}</h4>
                <p className="text-[#a5b4fc]">
                  {SPIRIT_TYPES.find((t) => t.category === activeSpirit.category)?.name || "未知精灵"}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="text-[#f9c851] font-medium mb-1">精灵含义</h5>
                <p className="text-[#d8b4fe] bg-[#1a0b4b]/50 p-3 rounded-lg">{activeSpirit.meaning}</p>
              </div>

              <div>
                <h5 className="text-[#f9c851] font-medium mb-1">精灵能力</h5>
                <p className="text-[#d8b4fe] bg-[#1a0b4b]/50 p-3 rounded-lg">{activeSpirit.description}</p>
              </div>

              <div>
                <h5 className="text-[#f9c851] font-medium mb-1">示例单词</h5>
                <div className="flex flex-wrap gap-2">
                  {activeSpirit.examples.map((example: string, index: number) => (
                    <span key={index} className="bg-[#1a0b4b]/50 px-3 py-1 rounded-full text-[#a5b4fc] text-sm">
                      {example}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-[#f9c851] font-medium mb-1">组合魔法</h5>
                <p className="text-[#d8b4fe] bg-[#1a0b4b]/50 p-3 rounded-lg">
                  {activeSpirit.category === "prefix" && "这个前缀精灵可以与词根精灵组合，改变或增强词根的含义。"}
                  {activeSpirit.category === "root" && "这个词根精灵可以与前缀和后缀精灵组合，创造出更强大的单词魔法。"}
                  {activeSpirit.category === "suffix" &&
                    "这个后缀精灵可以与词根精灵组合，改变词根的词性或为词根添加特定的含义。"}
                </p>
              </div>
            </div>
          </div>
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

