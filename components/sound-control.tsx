"use client"

import { useState, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toggleSound, getSoundEnabled, initSoundSettings, playSound } from "@/utils/sound-effects"

export function SoundControl() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)

  useEffect(() => {
    // 初始化声音设置
    initSoundSettings()
    setIsSoundEnabled(getSoundEnabled())
  }, [])

  const handleToggleSound = () => {
    const newState = toggleSound()
    setIsSoundEnabled(newState)
    // 如果开启声音，播放一个点击声音作为反馈
    if (newState) {
      playSound("click")
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggleSound}
      className="rounded-full bg-[#2a1b6a]/80 hover:bg-[#3a1d6f] text-[#a5b4fc] hover:text-[#d8b4fe]"
      aria-label={isSoundEnabled ? "关闭声音" : "开启声音"}
    >
      {isSoundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
    </Button>
  )
}

export default SoundControl

