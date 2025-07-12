import type { VocabularyWord } from "@/types/vocabulary"

import { middleSchoolUnit1Vocabulary } from "./words/middleschool/middle-school-8-Unit1"
import { middleSchoolUnit2Vocabulary } from "./words/middleschool/middle-school-8-Unit2"
import { middleSchoolUnit3Vocabulary } from "./words/middleschool/middle-school-8-Unit3"
import { middleSchoolUnit4Vocabulary } from "./words/middleschool/middle-school-8-Unit4"
import { middleSchoolUnit5Vocabulary } from "./words/middleschool/middle-school-8-Unit5"
import { middleSchoolUnit6Vocabulary } from "./words/middleschool/middle-school-8-Unit6"
import { middleSchoolUnit7Vocabulary } from "./words/middleschool/middle-school-8-Unit7"
import { middleSchoolUnit8Vocabulary } from "./words/middleschool/middle-school-8-Unit8"
import { middleSchoolUnit9Vocabulary } from "./words/middleschool/middle-school-8-Unit9"
import { middleSchoolUnit10Vocabulary } from "./words/middleschool/middle-school-8-Unit10"

import  { highSchoolUnit1 } from "./words/highschool/high-school-unit1"
import  { highSchoolUnit2 } from "./words/highschool/high-school-unit2"
import  { highSchoolUnit3 } from "./words/highschool/high-school-unit3"
import  { highSchoolUnit4 } from "./words/highschool/high-school-unit4"
import  { highSchoolUnit5 } from "./words/highschool/high-school-unit5"
import  { highSchoolUnit6 } from "./words/highschool/high-school-unit6"
import  { highSchoolUnit7 } from "./words/highschool/high-school-unit7"
import  { highSchoolUnit8 } from "./words/highschool/high-school-unit8"
import  { highSchoolUnit9 } from "./words/highschool/high-school-unit9"
import  { highSchoolUnit10 } from "./words/highschool/high-school-unit10"
import  { highSchoolUnit11 } from "./words/highschool/high-school-unit11"
import  { highSchoolUnit12 } from "./words/highschool/high-school-unit12"
import  { highSchoolUnit13 } from "./words/highschool/high-school-unit13"
import  { highSchoolUnit14 } from "./words/highschool/high-school-unit14"
import  { highSchoolUnit15 } from "./words/highschool/high-school-unit15"

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
  "high-school-1-unit5": highSchoolUnit5,
  "high-school-1-unit6": highSchoolUnit6,
  "high-school-1-unit7": highSchoolUnit7,
  "high-school-1-unit8": highSchoolUnit8,
  "high-school-1-unit9": highSchoolUnit9,
  "high-school-1-unit10": highSchoolUnit10,
  "high-school-1-unit11": highSchoolUnit11,
  "high-school-1-unit12": highSchoolUnit12,
  "high-school-1-unit13": highSchoolUnit13,
  "high-school-1-unit14": highSchoolUnit14,
  "high-school-1-unit15": highSchoolUnit15,
}

