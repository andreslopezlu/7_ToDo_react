function FilterToDo(){
	return(
		<div className="filters">
			<button className="filter-all">All</button>
			<button className="filter-active">Active</button>
			<button className="filter-completed">Completed</button>
		</div>
	);
}

export {FilterToDo}