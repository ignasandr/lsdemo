import React, { Component } from 'react';

type WrapperProps = {
    children: React.ReactNode; 
}

export class Wrapper extends Component<WrapperProps> {
    render() {
        return <div className="Wrapper">
            { this.props.children }
        </div>
    }
}