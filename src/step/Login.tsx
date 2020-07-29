import React, { Component, MouseEvent } from "react";
import Greeting from "./Greeting";
import { LoginButton, LogoutButton } from "./LogButtons";

type LoginProps = {
    onClick: Function;
}

type LoginState = {
    isLoggedIn: boolean;
}

class Login extends Component<{}, LoginState> {
    constructor(props: {}) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false }

    }

    handleLoginClick(event: MouseEvent) {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton />;
        } else {
            button = <LoginButton />;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

export default Login; 