import React from 'react';
import "./Recommend.css";
import Buttons from "../components/Buttons";

function Recommend({handleButtonChange}){
    return(
        <>
            <div className='recommend-all'>
                <h2 className='recommend-title'>Recommended</h2>
                <div className='recommend-flex'>
                    
                    <Buttons
                        handleButtonChange={handleButtonChange}
                        value=""
                        title="All Products"
                    />
                    <Buttons
                        handleButtonChange={handleButtonChange}
                        value="Nike"
                        title="Nike"
                    />
                    <Buttons
                        handleButtonChange={handleButtonChange}
                        value="Adidas"
                        title="Adidas"
                    />
                    <Buttons
                        handleButtonChange={handleButtonChange}
                        value="Puma"
                        title="Puma"
                    />
                    <Buttons
                        handleButtonChange={handleButtonChange}
                        value="Vans"
                        title="Vans"
                    />
                </div>
            </div>
        </>
    )
}

export default Recommend;