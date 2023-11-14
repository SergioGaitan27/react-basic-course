import "./TodoItem.css"

function TodoItem({text, completed, onCheck, onDelete,}){
    return(
        <li>
            <span className={`completed-btn ${completed && 'completed-btn--check'}`} onClick={onCheck}></span>
            <p className={`todo-text ${completed && 'todo-text--check'}`}>{text}</p>
            <span className={`delate-btn`} onClick={onDelete}></span>
        </li>
    );
}

export {TodoItem};