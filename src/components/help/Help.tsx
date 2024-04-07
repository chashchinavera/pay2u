import Header from "../header/Header";
import NavigationTab from "../navigationTab/NavigationTab";
import Questions from "../questions/Questions";

function Help() {
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
                link="/pay2u"
            />
            <Questions />
        </>
    )
}

export default Help;
