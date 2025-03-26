import type { WordRootWithWords } from "@/types/word-root"

const STORAGE_KEY = "wordRoots"

export const saveWordRoots = (wordRoots: WordRootWithWords[]): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wordRoots))
  }
}

export const loadWordRoots = (): WordRootWithWords[] => {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem(STORAGE_KEY)
    if (storedData) {
      try {
        return JSON.parse(storedData)
      } catch (error) {
        console.error("Error parsing stored word roots:", error)
      }
    }
  }
  return []
}

