import React  from 'react';
import './index.less';

interface ICard {
    title: string;
    content: string;
}

const MessageCard = (props: ICard) => {

    const { title, content } = props;
    
    return (
        <div className="card">
            <div className="title">{title}</div>
            <div className="content">{content}</div>
        </div>
    )
} 

export default MessageCard