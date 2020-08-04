import React, { Component } from 'react';
import SplitPane from './SplitPane';
import NumberList from './NumberList';

type NameFormState = {
    value: string;
}

class NameForm extends Component<{}, NameFormState> {
    constructor(props: {}) {
        super(props);
        this.state = {value: 'Please write an essay about your favorite DOM element.'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        alert('Text submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Text:
                        <textarea value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <SplitPane left={<NumberList numbers={[1,2,3]} />} right={<NumberList numbers={[6, 5, 4, 3, 2, 1]} />} />
            </div>
        );
    }
}

export default NameForm;