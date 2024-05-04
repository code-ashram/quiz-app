import { useQuery } from '@tanstack/react-query'
import { getQuestions } from './api/client.ts'

import './App.css'

const App = () => {
  const { data } = useQuery({ queryKey: ['questions'], queryFn: getQuestions })

  console.log(data)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Bhagavad-Gita Quiz
      </h1>
    </>
  )
}

export default App
