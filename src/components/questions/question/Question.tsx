import { Link } from 'react-router-dom';
import React, { AnchorHTMLAttributes } from "react";

interface questionProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
    link: string;
};


const Question: React.FC<questionProps> = ({
    title,
    link,
}) => {

    return (
        <>
            <Link to={link} className='bg-white rounded-[16px] py-[9px] px-[16px] flex flex-row mb-[8px]'>
                <div className='flex flex-row justify-between w-[100%]'>
                    <p className='text-[16px] font-medium leading-normal self-center'>{title}</p>
                    <img className="h-[30px] w-[30px] self-end" alt='Стрелка' src='./images/icons/chevron-small-right.svg' />
                </div>
            </Link>
        </>
    )
}

export default Question;
