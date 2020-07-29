import React, { Component } from 'react';
import { Wrapper } from '../components/Wrapper';
import Lasers from './Lasers';
import Toggle from './Toggle';

type MyState = { isToggleOn: boolean };

class Bcentral extends Component<{}, MyState> {
    constructor(props: {}) {
        super(props);
        this.state = {isToggleOn: true};

        this.setToggle = this.setToggle.bind(this);
    }

    setToggle() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        })); 
    }

    render() {
        return (
            <div>
               <Wrapper>
                   <Lasers isToggleOn={this.state.isToggleOn}/>
                   <Toggle
                        isToggleOn={this.state.isToggleOn} 
                        toggleUpdate={this.setToggle}/>
               </Wrapper>
            </div>
        )
    }
}

export default Bcentral;