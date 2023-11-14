function TodoTittle({completedTodos, totalTodos}){
    return(
        <h1>Tienes {completedTodos} de {totalTodos} actividades pendientes</h1>
    );
}

export {TodoTittle};