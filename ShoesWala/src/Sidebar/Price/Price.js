import React from 'react';
import "./Price.css";
import Input from '../../components/Input';

function Price({handleRadioChange}){
    return(
        <>
            <div className='ml'>
                <h2 className='sidebar-title price-title'>Price</h2>

                <label className='sidebar-label-container'>
                    <input 
                        type="radio"
                        onChange={handleRadioChange}
                        value=""
                        name="test2"
                    />
                    <span className='checkmark' />
                    All
                </label>

                <Input 
                    handleRadioChange={handleRadioChange}
                    value={40}
                    title="$0-$50"
                    name="test2"
                />
                <Input 
                    handleRadioChange={handleRadioChange}
                    value={70}
                    title="$50-$100"
                    name="test2"
                />
                <Input 
                    handleRadioChange={handleRadioChange}
                    value={110}
                    title="$100-$150"
                    name="test2"
                />
                <Input 
                    handleRadioChange={handleRadioChange}
                    value={170}
                    title="Over $150"
                    name="test2"
                />
            </div>
        </>
    )
}

export default Price;