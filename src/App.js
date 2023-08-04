import './App.css';
import { ToDoCounter } from './components/ToDoCounter';
import { ToDoSearch } from './components/ToDoSearch';
import { ToDoList } from './components/ToDoList';
import { ToDoItem } from './components/ToDoItem';
import { CreateToDoButton } from './components/CreateToDoButton';

const defaultToDoS = [
  {text: '(^t^)', completed: true},
  {text: 'ToDo', completed: false},
  {text: 'ToDo', completed: true},
  {text: 'ToDo', completed: false}
]

function App() {
  return (
    // <React.Fragment> permite renderizar toda la app sin un elemento padre adicional, que en este caso es App
    <div className='App'>
      <ToDoCounter completed={10} total={20}/>
      <ToDoSearch />

      <ToDoList>
        {/* aqui el componente ToDoList pasa los props text e index  */}
        {/* React permite renderizar arrays, por lo que renderiza sin problema el retorno del metodo map aplicado sobre defaultToDoS */}
        {defaultToDoS.map((todo, index) => {
          return(
          <ToDoItem 
            key={index} 
            text={todo.text} 
            index={index}
            completed={todo.completed}
          />
            )
        })}
      </ToDoList>

      <CreateToDoButton/>
    </div>
    // </React.Fragment>
    
  );
}

export default App;