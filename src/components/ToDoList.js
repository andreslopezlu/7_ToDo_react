function ToDoList(props){
    return(
        <div>
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export {ToDoList};