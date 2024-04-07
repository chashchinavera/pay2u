import { SetStateAction, useState, useEffect } from 'react';

function SearchForm() {

    const [request, setRequest] = useState('');

    function handleRequestEdit(evt: { target: { value: SetStateAction<string>; }; }) {
        setRequest(evt.target.value);
    }

    function handleSubmit() {

    }
    
    return (
        <div className="mt-[14px] rounded-[16px] bg-grey-dark">
            <form
                className="px-[8px] py-[12px] rounded-[16px] flex flex-row"
                onSubmit={handleSubmit}
                id='search'>
                <img className='mr-[8px]' alt='Поиск' src='./images/icons/Search.svg' />
                <input
                    className="bg-grey-light w-[100%] text-[14px] leading-[21px] font-normal"
                    type='text'
                    value={request}
                    onChange={handleRequestEdit}
                    placeholder="Найти..."
                    required
                    name='search'
                />
            </form>
        </div>
    )
}

export default SearchForm;
