export interface Question {
    id: number
    questionTitle: string
    option1: string
    option2: string
    option3: string
    option4: string
    rightAnswer: string
    difficultylevel: string
    category: string
  }
  
  export interface QuestionWrapper {
    id: number
    questionTitle: string
    option1: string
    option2: string
    option3: string
    option4: string
  }
  
  export interface Response {
    id: number
    response: string
  }
  
  