import React, { Component } from "react";
import Greeting from "./Greeting";
import { LoginButton, LogoutButton } from "./LogButtons";

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

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        // let button;
        // if (isLoggedIn) {
        //     button = <LogoutButton onClick={this.handleLogoutClick}/>;
        // } else {
        //     button = <LoginButton onClick={this.handleLoginClick}/>;
        // }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {/* {button} */}
                {isLoggedIn 
                    ? <LogoutButton onClick={this.handleLogoutClick} />
                    : <LoginButton onClick={this.handleLoginClick} />
                }
                <p>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</p>
            </div>
        )
    }
}

export default Login; 