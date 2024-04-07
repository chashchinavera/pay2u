import Header from "./header/Header";
import NavigationTab from "./navigationTab/NavigationTab";

function Notifications() {
    return (
        <>
            <Header
                theme={{ white: false }}
            />
            <NavigationTab
                title={'Уведомления'}
                className="mt-[10px] mb-[20px]"
                help="./images/icons/Help.svg"
                notifications="./images/icons/Active-notifications.svg"
            />
        </>
    )
}

export default Notifications;
