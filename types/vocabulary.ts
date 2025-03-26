export interface VocabularyWord {
  word: string
  pronunciation: string
  partOfSpeech: string
  definition: string
  wordRootMemory?: string
  example?: string
  examples?: string[]
  usageNotes?: string[]
  relatedWords?: string[]
  relatedPhrases?: string[]
  relatedWordsExtra?: string[]
}

