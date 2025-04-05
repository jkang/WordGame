import type { Word } from "./word"

export interface WordRoot {
  id: string
  root: string
  meaning: string
  examples: []
}

export interface WordPrefix {
  id: string
  prefix: string
  meaning: string
  examples: []
}

export interface WordSuffix {
  id: string
  suffix: string
  meaning: string
  examples: []
}

export interface Prefix {
  id: string
  prefix: string
  meaning: string
  examples: []
}

export interface WordRootWithWords extends WordRoot {
  words: Word[]
}

