import { ToDoCounter } from './components/ToDoCounter';
import { ToDoList } from './components/ToDoList';
import { ToDoItem } from './components/ToDoItem';
import { ClearCompletedToDo } from './components/ClearCompletedToDo';
import { Title } from './components/Title';
import { Header } from './components/Header';
import { CreateToDo } from './components/CreateToDo';
import { FilterToDo } from './components/FilterToDo';
import { Note } from './components/Note';

import './styles/reseter.css'
import './styles/app.css'

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
      <Header className='header'>
        <Title/>
        <CreateToDo/>
      </Header>
      <div>
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
        <div>
          <ToDoCounter left={20}/>
          <ClearCompletedToDo/>
        </div>
      </div>
      <div>
        <FilterToDo/>
      </div>
      <div>
        <Note/>
      </div>
    </div>
  );
}

export default App;