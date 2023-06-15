import { useRef } from "react";
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{onAddTodo: (text: string)=> void}> = (props) =>{

const todoTextInputRef = useRef<HTMLInputElement>(null);

const submitHandler = (event: React.FormEvent)=>{
    event.preventDefault();
    // IDE adds ? after current because it's doesn't know what kind of value will be set, we can change it to ! if we are 100% sure that this value wouldn't be null
    const enteredText = todoTextInputRef.current!.value;
    if(enteredText.trim().length === 0){
        // throw an error
        return;
    }
    props.onAddTodo(enteredText);
};
return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo text</label>
        <input id="text" type="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>    
)


};

export default NewTodo;