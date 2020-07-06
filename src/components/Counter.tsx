import React, { FunctionComponent, useState, useEffect } from 'react';

export const Counter:FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
    const [clicks, setClicks] = useState(initial);

    const [name, setName] = useState('Buba');
    useEffect(() => {
        document.title = `Hello ${name}`;
    }, [name]);
    return <>
        <p>Click: {clicks} </p>
        <button onClick={() => setClicks(clicks + 1)}>+</button>
        <button onClick={() => setClicks(clicks - 1)}>-</button>
    </> 
}