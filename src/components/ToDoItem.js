function ToDoItem(props){
    return(
        <div className="existing-todo">
            <button className="check-todo"></button>
            <p className="todo">{props.text}</p>
            <button className="delete-todo">X</button>
        </div>
    );
}

export {ToDoItem}