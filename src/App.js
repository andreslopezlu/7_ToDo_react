import { ToDoCounter } from './components/ToDoCounter';
import { ToDoList } from './components/ToDoList';

import { ClearCompletedToDo } from './components/ClearCompletedToDo';
import { Title } from './components/Title';
import { Header } from './components/Header';
import { CreateToDoButton } from './components/CreateToDoButton';
import { FilterToDo } from './components/FilterToDo';
import { Note } from './components/Note';

import './styles/reseter.css'
import './styles/action-buttons.css'
import './styles/app.css'



function App() {
  return (
    <div className='main-container'>
      <Header className='header'>
        <Title/>
        <CreateToDoButton/>
      </Header>
      <ToDoList/>
      <div className='action-buttons'>
        <ToDoCounter left={20}/>
        <ClearCompletedToDo/>
        <FilterToDo/>
      </div>
      <Note/>
    </div>
  );
}

export default App;