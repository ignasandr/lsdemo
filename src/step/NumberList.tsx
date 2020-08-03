import React from 'react';

type ListProps = {
    value: number;
}

type NumberProps = {
    numbers: Array<number>;
}

function ListItem(props: ListProps) {
    return <li>{props.value}</li>;
}

function NumberList (props: NumberProps) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default NumberList;