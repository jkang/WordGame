import type { VocabularyWord } from "@/types/vocabulary"
import { middleSchoolUnit1Vocabulary } from "./middleschool/middle-school-8-Unit1"
import { middleSchoolUnit2Vocabulary } from "./middleschool/middle-school-8-Unit2"
import { middleSchoolUnit3Vocabulary } from "./middleschool/middle-school-8-Unit3"
import { middleSchoolUnit4Vocabulary } from "./middleschool/middle-school-8-Unit4"
import { middleSchoolUnit5Vocabulary } from "./middleschool/middle-school-8-Unit5"
import { middleSchoolUnit6Vocabulary } from "./middleschool/middle-school-8-Unit6"
import { middleSchoolUnit7Vocabulary } from "./middleschool/middle-school-8-Unit7"
import { middleSchoolUnit8Vocabulary } from "./middleschool/middle-school-8-Unit8"
import { middleSchoolUnit9Vocabulary } from "./middleschool/middle-school-8-Unit9"
import { middleSchoolUnit10Vocabulary } from "./middleschool/middle-school-8-Unit10"

// Combine all units into a map
export const middleSchoolVocabularyByUnit: Record<string, VocabularyWord[]> = {
  "middle-school-8-unit3": middleSchoolUnit3Vocabulary,
  "middle-school-8-unit4": middleSchoolUnit4Vocabulary,
  "middle-school-8-unit5": middleSchoolUnit5Vocabulary,
  "middle-school-8-unit6": middleSchoolUnit6Vocabulary,
  "middle-school-8-unit7": middleSchoolUnit7Vocabulary,
  "middle-school-8-unit8": middleSchoolUnit8Vocabulary,
  "middle-school-8-unit9": middleSchoolUnit9Vocabulary,
  "middle-school-8-unit10": middleSchoolUnit10Vocabulary
}