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

export const highSchoolUnit8SpiritsData = [
  // 前缀精灵
  {
    id: "pre1",
    name: "sub-",
    meaning: "在...之下，次要的",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"在...之下"或"次要的"含义。',
    examples: ["submarine", "subway", "subtract", "submerge"],
    collected: false
  },
  {
    id: "pre2",
    name: "super-",
    meaning: "在...之上，超级",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"在...之上"或"超级"的含义。',
    examples: ["supermarket", "superman", "superior", "supervise"],
    collected: false
  },
  {
    id: "pre3",
    name: "ex-",
    meaning: "向外，前任的",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"向外"或"前任的"含义。',
    examples: ["export", "exit", "exhale", "ex-president"],
    collected: false
  },
  {
    id: "pre4",
    name: "com-",
    meaning: "共同，一起",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"共同"或"一起"的含义。',
    examples: ["combine", "communicate", "companion", "complete"],
    collected: false
  },

  // 词根精灵
  {
    id: "root1",
    name: "-struct-",
    meaning: "建造",
    category: "root",
    description: '这个词根精灵掌管"建造"的含义。',
    examples: ["construct", "structure", "instruct", "destruction"],
    collected: false
  },
  {
    id: "root2",
    name: "-tract-",
    meaning: "拉，拖",
    category: "root",
    description: '这个词根精灵掌管"拉"或"拖"的含义。',
    examples: ["attract", "extract", "contract", "tractor"],
    collected: false
  },
  {
    id: "root3",
    name: "-mit-/-miss-",
    meaning: "送，放",
    category: "root",
    description: '这个词根精灵掌管"送"或"放"的含义。',
    examples: ["transmit", "permit", "mission", "admission"],
    collected: false
  },
  {
    id: "root4",
    name: "-vert-/-vers-",
    meaning: "转",
    category: "root",
    description: '这个词根精灵掌管"转"的含义。',
    examples: ["convert", "invert", "reverse", "universe"],
    collected: false
  },
  {
    id: "root5",
    name: "-log-",
    meaning: "言语，学说",
    category: "root",
    description: '这个词根精灵掌管"言语"或"学说"的含义。',
    examples: ["biology", "psychology", "dialogue", "catalog"],
    collected: false
  },
  {
    id: "root6",
    name: "-tele-",
    meaning: "远",
    category: "root",
    description: '这个词根精灵掌管"远"的含义。',
    examples: ["telephone", "television", "telescope", "telegram"],
    collected: false
  },

  // 后缀精灵
  {
    id: "suf1",
    name: "-ize",
    meaning: "使...化",
    category: "suffix",
    description: '这个后缀精灵能将词根转变为动词，表示"使...化"。',
    examples: ["realize", "organize", "memorize", "modernize"],
    collected: false
  },
  {
    id: "suf2",
    name: "-ology",
    meaning: "...学",
    category: "suffix",
    description: '这个后缀精灵能将词根转变为名词，表示"...学"。',
    examples: ["biology", "psychology", "technology", "ecology"],
    collected: false
  },
  {
    id: "suf3",
    name: "-ity",
    meaning: "表示状态或性质",
    category: "suffix",
    description: '这个后缀精灵能将形容词转变为名词，表示一种状态或性质。',
    examples: ["ability", "possibility", "reality", "security"],
    collected: false
  },
  {
    id: "suf4",
    name: "-ive",
    meaning: "有...性质的",
    category: "suffix",
    description: '这个后缀精灵能将词根转变为形容词，表示"有...性质的"。',
    examples: ["active", "creative", "attractive", "positive"],
    collected: false
  }
]

export const highSchoolUnit9SpiritsData = [
  // 前缀精灵
  {
    id: "pre-hs9-1",
    name: "pro-",
    meaning: "向前，在前",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"向前"或"在前"的含义。',
    examples: ["progress", "project", "provide"],
    collected: false
  },
  {
    id: "pre-hs9-2",
    name: "ante-",
    meaning: "在...之前",
    category: "prefix",
    description: '这个前缀精灵能赋予词根"在...之前"的含义，通常指时间上。',
    examples: ["antedate", "antecedent", "anteroom"],
    collected: false
  },
  // 词根精灵
  {
    id: "root-hs9-1",
    name: "-pel-/-puls-",
    meaning: "驱动，推",
    category: "root",
    description: '这个词根精灵掌管"驱动"或"推"的含义。',
    examples: ["compel", "expel", "propel", "pulse"],
    collected: false
  },
  {
    id: "root-hs9-2",
    name: "-sum-/-sumpt-",
    meaning: "拿，取",
    category: "root",
    description: '这个词根精灵掌管"拿"或"取"的含义。',
    examples: ["consume", "assume", "resume", "presume"],
    collected: false
  },
  {
    id: "root-hs9-3",
    name: "-tain-",
    meaning: "保持，握住",
    category: "root",
    description: '这个词根精灵掌管"保持"或"握住"的含义。',
    examples: ["contain", "maintain", "obtain", "sustain"],
    collected: false
  },
  // 后缀精灵
  {
    id: "suf-hs9-1",
    name: "-ure",
    meaning: "行为，结果",
    category: "suffix",
    description: "这个后缀精灵能将动词转变为名词，表示行为或结果。",
    examples: ["pressure", "failure", "pleasure", "exposure"],
    collected: false
  },
  {
    id: "suf-hs9-2",
    name: "-ory",
    meaning: "与...有关的；场所",
    category: "suffix",
    description: "这个后缀精灵能构成形容词或名词，表示相关性或场所。",
    examples: ["sensory", "laboratory", "factory", "territory"],
    collected: false
  }
];

