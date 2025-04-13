// High school unit1 spirits data
export const highSchoolUnit1SpiritsData = [
  // 前缀精灵
  {
    id: "pre1",
    name: "in-",
    meaning: "进入，在...内部",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"进入"或"在...内部"的含义。',
    examples: ["input", "inside", "include", "inject"],
    collected: false
  },
  {
    id: "pre2",
    name: "trans-",
    meaning: "变换，转变",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"变换"或"转变"的含义。',
    examples: ["transport", "transform", "translate", "transfer"],
    collected: false
  },
  {
    id: "pre3",
    name: "con-",
    meaning: "共同",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"共同"的含义。',
    examples: ["connect", "combine", "concentrate", "conform"],
    collected: false
  },

  // 词根精灵
  {
    id: "root1",
    name: "-memor-",
    meaning: "记忆",
    category: "root",
    description: '这个词根精灵掌管"记忆"的含义。',
    examples: ["memory", "memorize", "memorial", "remember"],
    collected: false
  },
  {
    id: "root2",
    name: "-clude-",
    meaning: "关",
    category: "root",
    description: '这个词根精灵掌管"关"的含义。',
    examples: ["include", "exclude", "conclude", "seclude"],
    collected: false
  },
  {
    id: "root3",
    name: "-grat-",
    meaning: "令人高兴的",
    category: "root",
    description: '这个词根精灵掌管"令人高兴的"的含义。',
    examples: ["gratitude", "congratulate", "grateful", "gratify"],
    collected: false
  },
  {
    id: "root4",
    name: "-port-",
    meaning: "拿，运",
    category: "root",
    description: '这个词根精灵掌管"拿"或"运"的含义。',
    examples: ["transport", "export", "import", "portable"],
    collected: false
  }
]

// Sample spirits data
export const sampleSpiritsData = [
  // 前缀精灵
  {
    id: "pre1",
    name: "re-",
    meaning: "再次，重新",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"再次"或"重新"的含义，它喜欢让事物重复发生。',
    examples: ["rebuild", "return", "review", "rewrite"],
    collected: true,
  },
  {
    id: "pre2",
    name: "un-",
    meaning: "不，非",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"否定"或"相反"的含义，它喜欢颠覆原有的状态。',
    examples: ["unhappy", "unable", "unlock", "unfair"],
    collected: true,
  },
  {
    id: "pre3",
    name: "dis-",
    meaning: "不，非，相反",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"否定"或"相反"的含义，它的魔力比un-更强大。',
    examples: ["disagree", "disappear", "disconnect", "dislike"],
    collected: true,
  },
  {
    id: "pre4",
    name: "pre-",
    meaning: "在...之前",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"在...之前"的含义，它能预见未来的事物。',
    examples: ["preview", "predict", "prepare", "prevent"],
    collected: false,
  },
  {
    id: "pre5",
    name: "in-/im-",
    meaning: "不，进入",
    category: "prefix",
    description: '这个前缀精灵有双重性格，它既能表示"不"，也能表示"进入"，取决于它遇到的词根。',
    examples: ["inactive", "impossible", "input", "inside"],
    collected: false,
  },
  {
    id: "pre6",
    name: "trans-",
    meaning: "跨越，转变",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"跨越"或"转变"的含义，它喜欢打破界限。',
    examples: ["transport", "transform", "translate", "transfer"],
    collected: false,
  },

  // 词根精灵
  {
    id: "root1",
    name: "-port-",
    meaning: "携带",
    category: "root",
    description: '这个词根精灵掌管"携带"的含义，它能让物体从一个地方移动到另一个地方。',
    examples: ["transport", "export", "import", "portable"],
    collected: true,
  },
  {
    id: "root2",
    name: "-form-",
    meaning: "形状，形成",
    category: "root",
    description: '这个词根精灵掌管"形状"和"形成"的含义，它能创造各种形态。',
    examples: ["transform", "reform", "perform", "inform"],
    collected: true,
  },
  {
    id: "root3",
    name: "-duc-/-duct-",
    meaning: "引导",
    category: "root",
    description: '这个词根精灵掌管"引导"的含义，它能指引方向和道路。',
    examples: ["conduct", "produce", "introduce", "reduce"],
    collected: true,
  },
  {
    id: "root4",
    name: "-spect-",
    meaning: "看",
    category: "root",
    description: '这个词根精灵掌管"看"的含义，它拥有敏锐的视力。',
    examples: ["inspect", "respect", "spectator", "spectacle"],
    collected: false,
  },
  {
    id: "root5",
    name: "-dict-",
    meaning: "说",
    category: "root",
    description: '这个词根精灵掌管"说"的含义，它能传递语言和信息。',
    examples: ["predict", "dictate", "contradict", "verdict"],
    collected: false,
  },
  {
    id: "root6",
    name: "-scrib-/-script-",
    meaning: "写",
    category: "root",
    description: '这个词根精灵掌管"写"的含义，它能记录和保存信息。',
    examples: ["describe", "prescribe", "script", "transcript"],
    collected: false,
  },

  // 后缀精灵
  {
    id: "suf1",
    name: "-tion",
    meaning: "表示行动，状态",
    category: "suffix",
    description: "这个后缀精灵能将动词转变为名词，表示一种行动或状态。",
    examples: ["action", "creation", "education", "solution"],
    collected: true,
  },
  {
    id: "suf2",
    name: "-er/-or",
    meaning: "表示人或物",
    category: "suffix",
    description: "这个后缀精灵能将动词转变为名词，表示做某事的人或物。",
    examples: ["teacher", "writer", "actor", "visitor"],
    collected: true,
  },
  {
    id: "suf3",
    name: "-ment",
    meaning: "表示结果，状态",
    category: "suffix",
    description: "这个后缀精灵能将动词转变为名词，表示一种结果或状态。",
    examples: ["development", "agreement", "movement", "statement"],
    collected: true,
  },
  {
    id: "suf4",
    name: "-able/-ible",
    meaning: "表示能够被...的",
    category: "suffix",
    description: '这个后缀精灵能将动词或名词转变为形容词，表示"能够被...的"。',
    examples: ["readable", "washable", "visible", "possible"],
    collected: false,
  },
  {
    id: "suf5",
    name: "-ful",
    meaning: "充满...的",
    category: "suffix",
    description: '这个后缀精灵能将名词转变为形容词，表示"充满...的"。',
    examples: ["careful", "helpful", "beautiful", "wonderful"],
    collected: false,
  },
  {
    id: "suf6",
    name: "-less",
    meaning: "没有...的",
    category: "suffix",
    description: '这个后缀精灵能将名词转变为形容词，表示"没有...的"。',
    examples: ["careless", "homeless", "endless", "useless"],
    collected: false,
  },
]

