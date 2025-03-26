import type { Word } from "./word"

export interface WordRoot {
  id: string
  root: string
  meaning: string
  isMarked: boolean
}

export interface WordRootWithWords extends WordRoot {
  words: Word[]
}