// 请在此处填充 highSchoolUnit10SpiritsData 的实际数据
export const highSchoolUnit10SpiritsData = [
  // 示例前缀精灵 (请替换为实际数据)
  {
    id: "pre_u10_1",
    name: "uni-",
    meaning: "单一，一个",
    category: "prefix",
    description: "这个前缀精灵表示单一或一个的概念。",
    examples: ["uniform", "unique", "unison"],
    collected: false
  },
  // 示例词根精灵 (请替换为实际数据)
  {
    id: "root_u10_1",
    name: "-ann-/-enn-",
    meaning: "年",
    category: "root",
    description: "这个词根精灵与年份或年度有关。",
    examples: ["annual", "anniversary", "perennial"],
    collected: false
  },
  // 示例后缀精灵 (请替换为实际数据)
  {
    id: "suf_u10_1",
    name: "-ology",
    meaning: "...学，学科",
    category: "suffix",
    description: "这个后缀精灵表示一门学科或研究领域。",
    examples: ["biology", "geology", "psychology"],
    collected: false
  }
  // ... 根据需要添加更多前缀、词根和后缀精灵
];

// 请在此处填充 highSchoolUnit11SpiritsData 的实际数据
export const highSchoolUnit11SpiritsData = [
  // 示例前缀精灵 (请替换为实际数据)
  {
    id: "pre_u11_1",
    name: "mal-",
    meaning: "坏，不良",
    category: "prefix",
    description: "这个前缀精灵表示坏的或不良的含义。",
    examples: ["malfunction", "malnutrition", "malevolent"],
    collected: false
  },
  // 示例词根精灵 (请替换为实际数据)
  {
    id: "root_u11_1",
    name: "-bene-",
    meaning: "好",
    category: "root",
    description: "这个词根精灵与好的、善意的含义相关。",
    examples: ["benefit", "benevolent", "beneficial"],
    collected: false
  },
  // 示例后缀精灵 (请替换为实际数据)
  {
    id: "suf_u11_1",
    name: "-fy",
    meaning: "使...化",
    category: "suffix",
    description: "这个后缀精灵通常加在名词或形容词后，构成动词，表示使...化。",
    examples: ["simplify", "purify", "classify"],
    collected: false
  }
  // ... 根据需要添加更多前缀、词根和后缀精灵
];

