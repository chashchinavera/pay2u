import Header from "../../header/Header";
import NavigationTab from "../../navigationTab/NavigationTab";
import questions from "../../../utils/questions";
import Answer from "../answer/Answer";


function Answers() {

    const answer = questions[0];

    return (
        <>
            <Header
                theme={{ white: false }}
            />
            <NavigationTab
                title='Вопросы-ответы'
                className="mt-[10px] mb-[20px]"
                help="./images/icons/help-line.svg"
                notifications="./images/icons/Notifications.svg"
                link="/help"
            />
            <Answer
                key={answer.id}
                id={answer.id}
                question={answer.question}
                answer={answer.answer}
            />
        </>
    )
}

export default Answers;
