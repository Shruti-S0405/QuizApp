import axios from "axios"
import type { Question, QuestionWrapper, Response } from "../types"

const API_BASE_URL = "http://localhost:8080" // Adjust this to match your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
})

export const getAllQuestions = () => api.get<Question[]>("/question/allQuestions")

export const getQuestionsByCategory = (category: string) => api.get<Question[]>(`/question/category/${category}`)

export const addQuestion = (question: Question) => api.post<string>("/question/add", question)

export const createQuiz = (category: string, numQ: number, title: string) =>
  api.post<string>("/quiz/create", null, { params: { category, numQ, title } })

export const getQuizQuestions = (id: number) => api.get<QuestionWrapper[]>(`/quiz/get/${id}`)

export const submitQuiz = (id: number, responses: Response[]) => api.post<number>(`/quiz/submit/${id}`, responses)

