import React, { Component, ChangeEvent } from 'react';
import FancyBorder from './FancyBorder';

type DialogProps = {
    title: string,
    message: string,
    children: React.ReactNode
}

type SignUpState = {
    login: string;
}

function Dialog(props: DialogProps) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}

export default class SignUpDialog extends Component<{}, SignUpState> {
    constructor(props: {}) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program"
                    message="How should we refer to you?">
                <input value={this.state.login}
                       onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                        Sign Me Up!
                </button>
            </Dialog>
        )
    }

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({login: event.target.value});
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}`);
    }
}