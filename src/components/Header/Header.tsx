import { useState } from 'react';
import { getTime } from '../../utils/getTime';

function Header() {
    const [currentTime, setCurrentTime] = useState(getTime());
    
    return (
        <div className="header">
            <span className='header__time'>{currentTime}</span>
            <div>
                <img className='header__image' alt='Качество связи' src='./images/Connection.svg' />
                <img className='header__image' alt='Вай-Фай' src='./images/Wifi.svg' />
                <img className='header__image' alt='Заряд батареи' src='./images/Battery.svg' />
            </div>
        </div>
    );
}

export default Header;
