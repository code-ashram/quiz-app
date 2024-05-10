import { FC, useMemo } from 'react'
import { Card, Progress } from '@nextui-org/react'
import { Answer, Question } from '../../models'

type Props = {
  questions: Question[]
  answers: Answer[]
}

const Results: FC<Props> = ({ questions, answers }) => {
  const result = useMemo(() => questions.reduce((acc, question) => {
    const userAnswer = answers.find((answer) => answer.questionId === question.id)
    const answer = question.options.find((option) => option.id === userAnswer?.answerId)

    return acc + (answer?.isCorrect ? 1 : 0) / answers.length * 100
  }, 0), [answers, questions])

  const setProgressColor = (progress: number) => {
    if (progress <= 25) {
      return 'danger'
    } else if (progress > 25 && progress <= 50) {
      return 'warning'
    } else if (progress > 50 && progress <= 75) {
      return 'secondary'
    } else {
      return 'success'
    }
  }

  return (
    <Card className="results">
      <Progress
        className="max-w-xl mb-2"
        aria-label="Downloading..."
        label="Your result:"
        size="md"
        value={result}
        color={setProgressColor(result)}
        showValueLabel={true}
      />
      {/* <h2 className="mb-2 text-center"> */}
      {/*   {`Your result is: ${(result / answers.length * 100).toFixed(0)}% (${result} correct answers from ${answers.length})`} */}
      {/* </h2> */}

      <ul>
        {
          questions.map((question) => {
            const userAnswer = answers.find((answer) => answer.questionId === question.id)
            const answer = question.options.find((option) => option.id === userAnswer?.answerId)

            return <li key={question.id}>
              <Card className="answer">
                <p className="font-bold">
                  Question: <span className="font-normal">{question.question}</span>
                </p>

                <p className="font-bold">
                  Answer: <span className={answer?.isCorrect ? 'correct' : 'wrong'}>{answer?.text}</span>
                </p>
              </Card>
            </li>
          })
        }
      </ul>
    </Card>
  )
}

export default Results
