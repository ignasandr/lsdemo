import React, { MouseEvent } from 'react';

type toggleProps = {
    isToggleOn: boolean;
}

function Lasers(props: toggleProps) {
    function handleClick(event: MouseEvent) {
        event.preventDefault();
        if (props.isToggleOn === true) {
            alert('The button was clicked. ' + event.currentTarget.textContent);
        }
    }
    return (
        <button onClick={handleClick}>
            Activate Lasers
        </button>
    );
}

export default Lasers;