import {FC} from "react";
import {Card} from "@nextui-org/react";
import {CheckedAnswer} from "../../models";

type Props = {
  source: CheckedAnswer[]
}

const Results: FC<Props> = ({source}) => {

  return (
    <Card className="results">
      <ul>
        {source.map((answer) =>
          <li key={answer.answer}>
            <p>Question: {answer.question}</p>
            <p>Answer: {answer.answer}</p>
            <p>{answer.isCorrect ? 'True!' : 'False'}</p>
          </li>)}
      </ul>
    </Card>
  )
}

export default Results
