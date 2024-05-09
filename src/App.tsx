import {useState} from 'react'
import {useQuery} from '@tanstack/react-query'
import {Spinner} from '@nextui-org/react'

import QuestionForm from './Components/QuestionForm'
import Results from "./Components/Results";

import {getQuestions} from './api'
import {Answer} from './models'

import './App.css'

const App = () => {
  const {data, isLoading, isError, error} = useQuery({queryKey: ['questions'], queryFn: getQuestions})
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])

  const checkedResult = data?.map((question) => {
    const userAnswer = answers.find((answer) => answer.questionId === question.id)
    const answer = question.options.find((option) => option.id === userAnswer?.answerId)

    return {
      question: question.question,
      answer: answer?.text,
      isCorrect: !!answer?.isCorrect,
    }
  })

  console.log(checkedResult)

  const handleNextClick = (answer: Answer): void => {
    setAnswers(prevAnswers => [...prevAnswers, answer])

    if (data) setStep((prevStep) => answers.length >= data.length ? data.length : prevStep + 1)
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
        isLoading && <Spinner label="Loading..." color="warning"/>
      }

      {
        data && answers.length < data.length
          ? <QuestionForm
            question={data[step]}
            onNext={handleNextClick}
          />
          : <Results source={checkedResult}/>
      }
    </>
  )
}

export default App
