import Question from "./question/Question";
import questions from "../../utils/questions";

function Questions() {
    return (
        <div className="mx-[16px]">
            {questions.map((question) => (
                <Question 
                id={question.id}
                title={question.question}
                link={question.link}
                />
            ))}
        </div>
    )
}

export default Questions;
