import { useState } from 'react';
import { getTime } from '../../utils/getTime';

function Header() {
    const [currentTime, setCurrentTime] = useState(getTime());
    
    return (
        <div className="header">
            <span className='header__time'>{currentTime}</span>
            <div>
                <img className='header__image' alt='Качество связи' src='./images/Connection.png' />
                <img className='header__image' alt='Вай-Фай' src='./images/Wifi.png' />
                <img className='header__image' alt='Заряд батареи' src='./images/Battery.png' />
            </div>
        </div>
    );
}

export default Header;
