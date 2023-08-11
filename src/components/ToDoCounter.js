import React from 'react';

function ToDoCounter(props){
    return(
        <>
            <span>{props.left} items left</span>
        </>
    );
}

export { ToDoCounter };
