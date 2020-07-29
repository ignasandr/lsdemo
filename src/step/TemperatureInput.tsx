import React, { Component, ChangeEvent } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Farenheit'
};

type TempInput = {
    temperature: string;
}

type TempProps = {
    temperature: string,
    onTemperatureChange: Function,
    scale: "c" | "f"
}

class TemperatureInput extends Component<TempProps, TempInput> {
    constructor(props: TempProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: ChangeEvent<HTMLInputElement>) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}

export default TemperatureInput;