export type Question = {
  id: number
  task: string
  question: string
  options: Option[]
}

type Option = {
  id: number
  text: string
  isCorrect: boolean
}

export type Answer = {
  id: number
  isCorrect: boolean
}
