import type React from "react"
import { useState } from "react"
import { addQuestion } from "../services/api"
import type { Question } from "../types"

export const AddQuestion: React.FC = () => {
  const [question, setQuestion] = useState<Question>({
    id: 0,
    questionTitle: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    rightAnswer: "",
    difficultylevel: "",
    category: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setQuestion((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await addQuestion(question)
      alert(response.data)
      setQuestion({
        id: 0,
        questionTitle: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        rightAnswer: "",
        difficultylevel: "",
        category: "",
      })
    } catch (error) {
      console.error("Error adding question:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Question</h2>
      <input
        type="text"
        name="questionTitle"
        value={question.questionTitle}
        onChange={handleChange}
        placeholder="Question Title"
        required
      />
      <input
        type="text"
        name="option1"
        value={question.option1}
        onChange={handleChange}
        placeholder="Option 1"
        required
      />
      <input
        type="text"
        name="option2"
        value={question.option2}
        onChange={handleChange}
        placeholder="Option 2"
        required
      />
      <input
        type="text"
        name="option3"
        value={question.option3}
        onChange={handleChange}
        placeholder="Option 3"
        required
      />
      <input
        type="text"
        name="option4"
        value={question.option4}
        onChange={handleChange}
        placeholder="Option 4"
        required
      />
      <input
        type="text"
        name="rightAnswer"
        value={question.rightAnswer}
        onChange={handleChange}
        placeholder="Right Answer"
        required
      />
      <input
        type="text"
        name="difficultylevel"
        value={question.difficultylevel}
        onChange={handleChange}
        placeholder="Difficulty Level"
        required
      />
      <input
        type="text"
        name="category"
        value={question.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <button type="submit">Add Question</button>
    </form>
  )
}

