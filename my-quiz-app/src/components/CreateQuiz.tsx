"use client"

import type React from "react"
import { useState } from "react"
import { createQuiz } from "../services/api"

export const CreateQuiz: React.FC = () => {
  const [category, setCategory] = useState("")
  const [numQuestions, setNumQuestions] = useState(0)
  const [title, setTitle] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await createQuiz(category, numQuestions, title)
      alert(response.data)
    } catch (error) {
      console.error("Error creating quiz:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Quiz</h2>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <input
        type="number"
        value={numQuestions}
        onChange={(e) => setNumQuestions(Number.parseInt(e.target.value))}
        placeholder="Number of Questions"
        required
      />
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Quiz Title" required />
      <button type="submit">Create Quiz</button>
    </form>
  )
}

