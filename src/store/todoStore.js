import EventEmitter from 'events';

import dispatcher from '../dispatcher'

class TodoStore extends EventEmitter {
 constructor() {
   super()
   this.store = [
       {
       id: 1234,
       todo: 'Take a shower',
     },
     {
       id: 2345,
       todo: 'Go sky diving',
     },
     {
       id: 456788,
       todo: 'Read a book',
     }
     ]
 }
 createTodo(todo){
   const id = Date.now();
   this.store.push({
     id,
     todo
   });
   this.emit('change');
 }
  getAll(){
    return this.store
  }
  handleAction(action) {
   switch (action.type) {
     case 'CREATE_TODO':
       return this.createTodo(action.todo);
     default:
       return;
   }
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore))
window.dispatcher = dispatcher;

export default todoStore;