export const highSchoolUnit12SpiritsData = [
  // 前缀精灵
  {
    id: "pre_u12_1",
    name: "im-",
    meaning: "进入，向内",
    category: "prefix",
    description: "这个前缀精灵能赋予词根'进入'或'向内'的含义。",
    examples: ["import", "include", "insert"],
    collected: false
  },
  {
    id: "pre_u12_2",
    name: "re-",
    meaning: "重新，再次",
    category: "prefix",
    description: "这个前缀精灵能赋予词根'重新'或'再次'的含义。",
    examples: ["relay", "return", "review"],
    collected: false
  },
  {
    id: "pre_u12_3",
    name: "con-",
    meaning: "共同，加强",
    category: "prefix",
    description: "这个前缀精灵能赋予词根'共同'或'加强'的含义。",
    examples: ["confirm", "conservative", "connect"],
    collected: false
  },
  {
    id: "pre_u12_4",
    name: "ac-",
    meaning: "加强",
    category: "prefix",
    description: "这个前缀精灵能赋予词根'加强'的含义。",
    examples: ["accept", "access", "accord"],
    collected: false
  },

  // 词根精灵
  {
    id: "root_u12_1",
    name: "-ident-",
    meaning: "相同",
    category: "root",
    description: "这个词根精灵掌管'相同'的含义。",
    examples: ["identification", "identity", "identical"],
    collected: false
  },
  {
    id: "root_u12_2",
    name: "-press-",
    meaning: "压",
    category: "root",
    description: "这个词根精灵掌管'压'的含义。",
    examples: ["pressure", "press", "compress"],
    collected: false
  },
  {
    id: "root_u12_3",
    name: "-act-",
    meaning: "活动",
    category: "root",
    description: "这个词根精灵掌管'活动'的含义。",
    examples: ["activity", "act", "action"],
    collected: false
  },
  {
    id: "root_u12_4",
    name: "-dent-",
    meaning: "牙齿",
    category: "root",
    description: "这个词根精灵掌管'牙齿'的含义。",
    examples: ["dentist", "dental", "dentistry"],
    collected: false
  },
  {
    id: "root_u12_5",
    name: "-cept-",
    meaning: "拿，抓",
    category: "root",
    description: "这个词根精灵掌管'拿'或'抓'的含义。",
    examples: ["accept", "concept", "except"],
    collected: false
  },
  {
    id: "root_u12_6",
    name: "-lay-",
    meaning: "放置",
    category: "root",
    description: "这个词根精灵掌管'放置'的含义。",
    examples: ["relay", "lay", "delay"],
    collected: false
  },
  {
    id: "root_u12_7",
    name: "-abol-",
    meaning: "消除",
    category: "root",
    description: "这个词根精灵掌管'消除'的含义。",
    examples: ["abolish", "abolition"],
    collected: false
  },
  {
    id: "root_u12_8",
    name: "-vid-",
    meaning: "看见",
    category: "root",
    description: "这个词根精灵掌管'看见'的含义。",
    examples: ["evidence", "video", "evident"],
    collected: false
  },
  {
    id: "root_u12_9",
    name: "-harm-",
    meaning: "适合",
    category: "root",
    description: "这个词根精灵掌管'适合'的含义。",
    examples: ["harmony", "harmonious"],
    collected: false
  },
  {
    id: "root_u12_10",
    name: "-free-",
    meaning: "自由",
    category: "root",
    description: "这个词根精灵掌管'自由'的含义。",
    examples: ["freedom", "free", "freely"],
    collected: false
  },
  {
    id: "root_u12_11",
    name: "-firm-",
    meaning: "坚定",
    category: "root",
    description: "这个词根精灵掌管'坚定'的含义。",
    examples: ["confirm", "firm", "affirm"],
    collected: false
  },
  {
    id: "root_u12_12",
    name: "-serv-",
    meaning: "保持",
    category: "root",
    description: "这个词根精灵掌管'保持'的含义。",
    examples: ["conservative", "preserve", "reserve"],
    collected: false
  },
  {
    id: "root_u12_13",
    name: "-decor-",
    meaning: "装饰",
    category: "root",
    description: "这个词根精灵掌管'装饰'的含义。",
    examples: ["decorate", "decoration", "decorative"],
    collected: false
  },
  {
    id: "root_u12_14",
    name: "-fac-",
    meaning: "面",
    category: "root",
    description: "这个词根精灵掌管'面'的含义。",
    examples: ["facial", "face", "surface"],
    collected: false
  },
  {
    id: "root_u12_15",
    name: "-liter-",
    meaning: "文字",
    category: "root",
    description: "这个词根精灵掌管'文字'的含义。",
    examples: ["literature", "literary", "literal"],
    collected: false
  },
  {
    id: "root_u12_16",
    name: "-sen-",
    meaning: "老的，年长的",
    category: "root",
    description: "这个词根精灵掌管'老的'或'年长的'的含义。",
    examples: ["senior", "seniority", "senate"],
    collected: false
  },
  {
    id: "root_u12_17",
    name: "-port-",
    meaning: "拿，运",
    category: "root",
    description: "这个词根精灵掌管'拿'或'运'的含义。",
    examples: ["import", "export", "transport"],
    collected: false
  },
  {
    id: "root_u12_18",
    name: "-citi-",
    meaning: "城市",
    category: "root",
    description: "这个词根精灵掌管'城市'的含义。",
    examples: ["citizen", "city", "civil"],
    collected: false
  },
  {
    id: "root_u12_19",
    name: "-cur-",
    meaning: "跑，发生",
    category: "root",
    description: "这个词根精灵掌管'跑'或'发生'的含义。",
    examples: ["occur", "current", "course"],
    collected: false
  },

  // 后缀精灵
  {
    id: "suf_u12_1",
    name: "-ification",
    meaning: "表抽象名词",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为抽象名词。",
    examples: ["identification", "classification", "simplification"],
    collected: false
  },
  {
    id: "suf_u12_2",
    name: "-ure",
    meaning: "表行为及行为结果",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为名词，表示行为及行为结果。",
    examples: ["pressure", "failure", "pleasure"],
    collected: false
  },
  {
    id: "suf_u12_3",
    name: "-ivity",
    meaning: "表名词",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为名词。",
    examples: ["activity", "creativity", "productivity"],
    collected: false
  },
  {
    id: "suf_u12_4",
    name: "-ist",
    meaning: "表人",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为表示人的名词。",
    examples: ["dentist", "artist", "scientist"],
    collected: false
  },
  {
    id: "suf_u12_5",
    name: "-ish",
    meaning: "使...",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为动词，表示'使...'。",
    examples: ["abolish", "establish", "finish"],
    collected: false
  },
  {
    id: "suf_u12_6",
    name: "-ence",
    meaning: "表名词",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为名词。",
    examples: ["evidence", "difference", "confidence"],
    collected: false
  },
  {
    id: "suf_u12_7",
    name: "-ony",
    meaning: "表名词",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为名词。",
    examples: ["harmony", "ceremony", "colony"],
    collected: false
  },
  {
    id: "suf_u12_8",
    name: "-dom",
    meaning: "表名词",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为名词。",
    examples: ["freedom", "kingdom", "wisdom"],
    collected: false
  },
  {
    id: "suf_u12_9",
    name: "-ate",
    meaning: "表动词",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为动词。",
    examples: ["decorate", "create", "educate"],
    collected: false
  },
  {
    id: "suf_u12_10",
    name: "-ial",
    meaning: "...的",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为形容词，表示'...的'。",
    examples: ["facial", "special", "official"],
    collected: false
  },
  {
    id: "suf_u12_11",
    name: "-ative",
    meaning: "有...性质的",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为形容词，表示'有...性质的'。",
    examples: ["conservative", "creative", "active"],
    collected: false
  },
  {
    id: "suf_u12_12",
    name: "-ature",
    meaning: "表名词",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为名词。",
    examples: ["literature", "nature", "signature"],
    collected: false
  },
  {
    id: "suf_u12_13",
    name: "-ior",
    meaning: "比较级后缀",
    category: "suffix",
    description: "这个后缀精灵能构成形容词的比较级。",
    examples: ["senior", "junior", "superior"],
    collected: false
  },
  {
    id: "suf_u12_14",
    name: "-zen",
    meaning: "表人",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为表示人的名词。",
    examples: ["citizen", "denizen"],
    collected: false
  }
];
export const highSchoolUnit13SpiritsData = [
  // Prefixes
  {
    id: "pre_u13_1",
    name: "dis-",
    meaning: "表加强, 分开",
    category: "prefix",
    description: "前缀'dis-'可以表示加强语气或“分开、区别”的含义。",
    examples: ["discrimination", "discover", "dishonest"],
    collected: false
  },
  {
    id: "pre_u13_2",
    name: "sym-",
    meaning: "共同",
    category: "prefix",
    description: "前缀'sym-'来源于希腊语，表示“共同、相同”的意思。",
    examples: ["symptom", "sympathy", "symphony"],
    collected: false
  },
  {
    id: "pre_u13_3",
    name: "re-",
    meaning: "一再",
    category: "prefix",
    description: "前缀're-'表示“再次”或“往回”的意思。",
    examples: ["relax", "review", "return"],
    collected: false
  },
  // Roots
  {
    id: "root_u13_1",
    name: "account",
    meaning: "账目",
    category: "root",
    description: "词根'account'与计算或账目有关。",
    examples: ["accountant", "accountable", "recount"],
    collected: false
  },
  {
    id: "root_u13_2",
    name: "techn",
    meaning: "技艺, 技术",
    category: "root",
    description: "词根'techn'来源于希腊语，指“艺术、技能或手艺”。",
    examples: ["technique", "technical", "technology"],
    collected: false
  },
  {
    id: "root_u13_3",
    name: "set",
    meaning: "放置",
    category: "root",
    description: "词根'set'是一个基础词，意为“放置、设定”。",
    examples: ["upset", "setting", "reset"],
    collected: false
  },
  {
    id: "root_u13_4",
    name: "strophe",
    meaning: "转",
    category: "root",
    description: "词根'strophe'来自希腊语，意为“转动、转折”。",
    examples: ["catastrophe", "apostrophe"],
    collected: false
  },
  {
    id: "root_u13_5",
    name: "sculpt",
    meaning: "雕塑",
    category: "root",
    description: "词根'sculpt'与雕刻和塑造有关。",
    examples: ["sculpture", "sculptor"],
    collected: false
  },
  {
    id: "root_u13_6",
    name: "crimin",
    meaning: "区别",
    category: "root",
    description: "词根'crimin'与“区别、判断或罪行”有关。",
    examples: ["discrimination", "crime", "criminal"],
    collected: false
  },
  {
    id: "root_u13_7",
    name: "lax",
    meaning: "放松",
    category: "root",
    description: "词根'lax'意为“松弛、放松”。",
    examples: ["relax", "laxity"],
    collected: false
  },
  // Suffixes
  {
    id: "suf_u13_1",
    name: "-ant",
    meaning: "表名词，人",
    category: "suffix",
    description: "后缀'-ant'通常加在动词后，构成名词，表示“做…的人”。",
    examples: ["accountant", "assistant", "consultant"],
    collected: false
  },
  {
    id: "suf_u13_2",
    name: "-ique",
    meaning: "名词后缀",
    category: "suffix",
    description: "后缀'-ique'通常用于构成名词，表示与某种技术或艺术相关的物。",
    examples: ["technique", "antique", "boutique"],
    collected: false
  },
  {
    id: "suf_u13_3",
    name: "-ure",
    meaning: "表名词，状态或行为",
    category: "suffix",
    description: "后缀'-ure'用于构成抽象名词，表示“行为、状态或结果”。",
    examples: ["sculpture", "culture", "pressure"],
    collected: false
  },
  {
    id: "suf_u13_4",
    name: "-ency",
    meaning: "表名词，状态",
    category: "suffix",
    description: "后缀'-ency'用于构成抽象名词，表示某种“性质或状态”。",
    examples: ["agency", "frequency", "emergency"],
    collected: false
  }
]
export const highSchoolUnit14SpiritsData = [
  // Prefixes
  {
    id: "pre_u14_1",
    name: "in-",
    meaning: "向内, 进入",
    category: "prefix",
    description: "前缀 'in-' 表示“向内”或“进入”，如在单词 'inspect' (检查)中，字面意思是“向内看”。",
    examples: ["inspect", "import", "include"],
    collected: false
  },
  {
    id: "pre_u14_2",
    name: "dis-",
    meaning: "除去, 否定",
    category: "prefix",
    description: "前缀 'dis-' 表示否定、相反或“除去”，如 'discourage' (使气馁)就是“除去勇气”。",
    examples: ["discourage", "disagree", "dislike"],
    collected: false
  },
  {
    id: "pre_u14_3",
    name: "con-",
    meaning: "共同",
    category: "prefix",
    description: "前缀 'con-' 表示“共同”或“一起”，如 'conflict' (冲突)的字面意思是“共同打击”。",
    examples: ["conflict", "connect", "concentrate"],
    collected: false
  },
  {
    id: "pre_u14_4",
    name: "mis-",
    meaning: "错误",
    category: "prefix",
    description: "前缀 'mis-' 表示“错误地”或“坏”，如 'mistake' (错误)就是“错拿”。",
    examples: ["mistake", "misunderstand", "misfortune"],
    collected: false
  },
  // Roots
  {
    id: "root_u14_1",
    name: "spect",
    meaning: "看",
    category: "root",
    description: "词根 'spect' 来自拉丁语，意为“看”。",
    examples: ["inspect", "respect", "prospect"],
    collected: false
  },
  {
    id: "root_u14_2",
    name: "flict",
    meaning: "打击",
    category: "root",
    description: "词根 'flict' 意为“打击”。",
    examples: ["conflict", "afflict"],
    collected: false
  },
  {
    id: "root_u14_3",
    name: "courage",
    meaning: "勇气",
    category: "root",
    description: "词根 'courage' 意为“勇气”，是构成 'discourage' 的一部分。",
    examples: ["discourage", "encourage"],
    collected: false
  },
  {
    id: "root_u14_4",
    name: "pend",
    meaning: "悬挂",
    category: "root",
    description: "词根 'pend' 意为“悬挂”，引申为“依赖”。",
    examples: ["depend", "suspend", "independent"],
    collected: false
  },
  {
    id: "root_u14_5",
    name: "physi",
    meaning: "自然",
    category: "root",
    description: "词根 'physi' 来自希腊语，与“自然”或“身体”有关。",
    examples: ["physical", "physics", "physician"],
    collected: false
  },
  {
    id: "root_u14_6",
    name: "bene",
    meaning: "善, 好",
    category: "root",
    description: "词根 'bene' 来自拉丁语，意为“好”。",
    examples: ["beneficial", "benefit", "benevolent"],
    collected: false
  },
  // Suffixes
  {
    id: "suf_u14_1",
    name: "-er",
    meaning: "表人的名词后缀",
    category: "suffix",
    description: "后缀 '-er' 加在动词或名词后，常表示“从事…的人”。",
    examples: ["photographer", "teacher", "worker"],
    collected: false
  },
  {
    id: "suf_u14_2",
    name: "-ion",
    meaning: "表名词后缀",
    category: "suffix",
    description: "后缀 '-ion' 用于将动词变为名词，表示“行为、过程或状态”。",
    examples: ["intention", "inspection", "action"],
    collected: false
  },
  {
    id: "suf_u14_3",
    name: "-ical",
    meaning: "形容词后缀",
    category: "suffix",
    description: "形容词后缀 '-ical' 表示“与…有关的”或“具有…性质的”。",
    examples: ["electrical", "physical", "medical"],
    collected: false
  },
  {
    id: "suf_u14_4",
    name: "-less",
    meaning: "形容词后缀",
    category: "suffix",
    description: "形容词后缀 '-less' 表示“没有…的”或“缺乏…的”。",
    examples: ["careless", "homeless", "useless"],
    collected: false
  },
  {
    id: "suf_u14_5",
    name: "-ive",
    meaning: "形容词后缀",
    category: "suffix",
    description: "后缀 '-ive' 用于构成形容词，表示某种倾向或性质。",
    examples: ["alternative", "active", "creative"],
    collected: false
  }
]
export const highSchoolUnit15SpiritsData = [
  // Prefixes
  {
    id: "pre_u15_1",
    name: "sup-",
    meaning: "在...上, 重复",
    category: "prefix",
    description: "前缀 'sup-' 在这里表示“重复”或“在...之上”的含义，构成单词 'supply' (供给)。",
    examples: ["supply", "support", "suppress"],
    collected: false
  },
  {
    id: "pre_u15_2",
    name: "ap-",
    meaning: "表加强",
    category: "prefix",
    description: "前缀 'ap-' 是 'ad-' 的变体，用在以 'p' 开头的词根前，表示加强语气。",
    examples: ["appropriate", "appoint", "appear"],
    collected: false
  },
  {
    id: "pre_u15_3",
    name: "de-",
    meaning: "向下, 加强",
    category: "prefix",
    description: "前缀 'de-' 含义丰富，可以表示“向下”如 'decline' (下降)，或加强语气如 'deserve' (应受)。",
    examples: ["deserve", "decline", "depend"],
    collected: false
  },
  {
    id: "pre_u15_4",
    name: "pro-",
    meaning: "在前",
    category: "prefix",
    description: "前缀 'pro-' 表示“向前”或“在前”，'provide' (提供)的字面意思就是“预先看到”。",
    examples: ["provide", "progress", "project"],
    collected: false
  },
  {
    id: "pre_u15_5",
    name: "con-",
    meaning: "共同, 加强",
    category: "prefix",
    description: "前缀 'con-' 表示“共同”或“加强语气”。在 'convenience' 中，它加强了“一起来”的含义，引申为方便。",
    examples: ["convenience", "connect", "concert"],
    collected: false
  },
  {
    id: "pre_u15_6",
    name: "trans-",
    meaning: "越过",
    category: "prefix",
    description: "前缀 'trans-' 表示“横过、越过”，'transparent' (透明的) 的字面意思就是“可以看穿的”。",
    examples: ["transparent", "transport", "translate"],
    collected: false
  },
  // Roots
  {
    id: "root_u15_1",
    name: "-ply-",
    meaning: "重叠",
    category: "root",
    description: "词根 '-ply-' 意为“重叠”或“折叠”。",
    examples: ["supply", "reply", "multiply"],
    collected: false
  },
  {
    id: "root_u15_2",
    name: "-propri-",
    meaning: "恰当的",
    category: "root",
    description: "词根 '-propri-' 意为“恰当的”或“自己的”。",
    examples: ["appropriate", "property"],
    collected: false
  },
  {
    id: "root_u15_3",
    name: "-serve-",
    meaning: "服务",
    category: "root",
    description: "词根 '-serve-' 意为“服务”或“保持”。",
    examples: ["deserve", "serve", "reserve"],
    collected: false
  },
  {
    id: "root_u15_4",
    name: "-solut-",
    meaning: "松开",
    category: "root",
    description: "词根 '-solut-' 意为“松开、解决”。",
    examples: ["absolute", "solution", "resolve"],
    collected: false
  },
  {
    id: "root_u15_5",
    name: "-unit-",
    meaning: "个体",
    category: "root",
    description: "词根 '-unit-' 意为“一”或“个体”。",
    examples: ["unite", "unit", "community"],
    collected: false
  },
  {
    id: "root_u15_6",
    name: "-cline-",
    meaning: "倾斜",
    category: "root",
    description: "词根 '-cline-' 意为“倾斜”。",
    examples: ["decline", "incline"],
    collected: false
  },
  {
    id: "root_u15_7",
    name: "-vide-",
    meaning: "看",
    category: "root",
    description: "词根 '-vide-' 或 '-vis-' 意为“看”。",
    examples: ["provide", "video", "visit"],
    collected: false
  },
  {
    id: "root_u15_8",
    name: "-apt-",
    meaning: "适应",
    category: "root",
    description: "词根 '-apt-' 意为“适应、适合”。",
    examples: ["adapt", "aptitude"],
    collected: false
  },
  {
    id: "root_u15_9",
    name: "-spect-",
    meaning: "看",
    category: "root",
    description: "词根 '-spect-' 是一个常见的词根，意为“看”。",
    examples: ["aspect", "inspect", "respect"],
    collected: false
  },
  {
    id: "root_u15_10",
    name: "-posit-",
    meaning: "放置",
    category: "root",
    description: "词根 '-posit-' 意为“放置”。",
    examples: ["positive", "position", "deposit"],
    collected: false
  },
  {
    id: "root_u15_11",
    name: "-rid-",
    meaning: "笑",
    category: "root",
    description: "词根 '-rid-' 意为“笑”。",
    examples: ["ridiculous", "deride"],
    collected: false
  },
  {
    id: "root_u15_12",
    name: "-ven-",
    meaning: "来",
    category: "root",
    description: "词根 '-ven-' 意为“来”。",
    examples: ["convenience", "invent", "adventure"],
    collected: false
  },
  // Suffixes
  {
    id: "suf_u15_1",
    name: "-ate",
    meaning: "动词/形容词后缀",
    category: "suffix",
    description: "后缀 '-ate' 可以用作动词或形容词后缀。",
    examples: ["appropriate", "tolerate", "desperate"],
    collected: false
  },
  {
    id: "suf_u15_2",
    name: "-ous",
    meaning: "形容词后缀",
    category: "suffix",
    description: "后缀 '-ous' 是一个形容词后缀，表示“充满…的”或“具有…性质的”。",
    examples: ["ridiculous", "serious", "dangerous"],
    collected: false
  },
  {
    id: "suf_u15_3",
    name: "-able",
    meaning: "能…的",
    category: "suffix",
    description: "后缀 '-able' 是一个常见的形容词后缀，表示“能够…的”或“可以…的”。",
    examples: ["stable", "comfortable", "reliable"],
    collected: false
  },
  {
    id: "suf_u15_4",
    name: "-ience",
    meaning: "名词后缀",
    category: "suffix",
    description: "后缀 '-ience' 用于构成名词，表示“性质”或“状态”。",
    examples: ["convenience", "patience", "experience"],
    collected: false
  },
  {
    id: "suf_u15_5",
    name: "-ent",
    meaning: "形容词后缀",
    category: "suffix",
    description: "后缀 '-ent' 可用作形容词后缀，表示“…的”。",
    examples: ["transparent", "different", "absent"],
    collected: false
  },
  {
    id: "suf_u15_6",
    name: "-ish",
    meaning: "形容词后缀",
    category: "suffix",
    description: "后缀 '-ish' 是一个形容词后缀，表示“有…性质的”或“有点…的”。",
    examples: ["selfish", "foolish", "childish"],
    collected: false
  }
]

