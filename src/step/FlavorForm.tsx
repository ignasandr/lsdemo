import React, { Component } from 'react';

type FlavorFormState = {
    value: string;
}

class FlavorForm extends Component<{}, FlavorFormState> {
    constructor(props: {}) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        alert('You chose: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick Your Poison:
                    <br />
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FlavorForm;