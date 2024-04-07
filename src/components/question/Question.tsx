import { Link } from 'react-router-dom';

function Question() {
    return (
        <>
            <Link to={"/question_1"} className='bg-white rounded-[16px] py-[9px] px-[16px] flex flex-row mb-[8px]'>
                <div className='flex flex-row justify-between w-[100%]'>
                    <p className='text-[16px] font-medium leading-normal self-center'>Условия подписки</p>
                    <img className="h-[30px] w-[30px] self-end" alt='Стрелка' src='./images/icons/chevron-small-right.svg' />
                </div>
            </Link>
        </>
    )
}

export default Question;
