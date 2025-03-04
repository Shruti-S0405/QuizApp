import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { QuestionList } from "./components/QuestionList"
import { AddQuestion } from "./components/AddQuestion"
import { CreateQuiz } from "./components/CreateQuiz"
import { TakeQuiz } from "./components/TakeQuiz"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/questions">Questions</Link>
            </li>
            <li>
              <Link to="/add-question">Add Question</Link>
            </li>
            <li>
              <Link to="/create-quiz">Create Quiz</Link>
            </li>
            <li>
              <Link to="/take-quiz/1">Take Quiz</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Welcome to Quiz App</h1>} />
          <Route path="/questions" element={<QuestionList />} />
          <Route path="/add-question" element={<AddQuestion />} />
          <Route path="/create-quiz" element={<CreateQuiz />} />
          <Route path="/take-quiz/:id" element={<TakeQuiz />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

