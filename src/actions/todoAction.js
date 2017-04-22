import dispatcher from '../dispatcher';

export function createTodoAction(todo){
   dispatcher.dispatch({
    type: "CREATE_TODO",
    todo,
  })
}

export function DeleteTodoAction(id){
  return dispatcher.dispatch({
    type: "DELELTE_TODO",
    id,
  })
}
