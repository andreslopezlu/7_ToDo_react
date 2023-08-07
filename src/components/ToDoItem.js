function ToDoItem(props){
    return(
    // aqui el componente ToDoItem recibe los props text e index 
    <li>
        <span>V, completed: {props.completed ? 'Yeah' : 'Nop'}</span>
        <p>{props.text}: {props.index}</p>
        <span>X</span>
    </li>
    );
}

export {ToDoItem}