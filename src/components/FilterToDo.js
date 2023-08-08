function FilterToDo(){
    return(
        <>
            <button className="filter-all">All</button>
            <button className="filter-active">Active</button>
            <button className="filter-completed">Completed</button>
        </>
    );
}

export {FilterToDo}