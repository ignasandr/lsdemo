import React, { MouseEvent } from 'react';

function Lasers() {
    function handleClick(event: MouseEvent) {
        event.preventDefault();
        alert('The button was clicked. ' + event.currentTarget.textContent);
    }
    return (
        <button onClick={handleClick}>
            Activate Lasers
        </button>
    );
}

export default Lasers;