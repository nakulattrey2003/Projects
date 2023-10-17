import React from 'react';
import "./Colors.css";
import Input from '../../components/Input';

function Colors({handleRadioChange}){
    return(
        <>
            <div className='ml'>
                <h2 className='sidebar-title colors-title'>Colors</h2>
                
                <label className='sidebar-label-container'>
                    <input 
                        type="radio"
                        onChange={handleRadioChange}
                        value=""
                        name="test1"
                    />
                    <span className='checkmark all-color'/>
                    All
                </label>

                
                <Input 
                    handleRadioChange={handleRadioChange}
                    value="black"
                    title="Black"
                    name="test1"
                    color="black"
                />
                <Input 
                    handleRadioChange={handleRadioChange}
                    value="blue"
                    title="Blue"
                    name="test1"
                    color="blue"
                />
                <Input 
                    handleRadioChange={handleRadioChange}
                    value="red"
                    title="Red"
                    name="test1"
                    color="red"
                />
                <Input 
                    handleRadioChange={handleRadioChange}
                    value="green"
                    title="Green"
                    name="test1"
                    color="green"
                />
                <Input 
                    handleRadioChange={handleRadioChange}
                    value="white"
                    title="White"
                    name="test1"
                    color="alabaster"
                />
            </div>
        </>
    );
}

export default Colors;