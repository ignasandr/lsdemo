import React, { MouseEvent } from 'react';

type LoginProps = {
    Click: Function;
}

function AlertOnClick(event: MouseEvent) {
   alert("yo yo yo");
}

export function LoginButton(props: LoginProps) {
    return (
        <button onClick={props.Click}>
            Login
        </button>
    );
}

export function LogoutButton(props: LoginProps) {
    return (
        <button onClick={AlertOnClick}>
            Logout
        </button>
    );
} 