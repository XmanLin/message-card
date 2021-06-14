import React  from 'react';
import './index.less';

export interface ICard {
    title: string;
    content?: string;
}

const MessageCard: React.FC<ICard> = (props) => {

    const { title, content } = props;
    
    return (
        <div className="card">
            <div className="title">{title}</div>
            <div className="content">{content}</div>
        </div>
    )
} 

export default MessageCard