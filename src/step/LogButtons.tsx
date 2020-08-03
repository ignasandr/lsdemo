import React from 'react';

type LoginProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function LoginButton(props: LoginProps) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

export function LogoutButton(props: LoginProps) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
} 