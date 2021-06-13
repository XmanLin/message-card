import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MessageCard from './component/index';
import './index.less'

const App = () => {
    return (
        <div className="container">
            <MessageCard
                title="卡片一"
                content="这里是内容"
            />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));