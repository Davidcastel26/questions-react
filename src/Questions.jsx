import { SingleQuestion } from "./SingleQuestion"
import questions from "./data"

export const Questions = ({}) => {
  return (
    <section className="container">
        <h1>
            Questions
        </h1>
        {
            questions.map((question) => {
                return <SingleQuestion key={question.id} {...question} />
            })
        }
    </section>
  )
}
