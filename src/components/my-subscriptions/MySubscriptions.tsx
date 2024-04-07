import Header from "../header/Header";
import NavigationTab from "../navigationTab/NavigationTab";
import Subs from "./subs/Subs";

function MySubscriptions() {
    return (
        <>
            <Header
                theme={{ white: false }}
            />
            <NavigationTab
                title='Мои подписки'
                className="mt-[10px] mb-[20px]"
                help="./images/icons/Help.svg"
                notifications="./images/icons/Notifications.svg"
                link="/pay2u"
            />
            <Subs
                name="litres"
            />
        </>
    )
}

export default MySubscriptions;
