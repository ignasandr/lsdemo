import React, { Component } from 'react';

type NoticeProps = {
    msg: string
}

export class Notice extends Component<NoticeProps> {
    static defaultProps = {
        msg: 'Ką hakeriai?'
    }

render() {
        return  <div className="Notice">
                    <p>{ this.props.msg }</p>
                </div>
    }
}