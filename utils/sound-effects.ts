// 声音效果类型
export type SoundEffect =
  | "click"
  | "success"
  | "failure"
  | "gameStart"
  | "gameEnd"
  | "cardFlip"
  | "collect"
  | "match"
  | "levelUp"
  | "drag"
  | "drop"
  | "achievement"

// 声音文件路径映射
export const soundEffects: Record<SoundEffect, string> = {
  click: "/sounds/click.mp3",
  success: "/sounds/success.mp3",
  failure: "/sounds/failure.mp3",
  gameStart: "/sounds/game-start.mp3",
  gameEnd: "/sounds/game-end.mp3",
  cardFlip: "/sounds/card-flip.mp3",
  collect: "/sounds/collect.mp3",
  match: "/sounds/match.mp3",
  levelUp: "/sounds/level-up.mp3",
  drag: "/sounds/drag.mp3",
  drop: "/sounds/drop.mp3",
  achievement: "/sounds/achievement.mp3",
}

// 存储预加载的音频元素
const audioElements: Partial<Record<SoundEffect, HTMLAudioElement>> = {}

// 声音是否启用的状态
let soundEnabled = true

// 初始化声音设置
export const initSoundSettings = () => {
  if (typeof window === "undefined") return

  // 从本地存储中获取声音设置
  const savedSetting = localStorage.getItem("soundEnabled")
  if (savedSetting !== null) {
    soundEnabled = savedSetting === "true"
  }

  // 预加载声音文件
  Object.entries(soundEffects).forEach(([key, path]) => {
    try {
      const audio = new Audio(path)
      audio.preload = "auto"
      audioElements[key as SoundEffect] = audio

      // 触发加载但音量设为0
      audio.volume = 0
      audio
        .play()
        .then(() => {
          audio.pause()
          audio.currentTime = 0
          audio.volume = 1
        })
        .catch((err) => {
          console.log(`预加载声音 ${key} 失败: ${err.message}`)
        })
    } catch (error) {
      console.log(`创建音频元素 ${key} 失败:`, error)
    }
  })
}

// 播放声音
export const playSound = (sound: SoundEffect) => {
  if (!soundEnabled || typeof window === "undefined") return

  try {
    // 如果声音已经加载，则播放
    if (audioElements[sound]) {
      // 重置声音到开始位置
      audioElements[sound]!.currentTime = 0
      audioElements[sound]!.play().catch((err) => {
        console.log(`声音文件 ${sound} 播放失败: ${err.message}`)
      })
    } else {
      // 如果声音未预加载，则创建新的音频元素
      try {
        const audio = new Audio(soundEffects[sound])
        audio.play().catch((err) => {
          console.log(`声音文件 ${sound} 播放失败: ${err.message}`)
        })
      } catch (error) {
        console.log(`创建音频元素失败:`, error)
      }
    }
  } catch (error) {
    console.log(`播放声音 ${sound} 出错:`, error)
  }
}

// 切换声音开关
export const toggleSound = () => {
  soundEnabled = !soundEnabled
  if (typeof window !== "undefined") {
    localStorage.setItem("soundEnabled", soundEnabled.toString())
  }
  return soundEnabled
}

// 获取当前声音状态
export const getSoundEnabled = () => soundEnabled

