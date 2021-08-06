import React, {useState, useEffect} from 'react';

function Button(props) {

    console.log('the props received are', props)

    return (
        <>
            <br/>
            <br/>
            <br/>
            <button className={props.color=='red' ? 'pr-6 pl-6 pt-3 pb-3 rounded bg-red-500' : 'pr-6 pl-6 pt-3 pb-3 rounded bg-blue-500'}>{props.txt}</button>
        </>
    );
}

export default Button;