export const highSchoolUnit2SpiritsData = [
  // 前缀精灵
  {
    id: "pre1",
    name: "re-",
    meaning: "再次，向后",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"再次"或"向后"的含义。',
    examples: ["remain", "recycle", "retell"],
    collected: false
  },
  {
    id: "pre2",
    name: "de-",
    meaning: "向下，分离，加强",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"向下"、"分离"或"加强"的含义。',
    examples: ["defend", "decide", "potential"],
    collected: false
  },
  {
    id: "pre3",
    name: "inter-",
    meaning: "在...之间",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"在...之间"的含义。',
    examples: ["interrupt"],
    collected: false
  },

  // 词根精灵
  {
    id: "root1",
    name: "-vent-",
    meaning: "来",
    category: "root",
    description: '这个词根精灵掌管"来"的含义。',
    examples: ["conventional", "motivation"],
    collected: false
  },
  {
    id: "root2",
    name: "-rupt-",
    meaning: "断裂，打破",
    category: "root",
    description: '这个词根精灵掌管"断裂"或"打破"的含义。',
    examples: ["eruption", "abrupt"],
    collected: false
  },
  {
    id: "root3",
    name: "-cycle-",
    meaning: "圆，环",
    category: "root",
    description: '这个词根精灵掌管"圆"或"环"的含义。',
    examples: ["bicycle", "cyclone"],
    collected: false
  }
]

