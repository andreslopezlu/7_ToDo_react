function CreateToDoButton(){
  return(
    <div className="create-todo">
      <button className="checked"></button>
      <input placeholder="Create a new todo..." className="text-todo"/>
    </div>
  );
}

export { CreateToDoButton }
