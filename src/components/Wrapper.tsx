import React, { Component } from 'react';

export class Wrapper extends Component {
    render() {
        return <div className="Wrapper">
            { this.props.children }
        </div>
    }
}