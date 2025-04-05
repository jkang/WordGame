"use client"
import type { VocabularyWord } from "@/types/vocabulary"
import { FANTASY_THEME, generateWordVisual } from "@/components/visual-memory-generator"

// Define a map of word to SVG template content
export const wordCardTemplates: Record<string, string> = {
  // We'll keep the existing templates but update the default template
}

interface WordCardProps {
  word: VocabularyWord
}

// Helper function to wrap text to fit within a specified width
function wrapText(text: string, maxWidth: number, fontSize: number): string[] {
  // 更精确的字符宽度计算：中文字符占 fontSize 宽度，英文字符占 fontSize * 0.6 宽度
  const chineseCharWidth = fontSize
  const englishCharWidth = fontSize * 0.6
  const lines: string[] = []

  let currentLine = ""
  let currentLineWidth = 0
  const words = text.split(" ")

  for (const word of words) {
    // 计算单词宽度
    const wordWidth = word.split("").reduce((sum, char) => {
      return sum + (/[\u4e00-\u9fa5]/.test(char) ? chineseCharWidth : englishCharWidth)
    }, 0)

    if (currentLineWidth + wordWidth <= maxWidth) {
      currentLine += (currentLine ? " " : "") + word
      currentLineWidth += wordWidth + (currentLine ? englishCharWidth : 0)
    } else {
      if (currentLine) lines.push(currentLine)
      currentLine = word
      currentLineWidth = wordWidth
    }
  }

  if (currentLine) lines.push(currentLine)
  return lines
}

