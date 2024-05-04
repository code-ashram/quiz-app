import { FC } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Divider, Button, Radio, RadioGroup } from '@nextui-org/react'
import { Question } from '../../models'

type Props = {
  question: Question
  onNext: () => void
  onPrev: () => void
}

const QuestionForm: FC<Props> = ({ question, onPrev, onNext }) => {

  return (
    <form>
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
              <Radio key={option.id} value={String(option.id)}>
                {option.text}
              </Radio>)}
          </RadioGroup>
        </CardBody>

        <Divider />

        <CardFooter>
          <Button color="primary" onClick={onPrev}>
            Prev
          </Button>

          <Button className="ml-2" color="primary" onClick={onNext}>
            Next
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

export default QuestionForm
