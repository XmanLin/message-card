import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MessageCard from './component/index';
import './index.less'

const App = () => {
    return (
        <div className="container">
            <MessageCard/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));