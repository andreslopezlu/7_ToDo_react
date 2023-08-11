import { ToDoCounter } from './components/ToDoCounter';
import { ToDoList } from './components/ToDoList';
import { ToDoItem } from './components/ToDoItem';
import { ClearCompletedToDo } from './components/ClearCompletedToDo';
import { Title } from './components/Title';
import { Header } from './components/Header';
import { CreateToDoButton } from './components/CreateToDoButton';
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
    <div>
      <Header className='header'>
        <Title/>
        <CreateToDoButton/>
      </Header>
      <div className='todos'>
        <ToDoList>
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
        <div className='left-todos'>
          <ToDoCounter left={20}/>
          <ClearCompletedToDo/>
        </div>
      </div>
      <div className='filter-todos'>
        <FilterToDo/>
      </div>
      <div className='note'>
        <Note/>
      </div>
    </div>
  );
}

export default App;