export const highSchoolUnit6SpiritsData = [
  // 前缀精灵
  {
    id: "pre1",
    name: "audi-",
    meaning: "听",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"听"的含义。',
    examples: ["audience", "audible", "audio"],
    collected: false
  },
  {
    id: "pre2",
    name: "in-",
    meaning: "进入，在内",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"进入"或"在内"的含义。',
    examples: ["insert", "inside", "input"],
    collected: false
  },
  {
    id: "pre3",
    name: "ac-",
    meaning: "表加强",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"加强"的含义。',
    examples: ["access", "accident", "accord"],
    collected: false
  },
  {
    id: "pre4",
    name: "ap-",
    meaning: "表加强",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"加强"的含义。',
    examples: ["appendix", "appear", "apply"],
    collected: false
  },

  // 词根精灵
  {
    id: "root1",
    name: "-bound-",
    meaning: "界限",
    category: "root",
    description: '这个词根精灵掌管"界限"的含义。',
    examples: ["boundary", "bound", "boundless"],
    collected: false
  },
  {
    id: "root2",
    name: "-sert-",
    meaning: "插，放",
    category: "root",
    description: '这个词根精灵掌管"插入"或"放置"的含义。',
    examples: ["insert", "assert", "desert"],
    collected: false
  },
  {
    id: "root3",
    name: "-cess-",
    meaning: "行，走",
    category: "root",
    description: '这个词根精灵掌管"行走"的含义。',
    examples: ["access", "process", "success"],
    collected: false
  },
  {
    id: "root4",
    name: "-pend-",
    meaning: "悬挂",
    category: "root",
    description: '这个词根精灵掌管"悬挂"的含义。',
    examples: ["appendix", "depend", "suspend"],
    collected: false
  },
  {
    id: "root5",
    name: "-strength-",
    meaning: "力量",
    category: "root",
    description: '这个词根精灵掌管"力量"的含义。',
    examples: ["strengthen", "strength", "strong"],
    collected: false
  },
  {
    id: "root6",
    name: "-fuse-",
    meaning: "流",
    category: "root",
    description: '这个词根精灵掌管"流动"的含义。',
    examples: ["confuse", "diffuse", "refuse"],
    collected: false
  },
  {
    id: "root7",
    name: "-grad-",
    meaning: "走",
    category: "root",
    description: '这个词根精灵掌管"行走"或"步骤"的含义。',
    examples: ["graduation", "grade", "graduate"],
    collected: false
  },
  {
    id: "root8",
    name: "-par-",
    meaning: "相等",
    category: "root",
    description: '这个词根精灵掌管"相等"或"对等"的含义。',
    examples: ["separate", "compare", "pair"],
    collected: false
  },
  {
    id: "root9",
    name: "-ploy-",
    meaning: "使用",
    category: "root",
    description: '这个词根精灵掌管"使用"或"运用"的含义。',
    examples: ["employ", "deploy", "employment"],
    collected: false
  },

  // 后缀精灵
  {
    id: "suf1",
    name: "-ence",
    meaning: "表示名词",
    category: "suffix",
    description: '这个后缀精灵能将词根转变为名词。',
    examples: ["audience", "difference", "confidence"],
    collected: false
  },
  {
    id: "suf2",
    name: "-ary",
    meaning: "...的",
    category: "suffix",
    description: '这个后缀精灵能将词根转变为形容词。',
    examples: ["boundary", "dictionary", "primary"],
    collected: false
  },
  {
    id: "suf3",
    name: "-en",
    meaning: "使...",
    category: "suffix",
    description: '这个后缀精灵能将词根转变为动词，表示"使..."。',
    examples: ["strengthen", "weaken", "deepen"],
    collected: false
  },
  {
    id: "suf4",
    name: "-ion",
    meaning: "表示名词",
    category: "suffix",
    description: '这个后缀精灵能将动词转变为名词。',
    examples: ["graduation", "education", "confusion"],
    collected: false
  },
  {
    id: "suf5",
    name: "-ate",
    meaning: "使...",
    category: "suffix",
    description: '这个后缀精灵能将词根转变为动词，表示"使..."。',
    examples: ["separate", "create", "educate"],
    collected: false
  },
  {
    id: "suf6",
    name: "-ix",
    meaning: "表示名词",
    category: "suffix",
    description: '这个后缀精灵能将词根转变为名词。',
    examples: ["appendix", "matrix", "prefix"],
    collected: false
  },
  {
    id: "suf7",
    name: "-al",
    meaning: "...的",
    category: "suffix",
    description: '这个后缀精灵能将词根转变为形容词。',
    examples: ["official", "natural", "personal"],
    collected: false
  },
  {
    id: "suf8",
    name: "-ess",
    meaning: "表示女性",
    category: "suffix",
    description: '这个后缀精灵能将词根转变为表示女性的名词。',
    examples: ["stewardess", "actress", "princess"],
    collected: false
  }
]

export const rootSpiritsDataByLevel = {
  "high-school-1-unit1": highSchoolUnit1SpiritsData,
  "high-school-1-unit2": highSchoolUnit2SpiritsData,
  "high-school-1-unit6": highSchoolUnit6SpiritsData,
  "default": sampleSpiritsData
}

export const SPIRIT_TYPES = [
      
{
    category: "prefix",
    name: "前缀精灵",
    color: "#f9c851",
    bgGradient: "from-[#f9c851]/10 to-[#ff8a5c]/10",
    description: "前缀精灵能改变或增强词根的含义，它们总是出现在词根精灵的前面。",
  },
  {
    category: "root",
    name: "词根精灵",
    color: "#4ade80",
    bgGradient: "from-[#4ade80]/10 to-[#22d3ee]/10",
    description: "词根精灵是单词的核心，它们掌管着单词的基本含义。",
  },
  {
    category: "suffix",
    name: "后缀精灵",
    color: "#a78bfa",
    bgGradient: "from-[#a78bfa]/10 to-[#f472b6]/10",
    description: "后缀精灵能改变词根的词性或为词根添加特定的含义，它们总是出现在词根精灵的后面。",
  },
]



