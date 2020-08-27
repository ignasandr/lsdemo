import React, { useState } from 'react';

function Counter2() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Bob');

    return (
        <div>
            <p>You clicked {count} time, {name}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <input type="text" onChange={event => setName(event.target.value)}/>
        </div>
    );
}

export default Counter2;