import React, { AnchorHTMLAttributes } from "react";

interface notificationProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
    info: string;
};


const Notification: React.FC<notificationProps> = ({
    title,
    info,
}) => {

    return (
        <div className='flex flex-col bg-white mx-[16px] px-[16px] py-[12px] rounded-[16px] mb-[9px]'>
            <p className='text-[14px] font-semibold leading-normal'>{title}</p>
            <p className="text-[12px] font-medium leading-normal text-blue-dark">{info}</p>
        </div>
    )
}


export default Notification;