export const highSchoolUnit16SpiritsData = [
  // 前缀精灵
  {
    id: "pre_u16_1",
    name: "cor-",
    meaning: "表加强",
    category: "prefix",
    description: "这个前缀精灵能赋予词根'加强'的含义。",
    examples: ["corrupt", "correct", "correspond"],
    collected: false
  },
  {
    id: "pre_u16_2",
    name: "con-",
    meaning: "共同，加强",
    category: "prefix",
    description: "这个前缀精灵能赋予词根'共同'或'加强'的含义。",
    examples: ["condemn", "consist", "connect"],
    collected: false
  },
  {
    id: "pre_u16_3",
    name: "ex-",
    meaning: "表加强，出",
    category: "prefix",
    description: "这个前缀精灵能赋予词根'加强'或'出'的含义。",
    examples: ["expectation", "export", "exclude"],
    collected: false
  },
  {
    id: "pre_u16_4",
    name: "ad-",
    meaning: "表加强",
    category: "prefix",
    description: "这个前缀精灵能赋予词根'加强'的含义。",
    examples: ["adore", "admit", "advance"],
    collected: false
  },

  // 词根精灵
  {
    id: "root_u16_1",
    name: "-puls-",
    meaning: "驱动",
    category: "root",
    description: "这个词根精灵掌管'驱动'的含义。",
    examples: ["pulse", "pulsate", "impulse"],
    collected: false
  },
  {
    id: "root_u16_2",
    name: "-rupt-",
    meaning: "断裂",
    category: "root",
    description: "这个词根精灵掌管'断裂'的含义。",
    examples: ["corrupt", "rupture", "interrupt"],
    collected: false
  },
  {
    id: "root_u16_3",
    name: "-prin-",
    meaning: "第一",
    category: "root",
    description: "这个词根精灵掌管'第一'的含义。",
    examples: ["principle", "principal", "prince"],
    collected: false
  },
  {
    id: "root_u16_4",
    name: "-cip-",
    meaning: "抓",
    category: "root",
    description: "这个词根精灵掌管'抓'的含义。",
    examples: ["principle", "participate", "anticipate"],
    collected: false
  },
  {
    id: "root_u16_5",
    name: "-atmo-",
    meaning: "气",
    category: "root",
    description: "这个词根精灵掌管'气'的含义。",
    examples: ["atmosphere", "atmospheric"],
    collected: false
  },
  {
    id: "root_u16_6",
    name: "-sphere-",
    meaning: "球体",
    category: "root",
    description: "这个词根精灵掌管'球体'的含义。",
    examples: ["atmosphere", "sphere", "hemisphere"],
    collected: false
  },
  {
    id: "root_u16_7",
    name: "-demn-",
    meaning: "惩罚",
    category: "root",
    description: "这个词根精灵掌管'惩罚'的含义。",
    examples: ["condemn", "condemnation"],
    collected: false
  },
  {
    id: "root_u16_8",
    name: "-electr-",
    meaning: "电",
    category: "root",
    description: "这个词根精灵掌管'电'的含义。",
    examples: ["electricity", "electric", "electronic"],
    collected: false
  },
  {
    id: "root_u16_9",
    name: "-spec-",
    meaning: "种类",
    category: "root",
    description: "这个词根精灵掌管'种类'的含义。",
    examples: ["specific", "species", "special"],
    collected: false
  },
  {
    id: "root_u16_10",
    name: "-sist-",
    meaning: "站",
    category: "root",
    description: "这个词根精灵掌管'站'的含义。",
    examples: ["consist", "resist", "assist"],
    collected: false
  },
  {
    id: "root_u16_11",
    name: "-prim-",
    meaning: "第一",
    category: "root",
    description: "这个词根精灵掌管'第一'的含义。",
    examples: ["primitive", "primary", "prime"],
    collected: false
  },
  {
    id: "root_u16_12",
    name: "-pect-",
    meaning: "看",
    category: "root",
    description: "这个词根精灵掌管'看'的含义。",
    examples: ["expectation", "expect", "inspect"],
    collected: false
  },
  {
    id: "root_u16_13",
    name: "-punct-",
    meaning: "点",
    category: "root",
    description: "这个词根精灵掌管'点'的含义。",
    examples: ["punctuation", "punctual", "puncture"],
    collected: false
  },
  {
    id: "root_u16_14",
    name: "-uni-",
    meaning: "单一",
    category: "root",
    description: "这个词根精灵掌管'单一'的含义。",
    examples: ["unique", "unite", "unity"],
    collected: false
  },
  {
    id: "root_u16_15",
    name: "-ore-",
    meaning: "讲话",
    category: "root",
    description: "这个词根精灵掌管'讲话'的含义。",
    examples: ["adore", "orator", "oral"],
    collected: false
  },

  // 后缀精灵
  {
    id: "suf_u16_1",
    name: "-le",
    meaning: "表名词",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为名词。",
    examples: ["principle", "particle", "article"],
    collected: false
  },
  {
    id: "suf_u16_2",
    name: "-icity",
    meaning: "表名词",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为名词。",
    examples: ["electricity", "simplicity", "authenticity"],
    collected: false
  },
  {
    id: "suf_u16_3",
    name: "-ific",
    meaning: "产生...的",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为形容词，表示'产生...的'。",
    examples: ["specific", "scientific", "terrific"],
    collected: false
  },
  {
    id: "suf_u16_4",
    name: "-itive",
    meaning: "具有...性质的",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为形容词，表示'具有...性质的'。",
    examples: ["primitive", "positive", "sensitive"],
    collected: false
  },
  {
    id: "suf_u16_5",
    name: "-ation",
    meaning: "表名词",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为名词。",
    examples: ["expectation", "information", "education"],
    collected: false
  },
  {
    id: "suf_u16_6",
    name: "-uat",
    meaning: "表动词",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为动词。",
    examples: ["punctuation", "situate", "evaluate"],
    collected: false
  },
  {
    id: "suf_u16_7",
    name: "-que",
    meaning: "...的",
    category: "suffix",
    description: "这个后缀精灵能将词根转变为形容词，表示'...的'。",
    examples: ["unique", "antique", "technique"],
    collected: false
  }
]

