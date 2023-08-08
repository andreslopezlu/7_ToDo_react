function ToDoList(props){
    return(
        <div className="list">
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export {ToDoList};