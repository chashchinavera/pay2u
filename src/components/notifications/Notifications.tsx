import notifications from "../../utils/notifications";
import Header from "../header/Header";
import NavigationTab from "../navigationTab/NavigationTab";
import Notification from "./notification/Notification";

function Notifications() {
    return (
        <>
            <Header
                theme={{ white: false }}
            />
            <NavigationTab
                title='Уведомления'
                className="mt-[10px] mb-[20px]"
                help="./images/icons/Help.svg"
                notifications="./images/icons/Active-notifications.svg"
                link="/pay2u"
            />
            {notifications.map((notification) => (
                <Notification
                key={notification.id}
                title={notification.title}
                info={notification.info}
                />
            ))}
        </>
    )
}

export default Notifications;
