import { Link } from 'react-router-dom';
import React, { AnchorHTMLAttributes } from "react";
import classNames from "classnames";

interface navProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
    help:  string;
    notifications: string;
};


const NavigationTab: React.FC<navProps> = ({
    title,
    className,
    help,
    notifications,
}) => {

    const baseClasses = 'flex flex-row mx-[17px] justify-between';

    const navClasses = classNames(
        baseClasses,
        className,
    );

    return (
        <div className={navClasses}>
            <Link to="/pay2u"><img className='mt-[4px] ml-[1px]' alt='Назад в приложение банка' src='./images/icons/Arrow.svg' /></Link>
            <p className='text-[20px] font-semibold leading-[24px]'>{title}</p>
            <div className="flex flex-row">
                <Link to="/notifications"><img className='mr-[15px]' alt='Уведомления' src={notifications} /></Link>
                <Link to="/help"><img alt='Помощь' src={help} /></Link>
            </div>
        </div>
    )
}

export default NavigationTab;
