import React from 'react';
import "./Category.css";
import Input from "../../components/Input.js";

function Category({handleRadioChange}){
    return(
        <>
            <h2 className='sidebar-title'>Category</h2>
            <div>
                <label className='sidebar-label-container'>
                    <input 
                        type="radio"
                        onChange={handleRadioChange}
                        value=""
                        name="test"
                    />
                    <span className='checkmark' />
                    All
                </label>

                <Input
                    handleRadioChange={handleRadioChange}
                    value="sneakers"
                    title="Sneakers"
                    name="test"
                />
                <Input
                    handleRadioChange={handleRadioChange}
                    value="flats"
                    title="Flats"
                    name="test"
                />
                <Input
                    handleRadioChange={handleRadioChange}
                    value="Slip-Ons"
                    title="Slip-Ons"
                    name="test"
                />
                <Input
                    handleRadioChange={handleRadioChange}
                    value="heels"
                    title="Heels"
                    name="test"
                />
            </div>
        </>
    )
}

export default Category;