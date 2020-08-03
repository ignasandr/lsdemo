import React from 'react';

type BorderProps = {
    children: React.ReactNode;
    color: 'red' | 'green' | 'blue';
}

export default function FancyBorder(props: BorderProps) {
    return (
        <div className={"FancyBorder FancyBorder-" + props.color}>
            {props.children}
        </div>
    )
}