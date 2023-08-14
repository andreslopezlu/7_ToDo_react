import { ToDoItem } from '../components/ToDoItem';

function ToDoList(props){

  const defaultToDoS = [
    {text: '(^t^)'},
    {text: 'ToDo'},
    {text: 'ToDo'},
    {text: 'ToDo'}
  ]

  const renderTodos = () => 
    defaultToDoS.map((todo, index) => {
      return(
        <ToDoItem
          key={index}
          text={todo.text} 
          index={index}
        />
      )
    })

  return(
    <div className="list">
      {renderTodos()}
    </div>
  );
}

export {ToDoList};