"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, BookOpen, Search, Bookmark, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { learningCenterData } from "@/data/learning-center-data"
import { getLevelName } from "@/utils/level-utils"
import { addScoreAndExperience } from "@/lib/user-progress"
import { playSound } from "@/utils/sound-effects"

interface LearningCenterProps {
  level: string
  onBack: (currentLevel: string) => void // 添加返回参数
}

export default function LearningCenter({ level, onBack }: LearningCenterProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState(learningCenterData)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [bookmarks, setBookmarks] = useState<string[]>([])
  const [activeItem, setActiveItem] = useState<(typeof learningCenterData)[0] | null>(null)
  const [showItemDetails, setShowItemDetails] = useState(false)
  const [levelName, setLevelName] = useState("")
  const [readEntries, setReadEntries] = useState<Set<string>>(new Set())

  // Get level name
  useEffect(() => {
    setLevelName(getLevelName(level))
  }, [level])

  // Load bookmarks from localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem("wordRootBookmarks")
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks))
    }

    const savedRead = localStorage.getItem("wordRootRead")
    if (savedRead) {
      setReadEntries(new Set(JSON.parse(savedRead)))
    }
  }, [])

  // Filter data based on search term and category
  useEffect(() => {
    let filtered = learningCenterData

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.content.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }

    setFilteredData(filtered)
  }, [searchTerm, selectedCategory])

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category)
  }

  const handleBookmark = (id: string) => {
    let newBookmarks
    if (bookmarks.includes(id)) {
      newBookmarks = bookmarks.filter((bookmark) => bookmark !== id)
    } else {
      newBookmarks = [...bookmarks, id]
      // Add experience for bookmarking new content
      addScoreAndExperience(2, 5)
    }
    setBookmarks(newBookmarks)
    localStorage.setItem("wordRootBookmarks", JSON.stringify(newBookmarks))
  }

  const handleItemClick = (item: (typeof learningCenterData)[0]) => {
    setActiveItem(item)
    setShowItemDetails(true)

    // Mark as read if not already read
    if (!readEntries.has(item.id)) {
      const newReadEntries = new Set(readEntries)
      newReadEntries.add(item.id)
      setReadEntries(newReadEntries)
      localStorage.setItem("wordRootRead", JSON.stringify([...newReadEntries]))

      // Add experience for reading new content
      addScoreAndExperience(3, 8)
    }
  }

  const handleCloseDetails = () => {
    setShowItemDetails(false)
    setTimeout(() => setActiveItem(null), 300) // Wait for animation to complete
  }

  // Get unique categories
  const categories = Array.from(new Set(learningCenterData.map((item) => item.category)))

  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-bold text-[#f9c851] mb-6 flex items-center">
        <BookOpen className="h-7 w-7 mr-2 text-[#f9c851]" />
        魔法词根图书馆
      </h2>

      {/* Display current level */}
      <div className="bg-[#3a1d6f]/70 p-3 rounded-lg border border-[#6366f1]/30 mb-6">
        <p className="text-[#d8b4fe] font-medium">当前探索区域: {levelName}</p>
      </div>

      {/* Reading progress */}
      <div className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg p-4 mb-6 border border-[#6366f1]/30">
        <p className="text-[#a5b4fc] mb-2">魔法知识探索进度:</p>
        <div className="w-full bg-[#1a0b4b] h-4 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#60a5fa] to-[#818cf8] transition-all duration-500"
            style={{ width: `${Math.min(100, (readEntries.size / learningCenterData.length) * 100)}%` }}
          ></div>
        </div>
        <p className="text-right text-[#d8b4fe] mt-1">
          {readEntries.size} / {learningCenterData.length}
        </p>
      </div>

      {/* Search and filter */}
      <div className="mb-6">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a5b4fc]" size={18} />
          <Input
            type="text"
            placeholder="搜索魔法知识..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[#2a1b6a] border-[#6366f1]/30 text-[#d8b4fe] placeholder:text-[#a5b4fc]/70"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                selectedCategory === category
                  ? "bg-[#60a5fa] text-[#1a0b4b] font-medium shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                  : "bg-[#2a1b6a] text-[#60a5fa] border border-[#60a5fa]/30 hover:bg-[#3a1d6f]"
              }`}
            >
              {category}
            </button>
          ))}
          {bookmarks.length > 0 && (
            <button
              onClick={() => setFilteredData(learningCenterData.filter((item) => bookmarks.includes(item.id)))}
              className="px-3 py-1 rounded-full text-sm bg-[#2a1b6a] text-[#f9c851] border border-[#f9c851]/30 hover:bg-[#3a1d6f] flex items-center"
            >
              <Bookmark size={14} className="mr-1" /> 收藏
            </button>
          )}
        </div>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {filteredData.map((item) => {
          const isBookmarked = bookmarks.includes(item.id)
          const isRead = readEntries.has(item.id)

          return (
            <div
              key={item.id}
              className={`bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg p-4 border border-[#6366f1]/30 
                transition-all hover:shadow-[0_0_15px_rgba(123,97,255,0.3)] cursor-pointer relative
                ${isRead ? "opacity-100" : "opacity-85"}`}
              onClick={() => handleItemClick(item)}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-[#d8b4fe] mb-2">{item.title}</h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleBookmark(item.id)
                  }}
                  className={`p-1 rounded-full ${
                    isBookmarked ? "text-[#f9c851]" : "text-[#a5b4fc] hover:text-[#d8b4fe]"
                  }`}
                >
                  <Bookmark size={16} className={isBookmarked ? "fill-[#f9c851]" : ""} />
                </button>
              </div>
              <p className="text-[#a5b4fc] text-sm mb-3 line-clamp-2">{item.content.substring(0, 100)}...</p>
              <div className="flex justify-between items-center">
                <span className="text-xs px-2 py-1 rounded-full bg-[#1a0b4b] text-[#60a5fa]">{item.category}</span>
                {isRead && (
                  <span className="text-xs flex items-center text-[#a5b4fc]">
                    <Star size={12} className="mr-1 text-[#f9c851] fill-[#f9c851]" /> 已阅读
                  </span>
                )}
              </div>

              {/* Magical decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-4 h-4 bg-[#60a5fa]/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Item details modal */}
      {activeItem && (
        <div
          className={`fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity duration-300 ${
            showItemDetails ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleCloseDetails}
        >
          <div
            className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto transform transition-all duration-300 border border-[#6366f1]/30"
            style={{
              boxShadow: "0 0 30px rgba(123, 97, 255, 0.4)",
              transform: showItemDetails ? "scale(1)" : "scale(0.9)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-[#f9c851]">{activeItem.title}</h3>
              <div className="flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleBookmark(activeItem.id)
                  }}
                  className={`p-1 rounded-full mr-2 ${
                    bookmarks.includes(activeItem.id) ? "text-[#f9c851]" : "text-[#a5b4fc] hover:text-[#d8b4fe]"
                  }`}
                >
                  <Bookmark size={18} className={bookmarks.includes(activeItem.id) ? "fill-[#f9c851]" : ""} />
                </button>
                <button onClick={handleCloseDetails} className="text-[#a5b4fc] hover:text-[#d8b4fe]">
                  ✕
                </button>
              </div>
            </div>

            <div className="mb-4">
              <span className="text-sm px-2 py-1 rounded-full bg-[#1a0b4b] text-[#60a5fa]">{activeItem.category}</span>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="text-[#d8b4fe] whitespace-pre-line">
                {activeItem.content.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-3">
                    {paragraph}
                  </p>
                ))}
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

