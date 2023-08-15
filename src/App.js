import { ToDoCounter } from './components/ToDoCounter';
import { ToDoList } from './components/ToDoList';

import { ClearCompletedToDo } from './components/ClearCompletedToDo';
import { Title } from './components/Title';
import { Header } from './components/Header';
import { CreateToDoButton } from './components/CreateToDoButton';
import { FilterToDo } from './components/FilterToDo';
import { Note } from './components/Note';

import './styles/reseter.css'
import './styles/root.css'
import './styles/main-content.css'
import './styles/header.css'
import './styles/title.css'
import './styles/create-todo-button.css'
import './styles/todo-list.css'
import './styles/todo-item.css'
import './styles/note.css'

import './styles/action-buttons.css'
import './styles/app.css'



function App() {
  return (
    <>
      <Header/>
      <div className='main-content'>
        <Title/>
        <CreateToDoButton/>
        <ToDoList/>
        <div className='action-buttons'>
          <ToDoCounter left={20}/>
          <ClearCompletedToDo/>
          <FilterToDo/>
        </div>
        <Note/>
      </div>
    </>
  );
}

export default App;