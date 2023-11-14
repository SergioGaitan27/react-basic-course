import "./TodoSearch.css"

function TodoSearch({searchTodo, setSearchTodo}){
    return(
        <div className="search-container">
            <input type="text" placeholder="Buscar tarea" value={searchTodo} onChange={(event) => {
                setSearchTodo(event.target.value);
            }}/>
        </div>
    );
}

export {TodoSearch};