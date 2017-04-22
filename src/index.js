import React from  'react';
import ReactDOM from 'react-dom';

import Todo from './components/todo'


class App extends React.Component{
    constructor(){
      super()
    }
    render() {
      return(
        <div>
        <Todo />
        </div>
      )
    }
}

const app = document.getElementById('app');

ReactDOM.render(<App/>, app);
