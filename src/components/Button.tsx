import React, { Component, MouseEvent } from 'react';

export class Button extends Component {
    handleClick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        alert(event.currentTarget.tagName);
    }

    render() {
        return <button className="Button" onClick={ this.handleClick }>
            { this.props.children }
        </button>
    }
}

// Events supported are: AnimationEvent, ChangeEvent, ClipboardEvent, CompositionEvent, DragEvent, FocusEvent, FormEvent, KeyboardEvent, MouseEvent, PointerEvent, TouchEvent, TransitionEvent, WheelEvent. As well as SyntheticEvent, for all other events.