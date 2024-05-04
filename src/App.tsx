import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Spinner } from '@nextui-org/react'

import QuestionForm from './Components/QuestionForm'
import { getQuestions } from './api'

import './App.css'

const App = () => {
  const { data, isLoading, isError, error } = useQuery({ queryKey: ['questions'], queryFn: getQuestions })
  const [step, setStep] = useState(0)

  const handleNextClick = (): void => {
    if (data) setStep((prevStep) => prevStep === data.length - 1 ? 0 : prevStep + 1)
  }

  const handlePreviousClick = (): void => {
    if (data) setStep((prevStep) => prevStep <= 0 ? data.length - 1 : prevStep - 1)
  }

  return (
    <>
      <h1 className="title text-3xl font-bold underline">
        Bhagavad-Gita Quiz
      </h1>

      {
        isError && <p>{error.message}</p>
      }

      {
        isLoading && <Spinner label="Loading..." color="warning" />
      }

      {
        data && <QuestionForm question={data[step]} onPrev={handlePreviousClick} onNext={handleNextClick} />
      }
    </>
  )
}

export default App
