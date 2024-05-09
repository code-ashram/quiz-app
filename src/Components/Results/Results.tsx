import {FC} from "react";
import {Card} from "@nextui-org/react";
import {Answer, Question} from "../../models";


type Props = {
  questions: Question[]
  answers: Answer[]
}

const Results: FC<Props> = ({questions, answers}) => {

  return (
    <Card className="results">
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
