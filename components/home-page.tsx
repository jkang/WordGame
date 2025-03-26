"use client"
import { BookOpen, Puzzle, Layers, WalletCardsIcon as Cards, Sparkles, Hammer } from "lucide-react"
import type { UserProgress } from "@/lib/user-progress"
import { useMemo } from "react"
import { useRef } from 'react'; // 添加 useRef
import { playSound } from "@/utils/sound-effects"

interface HomePageProps {
  onNavigate: (page: string) => void
  userProgress: UserProgress
}

export default function HomePage({ onNavigate, userProgress }: HomePageProps) {
  // 修改为使用 useRef 保持 lastPlayTime
  const lastPlayTime = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 修改 handleClick 实现，确保正确使用 ref
  const handleClick = useMemo(() => (page: string) => {
    const now = Date.now();
    if (now - lastPlayTime.current > 100) {
      try {
        if (!audioRef.current) {
          audioRef.current = new Audio('/sounds/click.mp3');
          // 预加载音频
          audioRef.current.load();
        }
        // 重置播放位置
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(error => {
          console.log('声音播放失败:', error);
        });
      } catch (error) {
        console.error('声音播放失败:', error);
      }
      lastPlayTime.current = now;
    }
    onNavigate(page);
  }, [onNavigate]);

  return (
    <div>
      {/* User stats summary */}
      <div className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg p-4 shadow-[0_0_15px_rgba(123,97,255,0.3)] mb-6 border border-[#6366f1]/30 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center mb-2 sm:mb-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#f9c851] to-[#ff8a5c] flex items-center justify-center mr-3">
              <span className="text-white text-xl font-bold">{userProgress.level}</span>
            </div>
            <div>
              <p className="text-[#f9c851] font-medium">探险等级</p>
              <div className="flex items-center">
                <div className="w-24 sm:w-32 bg-[#1a0b4b] h-2 rounded-full overflow-hidden mr-2">
                  <div
                    className="bg-gradient-to-r from-[#f9c851] to-[#ff8a5c] h-full rounded-full"
                    style={{ width: `${(userProgress.experience / userProgress.experienceToNextLevel) * 100}%` }}
                  ></div>
                </div>
                <span className="text-[#a5b4fc] text-xs">
                  {userProgress.experience}/{userProgress.experienceToNextLevel}
                </span>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3a1d6f] mx-auto">
                <Sparkles className="h-5 w-5 text-[#f9c851]" />
              </div>
              <p className="text-[#f9c851] font-medium mt-1">
                {userProgress.achievements.filter((a) => a.unlocked).length}
              </p>
              <p className="text-[#a5b4fc] text-xs">成就</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3a1d6f] mx-auto">
                <Cards className="h-5 w-5 text-[#f9c851]" />
              </div>
              <p className="text-[#f9c851] font-medium mt-1">{userProgress.totalStars}</p>
              <p className="text-[#a5b4fc] text-xs">星星</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3a1d6f] mx-auto">
                <BookOpen className="h-5 w-5 text-[#f9c851]" />
              </div>
              <p className="text-[#f9c851] font-medium mt-1">{userProgress.totalScore}</p>
              <p className="text-[#a5b4fc] text-xs">积分</p>
            </div>
          </div>
        </div>
      </div>

      {/* Game cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 词根卡牌收集 */}
        <div
          className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg p-6 shadow-[0_0_15px_rgba(123,97,255,0.3)] cursor-pointer hover:shadow-[0_0_20px_rgba(123,97,255,0.5)] transition-all duration-300 transform hover:-translate-y-1 border border-[#6366f1]/30 backdrop-blur-sm"
          onClick={() => handleClick("word-card-game")}
        >
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] flex items-center justify-center mr-3">
              <Cards className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#f9c851]">词根卡牌收集</h2>
          </div>
          <p className="text-[#a5b4fc] mb-4">收集稀有词根卡牌，解锁词汇魔法</p>
          <div className="flex justify-end">
            <div className="w-12 h-12 rounded-full bg-[#3a1d6f] flex items-center justify-center shadow-[0_0_10px_rgba(123,97,255,0.3)]">
              <Cards className="h-6 w-6 text-[#f9c851]" />
            </div>
          </div>
        </div>

        {/* 词根锻造坊 */}
        <div
          className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg p-6 shadow-[0_0_15px_rgba(123,97,255,0.3)] cursor-pointer hover:shadow-[0_0_20px_rgba(123,97,255,0.5)] transition-all duration-300 transform hover:-translate-y-1 border border-[#6366f1]/30 backdrop-blur-sm"
          onClick={() => handleClick("word-building")}
        >
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#f472b6] to-[#ec4899] flex items-center justify-center mr-3">
              <Hammer className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#f9c851]">词根锻造坊</h2>
          </div>
          <p className="text-[#a5b4fc] mb-4">锻造强大的单词，释放词根魔法力量</p>
          <div className="flex justify-end">
            <div className="w-12 h-12 rounded-full bg-[#3a1d6f] flex items-center justify-center shadow-[0_0_10px_rgba(123,97,255,0.3)]">
              <Hammer className="h-6 w-6 text-[#f9c851]" />
            </div>
          </div>
        </div>

        {/* 词根连接术 */}
        <div
          className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg p-6 shadow-[0_0_15px_rgba(123,97,255,0.3)] cursor-pointer hover:shadow-[0_0_20px_rgba(123,97,255,0.5)] transition-all duration-300 transform hover:-translate-y-1 border border-[#6366f1]/30 backdrop-blur-sm"
          onClick={() => handleClick("root-matching")}
        >
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] flex items-center justify-center mr-3">
              <Puzzle className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#f9c851]">词根连接术</h2>
          </div>
          <p className="text-[#a5b4fc] mb-4">连接词根与魔法意义，解锁隐藏力量</p>
          <div className="flex justify-end">
            <div className="w-12 h-12 rounded-full bg-[#3a1d6f] flex items-center justify-center shadow-[0_0_10px_rgba(123,97,255,0.3)]">
              <Puzzle className="h-6 w-6 text-[#f9c851]" />
            </div>
          </div>
        </div>

        {/* 词根分类法阵 */}
        <div
          className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg p-6 shadow-[0_0_15px_rgba(123,97,255,0.3)] cursor-pointer hover:shadow-[0_0_20px_rgba(123,97,255,0.5)] transition-all duration-300 transform hover:-translate-y-1 border border-[#6366f1]/30 backdrop-blur-sm"
          onClick={() => handleClick("root-classification")}
        >
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#34d399] to-[#10b981] flex items-center justify-center mr-3">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#f9c851]">词根分类法阵</h2>
          </div>
          <p className="text-[#a5b4fc] mb-4">将词根精灵分类到正确的魔法阵中</p>
          <div className="flex justify-end">
            <div className="w-12 h-12 rounded-full bg-[#3a1d6f] flex items-center justify-center shadow-[0_0_10px_rgba(123,97,255,0.3)]">
              <Layers className="h-6 w-6 text-[#f9c851]" />
            </div>
          </div>
        </div>

        {/* 魔法词根图书馆 */}
        <div
          className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg p-6 shadow-[0_0_15px_rgba(123,97,255,0.3)] cursor-pointer hover:shadow-[0_0_20px_rgba(123,97,255,0.5)] transition-all duration-300 transform hover:-translate-y-1 border border-[#6366f1]/30 backdrop-blur-sm"
          onClick={() => handleClick("learning-center")}
        >
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] flex items-center justify-center mr-3">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#f9c851]">魔法词根图书馆</h2>
          </div>
          <p className="text-[#a5b4fc] mb-4">探索古老的词根知识，掌握词汇奥秘</p>
          <div className="flex justify-end">
            <div className="w-12 h-12 rounded-full bg-[#3a1d6f] flex items-center justify-center shadow-[0_0_10px_rgba(123,97,255,0.3)]">
              <BookOpen className="h-6 w-6 text-[#f9c851]" />
            </div>
          </div>
        </div>

        {/* 词根精灵的秘密 */}
        <div
          className="bg-gradient-to-br from-[#2a1b6a] to-[#3a1d6f] rounded-lg p-6 shadow-[0_0_15px_rgba(123,97,255,0.3)] cursor-pointer hover:shadow-[0_0_20px_rgba(123,97,255,0.5)] transition-all duration-300 transform hover:-translate-y-1 border border-[#6366f1]/30 backdrop-blur-sm"
          onClick={() => handleClick("root-spirits")}
        >
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#d8b4fe] to-[#c4b5fd] flex items-center justify-center mr-3">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#f9c851]">词根精灵的秘密</h2>
          </div>
          <p className="text-[#a5b4fc] mb-4">探索并收集各种词根精灵，了解它们的特性和力量</p>
          <div className="flex justify-end">
            <div className="w-12 h-12 rounded-full bg-[#3a1d6f] flex items-center justify-center shadow-[0_0_10px_rgba(123,97,255,0.3)]">
              <Sparkles className="h-6 w-6 text-[#f9c851]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

