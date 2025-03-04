"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getQuizQuestions, submitQuiz } from "../services/api"
import type { QuestionWrapper, Response } from "../types"

export const TakeQuiz: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [questions, setQuestions] = useState<QuestionWrapper[]>([])
  const [responses, setResponses] = useState<Response[]>([])
  const [result, setResult] = useState<number | null>(null)

  useEffect(() => {
    fetchQuizQuestions()
  }, []) // Removed unnecessary dependency 'id'

  const fetchQuizQuestions = async () => {
    try {
      const response = await getQuizQuestions(Number(id))
      setQuestions(response.data)
      setResponses(response.data.map((q) => ({ id: q.id, response: "" })))
    } catch (error) {
      console.error("Error fetching quiz questions:", error)
    }
  }

  const handleResponseChange = (questionId: number, answer: string) => {
    setResponses((prev) => prev.map((r) => (r.id === questionId ? { ...r, response: answer } : r)))
  }

  const handleSubmit = async () => {
    try {
      const response = await submitQuiz(Number(id), responses)
      setResult(response.data)
    } catch (error) {
      console.error("Error submitting quiz:", error)
    }
  }

  return (
    <div>
      <h2>Take Quiz</h2>
      {questions.map((question) => (
        <div key={question.id}>
          <h3>{question.questionTitle}</h3>
          <label>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={question.option1}
              onChange={() => handleResponseChange(question.id, question.option1)}
            />
            {question.option1}
          </label>
          <label>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={question.option2}
              onChange={() => handleResponseChange(question.id, question.option2)}
            />
            {question.option2}
          </label>
          <label>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={question.option3}
              onChange={() => handleResponseChange(question.id, question.option3)}
            />
            {question.option3}
          </label>
          <label>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={question.option4}
              onChange={() => handleResponseChange(question.id, question.option4)}
            />
            {question.option4}
          </label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
      {result !== null && <p>Your score: {result}</p>}
    </div>
  )
}

