import React from 'react';

type MailProps = {
    unreadMessages: Array<string>;
}

function Mailbox(props: MailProps) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h3>Hello!</h3>
            {unreadMessages.length > 0 && 
                <p>
                    You have {unreadMessages.length} unread messages.
                </p>
            }
        </div>
    );
}

export default Mailbox;