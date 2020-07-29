import React, { Component, MouseEvent } from 'react';

type ToggleProps = { 
    isToggleOn: boolean,
    toggleUpdate: Function
};

class Toggle extends Component<ToggleProps> {
    
    constructor(props: ToggleProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event: MouseEvent) {
        event.preventDefault();
        this.props.toggleUpdate();
    }

    render() {
        return(
            <button onClick={this.handleClick}>
                {this.props.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default Toggle;