import type { VocabularyWord } from "@/types/vocabulary"

// Simple shapes to use in visual memory
const shapes = {
  noun: (color: string, strokeColor: string) => `
  <rect x="-60" y="-40" width="120" height="80" rx="5" ry="5" fill="${color}" stroke="${strokeColor}" strokeWidth="2" />
`,
  verb: (color: string, strokeColor: string) => `
  <circle cx="0" cy="0" r="50" fill="${color}" stroke="${strokeColor}" strokeWidth="2" />
`,
  adjective: (color: string, strokeColor: string) => `
  <polygon points="-50,-40 50,-40 0,40" fill="${color}" stroke="${strokeColor}" strokeWidth="2" />
`,
  adverb: (color: string, strokeColor: string) => `
  <polygon points="-40,-40 40,-40 40,40 -40,40" fill="${color}" stroke="${strokeColor}" strokeWidth="2" transform="rotate(45)" />
`,
}

// Generate a visual memory illustration based on the word
export function generateVisualMemory(word: VocabularyWord, theme: any): string {
  // Determine the part of speech
  let shape = shapes.noun
  if (word.partOfSpeech.includes("v.") || word.partOfSpeech.includes("vt.") || word.partOfSpeech.includes("vi.")) {
    shape = shapes.verb
  } else if (word.partOfSpeech.includes("adj.")) {
    shape = shapes.adjective
  } else if (word.partOfSpeech.includes("adv.")) {
    shape = shapes.adverb
  }

  // Generate the base shape
  const baseShape = shape(theme.visual, theme.visualStroke)

  // Add the word in the center
  const wordText = `
  <text x="-20" y="0" 
    font-family="Arial, sans-serif" 
    font-size="24" 
    text-anchor="left" 
    dominant-baseline="middle" 
    fill="#ffffff"
    dy=".33em">
    ${word.word}
  </text>
`

  return `
  ${baseShape}
  ${wordText}
`
}

// Fantasy theme colors
export const FANTASY_THEME = {
  background:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%236366f1' strokeWidth='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23a5b4fc'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\")",
  cardBg: "linear-gradient(135deg, #2a1b6a 0%, #3a1d6f 100%)",
  stroke: "#6366f1",
  title: "#f9c851",
  sectionBg: "rgba(58, 29, 111, 0.7)",
  sectionText: "#a5b4fc",
  sectionTitle: "#f9c851",
  visual: "#8b5cf6",
  visualStroke: "#6366f1",
}

// Generate a more meaningful visual memory based on the word
export function generateWordVisual(word: VocabularyWord): string {
  
  let visual = ""

  // Default for other words - use part of speech to determine shape
    const pos = word.partOfSpeech.toLowerCase()
    const wordLower = word.word.toLowerCase()

    // 默认图标 - 六边形
    let iconPath = `
      <polygon points="20,-40 40,0 20,40 -20,40 -40,0 -20,-40" 
               fill="${FANTASY_THEME.visual}" 
               stroke="${FANTASY_THEME.visualStroke}" 
               stroke-width="2" />
    `

    // 根据词性设置不同图标
    if (pos.includes("n.")) {
      // 名词 - 书本图标
      iconPath = `
        <path d="M-30,-20 L30,-20 L30,20 L-30,20 Z M-30,-20 L-30,20 M30,-20 L30,20 M-20,-10 L20,-10" 
              fill="${FANTASY_THEME.visual}" 
              stroke="${FANTASY_THEME.visualStroke}" 
              stroke-width="2" />
      `
    } else if (pos.includes("v.")) {
      // 动词 - 箭头图标
      iconPath = `
        <path d="M-30,0 L30,0 M20,-10 L30,0 L20,10" 
              fill="none" 
              stroke="${FANTASY_THEME.visualStroke}" 
              stroke-width="2" />
      `
    } else if (pos.includes("adj.")) {
      // 形容词 - 星星图标
      iconPath = `
        <path d="M0,-30 L8,-10 L30,-10 L15,5 L20,25 L0,15 L-20,25 L-15,5 L-30,-10 L-8,-10 Z" 
              fill="${FANTASY_THEME.visual}" 
              stroke="${FANTASY_THEME.visualStroke}" 
              stroke-width="1" />
      `
    } else if (pos.includes("adv.")) {
      // 副词 - 波浪线图标
      iconPath = `
        <path d="M-40,0 Q-20,-20 0,0 Q20,-20 40,0" 
              fill="none" 
              stroke="${FANTASY_THEME.visualStroke}" 
              stroke-width="2" />
      `
    }

    visual = `
      <g transform="translate(0, 0)">
        ${iconPath}
        <text x="0" y="50" 
              font-family="Arial, sans-serif" 
              font-size="14" 
              text-anchor="middle" 
              fill="#ffffff" 
              dominant-baseline="middle">
          ${word.word}
        </text>
      </g>
    `
  return visual
}

