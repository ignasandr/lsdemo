import * as React from 'react';

interface ToggleProps {
    ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function Toggle2(props: ToggleProps) {
    return <button onClick={props.ClickHandler}>Toggle</button>
}