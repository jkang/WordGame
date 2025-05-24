export interface Level {
  id: string
  name: string
  description: string
  units?: Unit[]
  isExpanded?: boolean
}

export interface Unit {
  id: string
  name: string
  description: string
  wordCount: number
}

export const LEVELS: Level[] = [
  {
    id: "middle-school-8",
    name: "middle-school-8",
    description: "初中八年级下册",
    units: [
      { id: "middle-school-8-unit1", name: "Unit 1", description: "健康与疾病", wordCount: 42 },
      { id: "middle-school-8-unit2", name: "Unit 2", description: "志愿服务", wordCount: 38 },
      { id: "middle-school-8-unit3", name: "Unit 3", description: "家务与责任", wordCount: 25 },
      { id: "middle-school-8-unit4", name: "Unit 4", description: "沟通与关系", wordCount: 36 },
      { id: "middle-school-8-unit5", name: "Unit 5", description: "自然灾害", wordCount: 32 },
      { id: "middle-school-8-unit6", name: "Unit 6", description: "故事与传说", wordCount: 35 },
      { id: "middle-school-8-unit7", name: "Unit 7", description: "自然与保护", wordCount: 40 },
      { id: "middle-school-8-unit8", name: "Unit 8", description: "文学与艺术", wordCount: 33 },
      { id: "middle-school-8-unit9", name: "Unit 9", description: "发明与创新", wordCount: 30 },
      { id: "middle-school-8-unit10", name: "Unit 10", description: "回忆与成长", wordCount: 35 },
    ],
  },
  {
    id: "high-school-1",
    name: "high-school-1",
    description: "高中一年级",
    units: [
      { id: "high-school-1-unit1", name: "Unit 1", description: "Wordlist 1", wordCount: 57 },
      { id: "high-school-1-unit2", name: "Unit 2", description: "Wordlist 2", wordCount: 56 },
      { id: "high-school-1-unit3", name: "Unit 3", description: "Wordlist 3", wordCount: 60 },
      { id: "high-school-1-unit4", name: "Unit 4", description: "Wordlist 4", wordCount: 66 },
      { id: "high-school-1-unit5", name: "Unit 5", description: "Wordlist 5", wordCount: 57 },
      { id: "high-school-1-unit6", name: "Unit 6", description: "Wordlist 6", wordCount: 57 },
      { id: "high-school-1-unit7", name: "Unit 7", description: "Wordlist 7", wordCount: 56 },
      { id: "high-school-1-unit8", name: "Unit 8", description: "Wordlist 8", wordCount: 55 },
      { id: "high-school-1-unit9", name: "Unit 9", description: "Wordlist 9", wordCount: 59 },
      { id: "high-school-1-unit10", name: "Unit 10", description: "Wordlist 10", wordCount: 56 },
      { id: "high-school-1-unit11", name: "Unit 11", description: "Wordlist 11", wordCount: 56 },
      { id: "high-school-1-unit12", name: "Unit 12", description: "Wordlist 12", wordCount: 56 },

    ],
  },
]

