import Todo from '../models/todo';

// add React.FC (functional component), in curly brackets we can define our own props, its generic type (we add our props to default props - children)
const Todos: React.FC<{items: Todo[]}>=(props)=>{
    return (
        <ul>
            {props.items.map(item=> <li key={item.id}>{item.text}</li>)}
        </ul>
    );
}

export default Todos;