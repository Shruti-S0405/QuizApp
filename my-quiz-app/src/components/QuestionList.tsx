"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { getAllQuestions, getQuestionsByCategory } from "../services/api"
import type { Question } from "../types"

export const QuestionList: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [category, setCategory] = useState<string>("")

  useEffect(() => {
    fetchQuestions()
  }, [])

  const fetchQuestions = async () => {
    try {
      const response = await getAllQuestions()
      setQuestions(response.data)
    } catch (error) {
      console.error("Error fetching questions:", error)
    }
  }

  const handleCategoryChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCategory = e.target.value
    setCategory(newCategory)
    if (newCategory) {
      try {
        const response = await getQuestionsByCategory(newCategory)
        setQuestions(response.data)
      } catch (error) {
        console.error("Error fetching questions by category:", error)
      }
    } else {
      fetchQuestions()
    }
  }

  return (
    <div>
      <h2>Questions</h2>
      <input type="text" placeholder="Filter by category" value={category} onChange={handleCategoryChange} />
      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.questionTitle}</li>
        ))}
      </ul>
    </div>
  )
}

