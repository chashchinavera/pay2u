import React, { AnchorHTMLAttributes } from "react";

interface answerProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    question: string;
    answer: string;
    id: string;
};


const Answer: React.FC<answerProps> = ({
    question,
    answer,
    id,
}) => {

    return (
        <div id={id} className="rounded-[30px] bg-white min-h-[719px] px-[16px] pt-[24px]">
            <p className='text-[16px] font-bold leading-normal text-[rgba(29, 39, 73, 0.60)] mb-[6px]'>{question}</p>
            <p className='text-[14px] font-normal leading-normal text-[rgba(29, 39, 73, 0.60)]'>{answer}</p>
        </div>
    )
}

export default Answer;
