import React from 'react';

type PaneProps = {
    left: React.ReactNode,
    right: React.ReactNode
}

export default function SplitPane(props: PaneProps) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}