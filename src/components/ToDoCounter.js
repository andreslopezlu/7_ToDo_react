import React from 'react';

function ToDoCounter(props){
  return(
    <div className='counter'>
      <span>{props.left} items left</span>
    </div>
  );
}

export { ToDoCounter };