export function WordCard({ word }: WordCardProps) {
  // Get the SVG template for this word, or use a default template
  const template = wordCardTemplates[word.word.toLowerCase()]

  if (template) {
    // If we have a specific template for this word, use it
    return <div className="w-full mx-auto" dangerouslySetInnerHTML={{ __html: template }} />
  }

  // Format word root memory if available
  const wordRootMemory =
    word.wordRootMemory || (word.word.length > 4 ? `${word.word}。` : "这是一个基础词汇，建议直接记忆。")

  // Format example if available
  const exampleText = word.examples && word.examples.length > 0 ? word.examples[0] : `Example with ${word.word}`
  const exampleParts = exampleText.split("。")
  const englishExample = exampleParts[0] || `Example with ${word.word}`
  const chineseExample = exampleParts[1] || ``

  // Format usage notes if available
  const usageNotes = word.usageNotes || [`${word.word} 的常见用法`]

  // Fixed height for card
  const CARD_HEIGHT = 1000

  // Fixed section heights
  const WORD_ROOT_SECTION_HEIGHT = 120
  const EXAMPLE_SECTION_HEIGHT = 150
  const USAGE_NOTES_SECTION_HEIGHT = 200

  // Generate visual memory
  const visualMemory = generateWordVisual(word)

  return (
    <div className="w-full mx-auto">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 800 ${CARD_HEIGHT}`} className="w-full h-auto">
        {/* Magical background with stars and constellation pattern */}
        <defs>
          <pattern
            id="starsPattern"
            patternUnits="userSpaceOnUse"
            width="800"
            height="800"
            patternTransform="scale(0.5)"
          >
            <rect width="800" height="800" fill="#1a0b4b" />
            <g fill="#a5b4fc" opacity="0.3">
              {Array.from({ length: 100 }).map((_, i) => (
                <circle key={i} cx={Math.random() * 800} cy={Math.random() * 800} r={Math.random() * 2 + 0.5} />
              ))}
            </g>
            <path
              d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"
              stroke="#6366f1"
              strokeWidth="0.5"
              fill="none"
              opacity="0.3"
            />
          </pattern>
          <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a1b6a" />
            <stop offset="100%" stopColor="#3a1d6f" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Card background with magical pattern */}
        <rect width="800" height={CARD_HEIGHT} rx="15" ry="15" fill="url(#starsPattern)" />
        <rect
          x="20"
          y="20"
          width="760"
          height={CARD_HEIGHT - 40}
          rx="10"
          ry="10"
          fill="url(#cardGradient)"
          stroke={FANTASY_THEME.stroke}
          strokeWidth="2"
        />

        {/* Decorative elements */}
        <path d="M20,40 C100,30 150,80 200,40" stroke="#6366f1" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M780,40 C700,30 650,80 600,40" stroke="#6366f1" strokeWidth="1.5" fill="none" opacity="0.5" />

        {/* Title Section - Centered with magical glow */}
        <g transform="translate(400, 60)">
          <text
            fontFamily="Arial, sans-serif"
            fontSize="36"
            fontWeight="bold"
            fill={FANTASY_THEME.title}
            textAnchor="middle"
            filter="url(#glow)"
          >
            {word.word}
          </text>
          <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="20" fill="#a5b4fc" textAnchor="middle">
            {word.pronunciation} · {word.partOfSpeech} · {word.definition}
          </text>
        </g>

        {/* Word Root Memory Section - Styled as a magical scroll */}
        <g transform="translate(40, 140)">
          <rect
            x="0"
            y="-20"
            width="720"
            height={WORD_ROOT_SECTION_HEIGHT}
            rx="5"
            ry="5"
            fill={FANTASY_THEME.sectionBg}
            stroke="#6366f1"
            strokeWidth="1"
          />
          <text fontFamily="Arial, sans-serif" fontSize="20" fill={FANTASY_THEME.sectionTitle}>
            <tspan x="20" y="20" fontWeight="bold">
              词根魔法:
            </tspan>
          </text>
          <foreignObject x="150" y="0" width="550" height={WORD_ROOT_SECTION_HEIGHT - 20}>
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="text-[#a5b4fc] text-base max-h-[100px] overflow-y-auto pr-2 pt-2"
            >
              {wordRootMemory}
            </div>
          </foreignObject>
        </g>

        {/* Visual Illustration - Styled as a magical crystal */}
        <g transform={`translate(400, ${140 + WORD_ROOT_SECTION_HEIGHT + 100})`}>
          <circle cx="0" cy="0" r="70" fill="#2a1b6a" stroke="#6366f1" strokeWidth="2" opacity="0.7" />
          <g dangerouslySetInnerHTML={{ __html: visualMemory }} />
          <circle cx="0" cy="0" r="80" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" />
          <circle cx="0" cy="0" r="90" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" />
        </g>

        {/* Visual Memory Description */}
        <g transform={`translate(400, ${140 + WORD_ROOT_SECTION_HEIGHT + 200})`}>
          <text fontFamily="Arial, sans-serif" fontSize="20" fill={FANTASY_THEME.sectionTitle} textAnchor="middle">
            <tspan x="0" y="0">
              词根精灵
            </tspan>
            <tspan x="0" y="30" fill={FANTASY_THEME.sectionText}>
              {word.word}
            </tspan>
          </text>
        </g>

        {/* Example Section - Styled as a magical parchment */}
        <g transform={`translate(40, ${140 + WORD_ROOT_SECTION_HEIGHT + 280})`}>
          <rect
            x="0"
            y="-20"
            width="720"
            height={EXAMPLE_SECTION_HEIGHT}
            rx="5"
            ry="5"
            fill={FANTASY_THEME.sectionBg}
            stroke="#6366f1"
            strokeWidth="1"
          />
          <text fontFamily="Arial, sans-serif" fontSize="20" fill={FANTASY_THEME.sectionTitle}>
            <tspan x="20" y="15" fontWeight="bold">
              魔法咒语:
            </tspan>
          </text>
          <foreignObject x="150" y="0" width="550" height={EXAMPLE_SECTION_HEIGHT - 20}>
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="text-[#a5b4fc] text-base max-h-[130px] overflow-y-auto pr-2 pt-2"
            >
              <p>{englishExample}</p>
              {chineseExample && <p className="mt-2">{chineseExample}</p>}
            </div>
          </foreignObject>
        </g>

        {/* Usage Notes - Styled as magical notes */}
        <g transform={`translate(40, ${140 + WORD_ROOT_SECTION_HEIGHT + 280 + EXAMPLE_SECTION_HEIGHT + 20})`}>
          <rect
            x="0"
            y="-20"
            width="720"
            height={USAGE_NOTES_SECTION_HEIGHT}
            rx="5"
            ry="5"
            fill={FANTASY_THEME.sectionBg}
            stroke="#6366f1"
            strokeWidth="1"
          />
          <text fontFamily="Arial, sans-serif" fontSize="20" fill={FANTASY_THEME.sectionTitle}>
            <tspan x="20" y="15" fontWeight="bold">
              魔法指南:
            </tspan>
          </text>
          <foreignObject x="150" y="0" width="550" height={USAGE_NOTES_SECTION_HEIGHT - 20}>
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="text-[#a5b4fc] text-base max-h-[180px] overflow-y-auto pr-2 pt-2"
            >
              {usageNotes.map((note, index) => (
                <p key={index} className="mb-2">
                  {note}
                </p>
              ))}
            </div>
          </foreignObject>
        </g>

        {/* Decorative elements at the bottom */}
        <path d="M40,960 C200,920 600,920 760,960" stroke="#6366f1" strokeWidth="1.5" fill="none" opacity="0.5" />
      </svg>
    </div>
  )
}
