import React, { AnchorHTMLAttributes } from "react";

interface subsProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    name: string,
};

const Subs: React.FC<subsProps> = ({
    name,
}) => {


    return (
        <div className="rounded-t-[30px] bg-white py-[22px] px-[16px]">
            <div className="bg-line py-[13px] px-[8px] rounded-[16px] bg-cover bg-no-repeat flex flex-row justify-between">
                <div className="flex flex-row">
                    <img className='w-[40px] h-[40px] rounded-[50px]' alt='Добавить' src='./images/logos/LitRes.png' />
                    <div className="pl-[10px]">
                        <p className="text-[14px] leading-normal text-blue-dark font-semibold">ЛитРес</p>
                        <p className="text-[12px] leading-normal text-blue-dark font-semibold pt-[1px]">Можно перенести подписку</p>
                    </div>
                </div>
                <img className='w-[32px] h-[32px] pt-[5px] ' alt='Добавить' src='./images/icons/Add.svg' />
            </div>
        </div>
    )
}

export default Subs;
