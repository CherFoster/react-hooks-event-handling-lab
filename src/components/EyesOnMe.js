// Code EyesOnMe Component Here
import React from 'react';

function handleBlur(){
    console.log('Hey! Eyes on me!')
};

function handleFocus(){
    console.log('Good!')
};

function EyesOnMe(){
    return(
        <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me</button>      
    )
}

export default EyesOnMe;