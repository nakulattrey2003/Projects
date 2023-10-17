import React from 'react';

function Buttons({handleButtonChange, value, title}){
    return(
        <>
            <button
                onClick={handleButtonChange}
                value={value}
                className='btns'
            >
            {title}
            </button>
        </>
    )
}

export default Buttons;