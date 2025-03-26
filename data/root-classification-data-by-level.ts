import { rootClassificationData } from "./root-classification-data"

export const HIGH_SCHOOL_1_UNIT1_DATA = {
  categories: [
    { id: "hs-rc1", root: "-port- (carry)", meaning: "携带" },
    { id: "hs-rc2", root: "-memor- (memory)", meaning: "记忆" },
    { id: "hs-rc3", root: "-grat- (pleasing)", meaning: "令人高兴的" },
    { id: "hs-rc4", root: "trans- (across)", meaning: "变换" },
    { id: "hs-rc5", root: "in- (in)", meaning: "进入" },
    { id: "hs-rc6", root: "con- (together)", meaning: "共同" },
  ],
  words: [
    { id: "hs-w1", word: "portable", categoryId: "hs-rc1" },
    { id: "hs-w2", word: "transport", categoryId: "hs-rc1" },
    { id: "hs-w3", word: "import", categoryId: "hs-rc1" },
    { id: "hs-w4", word: "memory", categoryId: "hs-rc2" },
    { id: "hs-w5", word: "memorial", categoryId: "hs-rc2" },
    { id: "hs-w6", word: "grateful", categoryId: "hs-rc3" },
    { id: "hs-w7", word: "congratulate", categoryId: "hs-rc3" },
    { id: "hs-w8", word: "translate", categoryId: "hs-rc4" },
    { id: "hs-w9", word: "transform", categoryId: "hs-rc4" },
    { id: "hs-w10", word: "include", categoryId: "hs-rc5" },
    { id: "hs-w11", word: "inside", categoryId: "hs-rc5" },
    { id: "hs-w12", word: "conference", categoryId: "hs-rc6" },
    { id: "hs-w13", word: "connect", categoryId: "hs-rc6" },
    { id: "hs-w14", word: "component", categoryId: "hs-rc6" },
  ],
}

export const rootClassificationDataByLevel = {
  "middle-school-8-unit1": rootClassificationData,
  "middle-school-8-unit2": rootClassificationData,
  "middle-school-8-unit3": rootClassificationData,
  "middle-school-8-unit4": rootClassificationData,
  "middle-school-8-unit5": rootClassificationData,
  "middle-school-8-unit6": rootClassificationData,
  "middle-school-8-unit7": rootClassificationData,
  "middle-school-8-unit8": rootClassificationData,
  "middle-school-8-unit9": rootClassificationData,
  "middle-school-8-unit10": rootClassificationData,
  "high-school-1-unit1": HIGH_SCHOOL_1_UNIT1_DATA,
  "high-school-1-unit2": HIGH_SCHOOL_1_UNIT1_DATA,
  "high-school-1-unit3": HIGH_SCHOOL_1_UNIT1_DATA,
}



