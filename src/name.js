import React, {useState, useEffect} from 'react';

function Name(props) {
    return (
        <>
            <li className={props.name=='Jack' ? 'text-red-500': 'text-white'}>{props.name}</li>
        </>
    );
}

export default Name;