import React from 'react';

type Temp = {
    celsius: number;
}

function BoilingVerdict(props: Temp) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

export default BoilingVerdict;