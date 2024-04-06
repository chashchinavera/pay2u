import { Link } from 'react-router-dom';
import Header from "../header/Header";

function Bank() {
    return (
        <div className="bg-grey-background ">
            <Header
                theme={{ white: true }}
            />
            <div className="flex flex-row justify-between pt-[11px] pb-[5px]">
                <div className="flex flex-row">
                    <img className='pl-[15px]' alt='Иконка банка' src='./images/icons/ubrr.svg' />
                    <div className="flex flex-row">
                        <p className="text-[17px] leading-[20px] font-semibold pl-[7px] pt-[7px]">Сергей</p>
                        <img alt='Стрелка' src='./images/icons/chevron-small-right.svg' />
                    </div>
                </div>
                <img className='pr-[18px] pt-[2px]' alt='Стрелка' src='./images/icons/Notifications.svg' />
            </div>

            <div className="flex flex-row px-[16px] my-[17px]">
                <div className="bg-white bg-bankImage bg-no-repeat bg-right bg-contain min-w-[215px] mr-[8px] rounded-[12px] p-[12px]">
                    <p className="text-[13px] leading-[16px]">Ваш кешбэк</p>
                    <p className="text-[17px] leading-[20px] font-bold mt-[3px] mb-[12px] pl-[2px]">352 ₽</p>
                    <button className="flex flex-row text-[10px] leading-[13px] bg-grey-background min-w-[87px] py-[6px] justify-center rounded-[6px]">Подробнее <img className="w-[12px] h-[12px]" alt='Стрелка' src='./images/icons/chevron-small-right.svg' />
                    </button>
                </div>
                <div className="flex flex-col bg-creditCard bg-no-repeat bg-right bg-contain bg-gradient-second rounded-[12px] px-[12px] py-[8px] justify-between">
                    <p className="text-[11px] leading-[13px] text-white">Кредитная карта</p>
                    <p className="text-[13px] leading-[16px] font-medium text-white">до 300 тыс ₽</p>
                </div>
            </div>

            <div className="mx-[16px] mb-[10px]">
                <div className="flex flex-row mb-[10px]">
                    <p className="text-[21px] leading-[24px] font-bold mt-[5px]">Счета и карты</p>
                    <img className="" alt='Стрелка' src='./images/icons/chevron-small-up.svg' />
                </div>
                <div className="rounded-t-[12px] bg-white flex flex-row pt-[16px] pb-[15px] justify-between px-[16px] mb-[1px]">
                    <img alt='Карта' src='./images/icons/logo.png' />
                    <div className="flex flex-col">
                        <p className="min-w-[183px] text-[17px] leading-[20px] font-bold mt-[2px]">437 092.10 ₽</p>
                        <p className="min-w-[183px] flex flex-row text-[13px] leading-[16px] font-normal"><img className="mt-[2px] mr-[3px]" alt='Главная' src='./images/icons/main-account.svg' />Зарплатный счёт</p>
                    </div>
                    <img className="" alt='Стрелка' src='./images/icons/chevron-down.svg' />
                </div>
                <div className="rounded-b-[12px] bg-white flex flex-row pt-[16px] pb-[15px] justify-between px-[16px]">
                    <img alt='Карта' src='./images/icons/my-freedom.png' />
                    <div className="flex flex-col">
                        <p className="min-w-[183px] text-[17px] leading-[20px] font-bold mt-[2px]">58 000.00 ₽</p>
                        <p className="min-w-[183px] text-[13px] leading-[16px] font-normal">Счёт кредитной карты</p>
                    </div>
                    <img className="" alt='Стрелка' src='./images/icons/chevron-down.svg' />
                </div>
            </div>

            <div className="mx-[16px] mb-[10px]">
                <div className="flex flex-row pt-[6px] mb-[10px]">
                    <p className="text-[21px] leading-[24px] font-bold mt-[5px]">Оформление продуктов</p>
                    <img className="" alt='Стрелка' src='./images/icons/chevron-small-up.svg' />
                </div>

                <div className="flex flex-row gap-[8px]">
                    <div className="flex flex-col justify-between min-h-[128px] min-w-[109px] bg-white rounded-[12px] p-[12px]">
                        <p className="text-[15px] font-medium leading-[18px]">Открыть вклад или счёт</p>
                        <img className="w-[40px] h-[40px] self-end" alt='Депозит' src='./images/icons/deposit.svg' />
                    </div>
                    <div className="flex flex-col justify-between min-h-[128px] min-w-[109px] bg-white rounded-[12px] p-[12px]">
                        <p className="text-[15px] font-medium leading-[18px]">Оформить кредит</p>
                        <img className="w-[40px] h-[40px] self-end" alt='Кредит' src='./images/icons/credit.svg' />
                    </div>
                    <div className="flex flex-col justify-between min-h-[128px] min-w-[109px] bg-white rounded-[12px] p-[12px]">
                        <p className="text-[15px] font-medium leading-[18px]">Оформить кредитнyю карту</p>
                        <img className="w-[40px] h-[40px] self-end" alt='Кредитная карта' src='./images/icons/credit-card.svg' />
                    </div>
                </div>

                <div className="flex flex-row gap-[8px] mt-[8px]">
                    <div className="flex flex-col justify-between min-h-[128px] min-w-[167px] bg-white rounded-[12px] p-[12px]">
                        <p className="text-[15px] font-medium leading-[18px]">Инвестировать средства</p>
                        <div className="flex flex-row">
                            <p className="text-[13px] font-normal leading-[16px] text-[#A7B1BA]">Готовые решения</p>
                            <img className="w-[40px] h-[40px]" alt='Карта' src='./images/icons/investments.svg' />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between min-h-[128px] min-w-[167px] bg-white rounded-[12px] p-[12px]">
                        <p className="text-[15px] font-medium leading-[18px]">Оформить дебетовую карту</p>
                        <div className="flex flex-row">
                            <p className="text-[13px] font-normal leading-[16px] text-[#A7B1BA]">Кешбэк 6% рублями</p>
                            <img className="w-[40px] h-[40px]" alt='Карта' src='./images/icons/debit-card.svg' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-[16px]">
                <div className="flex flex-row pt-[6px] mb-[10px]">
                    <p className="text-[21px] leading-[24px] font-bold mt-[5px]">Предложения партнеров</p>
                    <img className="" alt='Стрелка' src='./images/icons/chevron-small-up.svg' />
                </div>
                <div className="bg-white rounded-[12px] px-[16px] py-[12px] bg-follow bg-right-bottom bg-no-repeat">
                    <p className="text-[15px] font-medium leading-[18px] mt-[3px]">Мои подписки</p>
                    <p className="text-[13px] font-normal leading-[16px] mt-[3px] max-w-[203px]">Управление подписками, контроль списаний, кэшбэк
                        с автоплатежей</p>
                    <Link to='/onboarding_1' className="flex flex-row text-[13px] text-[#EA417F] font-normal leading-[16px] mt-[23px]"><img className="mr-[8px]" alt='Стрелка' src='./images/icons/continue.svg' />Подробнее
                    </Link>
                </div>
            </div>

            <div className='flex flex-row justify-between pt-[25px]'>
                <div className='min-w-[75px] flex flex-col justify-center pt-[10px]'>
                    <img className="w-[32px] h-[32px] self-center" alt='Главная' src='./images/icons/main.svg' />
                    <p className='text-[10px] text-center font-medium'>Главная</p>
                </div>

                <div className='min-w-[75px] flex flex-col justify-center pt-[10px]'>
                    <img className="w-[32px] h-[32px] self-center" alt='История' src='./images/icons/history.svg' />
                    <p className='text-[10px] text-[#A7B1BA] text-center font-medium'>История</p>
                </div>

                <div className='min-w-[75px] flex flex-col justify-center'>
                    <img className="w-[50px] h-[50px] self-center" alt='Платежи' src='./images/icons/button.svg' />
                    <p className='text-[10px] text-[#A7B1BA] text-center font-medium'>Платежи</p>
                </div>

                <div className='min-w-[75px] flex flex-col justify-center pt-[10px]'>
                    <img className="w-[32px] h-[32px] self-center" alt='Чат' src='./images/icons/chat.svg' />
                    <p className='text-[10px] text-[#A7B1BA] text-center font-medium'>Чат</p>
                </div>

                <div className='min-w-[75px] flex flex-col justify-center pt-[10px]'>
                    <img className="w-[32px] h-[32px] self-center" alt='Ещё' src='./images/icons/more.svg' />
                    <p className='text-[10px] text-[#A7B1BA] text-center font-medium'>Ещё</p>
                </div>
            </div>

        </div>
    )
}

export default Bank;