export const rootSpiritsDataByLevel = {
  "high-school-1-unit1": highSchoolUnit1SpiritsData,
  "high-school-1-unit2": highSchoolUnit2SpiritsData,
  "high-school-1-unit6": highSchoolUnit6SpiritsData,
  "high-school-1-unit8": highSchoolUnit8SpiritsData,
  "high-school-1-unit9": highSchoolUnit9SpiritsData,
  "high-school-1-unit10": highSchoolUnit10SpiritsData,
  "high-school-1-unit11": highSchoolUnit11SpiritsData,
  "high-school-1-unit12": highSchoolUnit12SpiritsData,
  "high-school-1-unit13": highSchoolUnit13SpiritsData,
  "high-school-1-unit14": highSchoolUnit14SpiritsData,
  "high-school-1-unit15": highSchoolUnit15SpiritsData,
  "high-school-1-unit16": highSchoolUnit16SpiritsData,

  "default": sampleSpiritsData
}

export const SPIRIT_TYPES = [
  {
    category: "prefix",
    name: "前缀精灵",
    color: "#f9c851",
    textColor: "text-[#f9c851]",
    bgColor: "bg-[#f9c851]",
    borderColor: "border-[#f9c851]/30",
    shadow: "shadow-[0_0_10px_rgba(249,200,81,0.5)]",
    bgGradient: "from-[#f9c851]/10 to-[#ff8a5c]/10",
    description: "前缀精灵能改变或增强词根的含义，它们总是出现在词根精灵的前面。",
  },
  {
    category: "root",
    name: "词根精灵",
    color: "#4ade80",
    textColor: "text-[#4ade80]",
    bgColor: "bg-[#4ade80]",
    borderColor: "border-[#4ade80]/30",
    shadow: "shadow-[0_0_10px_rgba(74,222,128,0.5)]",
    bgGradient: "from-[#4ade80]/10 to-[#22d3ee]/10",
    description: "词根精灵是单词的核心，它们掌管着单词的基本含义。",
  },
  {
    category: "suffix",
    name: "后缀精灵",
    color: "#a78bfa",
    textColor: "text-[#a78bfa]",
    bgColor: "bg-[#a78bfa]",
    borderColor: "border-[#a78bfa]/30",
    shadow: "shadow-[0_0_10px_rgba(167,139,250,0.5)]",
    bgGradient: "from-[#a78bfa]/10 to-[#f472b6]/10",
    description: "后缀精灵能改变词根的词性或为词根添加特定的含义，它们总是出现在词根精灵的后面。",
  },
]



