import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState =[
]

const init = () =>{
    return JSON.parse(localStorage.getItem('data')) || []
}


export const useTodo = () => {

    const [todo, dispatch] = useReducer(todoReducer, initialState, init);
   
    useEffect( ()=>{
        localStorage.setItem('data', JSON.stringify( todo ));
    },[todo])

    const handleNewTodo = (argumento)=>{
        const action={
            type: 'Add Todo',
            payload: argumento
        }

        dispatch( action )
    };
    const handleDeleTodo = (id) =>{
        
        const action={
            type: 'Remove Todo',
            payload: id
        }

        dispatch( action )
    };

    const handleToggle = (id) =>{
        const action={
            type: 'Toggle Todo',
            payload: id
        }

        dispatch( action )
    }

  return {
    todo,
    todoCounter: todo.length,
    pendingcounter:todo.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleTodo,
    handleToggle
  }
}


