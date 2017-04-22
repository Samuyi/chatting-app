import React from  'react';

import AddItem from './addItem';
import * as todoActions from '../actions/todoAction';
import todoStore from '../store/todoStore';
import TodoComponent from './todoComponent';

export default class Todo extends React.Component{
  constructor() {
    super()
    this.state = {
      todos: todoStore.getAll(),
      value: "",
    }
    this.addTodoHandler = this.addTodoHandler.bind(this);
  }

  addTodoHandler(value) {
    if (!value) {return }
    todoActions.createTodoAction(value);
  }

  componentWillMount() {
    todoStore.on('change', () => {
      this.setState({
        todos: todoStore.getAll(),
      })
      console.log('count is ', todoStore.listenerCount("change"))
    })
  }

  render() {
    let todos = this.state.todos;
     todos = todos.map((item) => {
       return <TodoComponent key = {item.id} item = {item.todo} />
     })
    return (
     <div>
     {todos}
      <AddItem todo = {this.state.value} addItem={this.addTodoHandler} />
     </div>
    )
  }

}
