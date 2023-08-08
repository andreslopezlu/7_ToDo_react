import sun from "../assets/todo-app-main/images/icon-sun.svg"
import todo from "../assets/todo-app-main/images/TODO.svg"

function Title(){
    return(
        <div className="title">
            <img alt="todo" src={todo} className="todo-icon"/>
            <img alt="theme" src={sun} className="theme-icon"/>
        </div>
    );
}

export {Title}