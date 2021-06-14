import * as React from 'react';

interface ICard {
    title: string;
    content: string;
}

declare const MessageCard: React.FC<ICard>

export default MessageCard;