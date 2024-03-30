import Button from "../Button/Button";

function Main() {
    return (
        <div className="main">
            <div className="main__navigation">
                <a href="#"><img alt='Вернуться в приложение банка' src='./images/Back.svg' /></a>
                <div>
                    <a href="/help"><img className='main__link' alt='Уведомления' src='./images/Notifications.svg' /></a>
                    <a href="/notifications"><img className='main__link' alt='Помощь' src='./images/Help.svg' /></a>
                </div>
            </div>
            <div>
                <Button
                    color='purple'
                    size="small"
                    className=''
                    children='aaaa'
                />
            </div>
            <div>

            </div>
        </div>
    )
}

export default Main;