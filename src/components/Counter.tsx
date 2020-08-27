import React, { FunctionComponent, useState, useEffect } from 'react';

type WarningProp = {
    clicks: number;
}

function WarningBanner(props: WarningProp) {
    if (props.clicks < 5) {
        return null;
    }

    return (
            <p style={{color: "red"}}>Warning</p>
    )
}

export const Counter:FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
    const [clicks, setClicks] = useState(initial);

    const [name, setName] = useState('fren');
    useEffect(() => {
        document.title = `Hello ${name}`;
    }, [name]);
    return <>
        <div>
            <p>Click: {clicks} </p>
            <button onClick={() => setClicks(clicks + 1)}>+</button>
            <button onClick={() => setClicks(clicks - 1)}>-</button>
            <WarningBanner clicks={clicks} />
        </div>
    </> 
}