/*
// Generate specific visuals based on word meaning
const wordLower = word.word.toLowerCase()
const definition = word.definition.toLowerCase()

// Sign - create a signpost visual
if (wordLower === "sign") {
  visual = `
    <g transform="translate(0, 0)">
      <rect x="-50" y="-40" width="100" height="60" rx="5" ry="5" fill="${FANTASY_THEME.visual}" stroke="${FANTASY_THEME.visualStroke}" strokeWidth="2" />
      <rect x="-5" y="20" width="10" height="40" fill="${FANTASY_THEME.visualStroke}" />
      <text x="0" y="0" fontFamily="Arial, sans-serif" fontSize="20" textAnchor="middle" fill="#ffffff" dominantBaseline="middle">SIGN</text>
      <path d="M-30,20 L30,20" stroke="#ffffff" strokeWidth="1" />
    </g>
  `
}
// Heart - for words related to feelings, emotions
else if (wordLower.includes("heart") || wordLower.includes("love") || definition.includes("感情")) {
  visual = `
    <path d="M0,-15 C30,-50 75,-10 0,40 C-75,-10 -30,-50 0,-15" fill="#ff6b6b" stroke="${FANTASY_THEME.visualStroke}" strokeWidth="2" />
    <text x="0" y="0" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#ffffff" dominantBaseline="middle">
      ${word.word}
    </text>
  `
}
// Book - for words related to reading, knowledge
else if (
  wordLower.includes("book") ||
  wordLower.includes("read") ||
  definition.includes("书") ||
  definition.includes("读")
) {
  visual = `
    <g transform="translate(0, 0)">
      <path d="M-40,-30 L40,-30 L40,30 L-40,30 Z" fill="${FANTASY_THEME.visual}" stroke="${FANTASY_THEME.visualStroke}" strokeWidth="2" />
      <path d="M0,-30 L0,30" stroke="${FANTASY_THEME.visualStroke}" strokeWidth="2" />
      <path d="M-35,-20 L-5,-20 M-35,-10 L-5,-10 M-35,0 L-5,0 M-35,10 L-5,10 M-35,20 L-5,20" stroke="#ffffff" strokeWidth="1" />
      <path d="M5,-20 L35,-20 M5,-10 L35,-10 M5,0 L35,0 M5,10 L35,10 M5,20 L35,20" stroke="#ffffff" strokeWidth="1" />
      <text x="0" y="-40" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#ffffff" dominantBaseline="middle">
        ${word.word}
      </text>
    </g>
  `
}
// Tree - for words related to nature, growth
else if (
  wordLower.includes("tree") ||
  wordLower.includes("grow") ||
  definition.includes("树") ||
  definition.includes("成长")
) {
  visual = `
    <g transform="translate(0, 0)">
      <rect x="-5" y="0" width="10" height="40" fill="#8B4513" />
      <circle cx="0" cy="-20" r="30" fill="#4CAF50" stroke="${FANTASY_THEME.visualStroke}" strokeWidth="1" />
      <text x="0" y="60" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#ffffff" dominantBaseline="middle">
        ${word.word}
      </text>
    </g>
  `
}
// House - for words related to home, shelter
else if (
  wordLower.includes("house") ||
  wordLower.includes("home") ||
  definition.includes("家") ||
  definition.includes("住")
) {
  visual = `
    <g transform="translate(0, 0)">
      <rect x="-30" y="-10" width="60" height="40" fill="${FANTASY_THEME.visual}" stroke="${FANTASY_THEME.visualStroke}" strokeWidth="2" />
      <path d="M-40,-10 L0,-40 L40,-10" fill="none" stroke="${FANTASY_THEME.visualStroke}" strokeWidth="2" />
      <rect x="-10" y="10" width="20" height="20" fill="#ffffff" />
      <text x="0" y="50" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#ffffff" dominantBaseline="middle">
        ${word.word}
      </text>
    </g>
  `
}
// Star - for words related to sky, night, achievement
else if (
  wordLower.includes("star") ||
  wordLower.includes("sky") ||
  definition.includes("星") ||
  definition.includes("天空")
) {
  visual = `
    <g transform="translate(0, 0)">
      <path d="M0,-30 L8,-10 L30,-10 L15,5 L20,25 L0,15 L-20,25 L-15,5 L-30,-10 L-8,-10 Z" fill="#FFD700" stroke="${FANTASY_THEME.visualStroke}" strokeWidth="1" />
      <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#ffffff" dominantBaseline="middle">
        ${word.word}
      </text>
    </g>
  `
}
// Water - for words related to liquid, flow
else if (
  wordLower.includes("water") ||
  wordLower.includes("flow") ||
  definition.includes("水") ||
  definition.includes("流")
) {
  visual = `
    <g transform="translate(0, 0)">
      <path d="M-40,0 Q-20,-20 0,0 Q20,-20 40,0 Q20,20 0,0 Q-20,20 -40,0" fill="#1E90FF" stroke="${FANTASY_THEME.visualStroke}" strokeWidth="1" />
      <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#ffffff" dominantBaseline="middle">
        ${word.word}
      </text>
    </g>
  `
}
// Clock - for words related to time
else if (
  wordLower.includes("time") ||
  wordLower.includes("clock") ||
  definition.includes("时间") ||
  definition.includes("钟")
) {
  visual = `
    <g transform="translate(0, 0)">
      <circle cx="0" cy="0" r="30" fill="#ffffff" stroke="${FANTASY_THEME.visualStroke}" strokeWidth="2" />
      <line x1="0" y1="0" x2="0" y2="-15" stroke="#000000" strokeWidth="2" />
      <line x1="0" y1="0" x2="10" y2="10" stroke="#000000" strokeWidth="2" />
      <circle cx="0" cy="0" r="3" fill="#000000" />
      <text x="0" y="45" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#ffffff" dominantBaseline="middle">
        ${word.word}
      </text>
    </g>
  `
}
*/