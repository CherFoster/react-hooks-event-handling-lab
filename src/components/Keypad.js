// Code Keypad Component Here
import React from 'react';

function handleChange(){
    console.log("Entering password...")
}

function Keypad (){
    return (
        <div>
            <input onChange={handleChange} type='password' name='password ' placeholder='Enter Password:' />
        </div>
    )
}

export default Keypad;