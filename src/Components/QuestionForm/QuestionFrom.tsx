import { FC, FormEvent, useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Divider, Button, Radio, RadioGroup } from '@nextui-org/react'
import { Answer, Question } from '../../models'

type Props = {
  onNext: (answer: Answer) => void
  question: Question
}

const QuestionForm: FC<Props> = ({ question, onNext }) => {
  const [answer, setAnswer] = useState<Answer | null>(null)

  const handleSubmitAnswer = (e: FormEvent) => {
    e.preventDefault()
      if (answer) onNext(answer)
      setAnswer(null)
  }

  return (
    <form onSubmit={handleSubmitAnswer}>
      <Card className="questionForm">
        <CardHeader className="flex flex-col items-start gap-3">
          <h2>Question №{question.id}</h2>
        </CardHeader>
        <Divider />

        <CardBody>
          <p className="mb-2">{question.question}</p>

          <RadioGroup
            label={question.task}
            color="primary"
          >
            {question.options.map((option) =>
              <Radio key={option.id} value={String(option.id)}
                     onChange={() => setAnswer({ answerId: option.id, questionId: question.id })}>
                {option.text}
              </Radio>)}
          </RadioGroup>
        </CardBody>

        <Divider />

        <CardFooter>
          {/* <Button color="primary" onClick={onPrev}> */}
          {/*   Prev */}
          {/* </Button> */}

          <Button className="ml-2" color="primary" type="submit" isDisabled={!answer}>
            Next
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

export default QuestionForm
