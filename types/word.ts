export interface Word {
  id: string
  word: string
  meaning: string
  isMarked: boolean
}

export interface WordBuilding
{
  id: string,
  meaning: string,
  options: string[],
  correctOptions: string [],
}
