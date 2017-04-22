import React from  'react';

export default class AddItem extends React.Component{
   constructor(props) {
     super(props)
     this.state = {todo: this.props.todo}
     this.addTodo = this.props.addItem;
     this.addTodo = this.addTodo.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleSubmit(event) {
     event.preventDefault();
     console.log(this.refs.newItem.value)
     this.addTodo(this.refs.newItem.value)
   }
   render() {
     return (
       <div>
        <form onSubmit={this.handleSubmit}>
         <input type='text' ref={'newItem'} />
         <input type="submit" value='hit me' />
      </form>
    </div>
   )
   }
}
