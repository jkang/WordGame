import type { VocabularyWord } from "@/types/vocabulary"
import  { highSchoolUnit2 } from "@/data/high-school-unit2"
import  { highSchoolUnit3 } from "@/data/high-school-unit3"
import  { highSchoolUnit4 } from "@/data/high-school-unit4"
import {middleSchoolUnit1Vocabulary, middleSchoolUnit2Vocabulary,middleSchoolUnit3Vocabulary,middleSchoolUnit4Vocabulary,middleSchoolUnit5Vocabulary,middleSchoolUnit6Vocabulary,middleSchoolUnit7Vocabulary,middleSchoolUnit8Vocabulary,middleSchoolUnit9Vocabulary,middleSchoolUnit10Vocabulary} from "@/data/middle-school-vocabulary"
import { highSchoolUnit1 } from "./high-school-unit1"

// Combine all units into a map
export const vocabularyByLevelUnit: Record<string, VocabularyWord[]> = {
  "middle-school-8-unit1": middleSchoolUnit1Vocabulary,
  "middle-school-8-unit2": middleSchoolUnit2Vocabulary,
  "middle-school-8-unit3": middleSchoolUnit3Vocabulary,
  "middle-school-8-unit4": middleSchoolUnit4Vocabulary,
  "middle-school-8-unit5": middleSchoolUnit5Vocabulary,
  "middle-school-8-unit6": middleSchoolUnit6Vocabulary,
  "middle-school-8-unit7": middleSchoolUnit7Vocabulary,
  "middle-school-8-unit8": middleSchoolUnit8Vocabulary,
  "middle-school-8-unit9": middleSchoolUnit9Vocabulary,
  "middle-school-8-unit10": middleSchoolUnit10Vocabulary,
  "high-school-1-unit1": highSchoolUnit1,
  "high-school-1-unit2": highSchoolUnit2,
  "high-school-1-unit3": highSchoolUnit3,
  "high-school-1-unit4": highSchoolUnit4,
}

