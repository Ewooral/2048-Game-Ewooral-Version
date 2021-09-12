import React from 'react';
import ReactDom from 'react-dom';
import BoardView from './components/Board';
import  './styles.scss';
import  './main.scss';



const App = () => {
    return <BoardView />
}

ReactDom.render(<App />, document.getElementById("root"));