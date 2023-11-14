import React from 'react';
import { TodoTittle } from './TodoTittle';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import './App.css';

const TodoListItems = [
  {text: "Tarea1",completed: false},
  {text: "Tarea2",completed: false},
  {text: "Tarea3",completed: false},
  {text: "Tarea4",completed: false},
  {text: "Tarea5",completed: false},
  {text: "Tarea6",completed: false},
]

function App() {

  let parseTodos;

  if(!localStorage.getItem('TODOS_V1')){
    const localList = JSON.stringify(TodoListItems);
    localStorage.setItem('TODOS_V1', localList);
    const getLocalList = localStorage.getItem('TODOS_V1');
    parseTodos = JSON.parse(getLocalList);
  }else{
    const getLocalList = localStorage.getItem('TODOS_V1');
    parseTodos = JSON.parse(getLocalList);
  }

  const saveTodos = (newCompleted) => {
    const localList = JSON.stringify(newCompleted);
    localStorage.setItem('TODOS_V1', localList);
    const getLocalList = localStorage.getItem('TODOS_V1');
    parseTodos = JSON.parse(getLocalList);
    setCompleted(parseTodos);
  }

    const [searchTodo, setSearchTodo] = React.useState('');
    const [completed, setCompleted] = React.useState(parseTodos);

    const completedTodos = completed.filter(todo => !todo.completed).length;
    const totalTodos = completed.length;

    const conincidentTodo = completed.filter(
      (todo) => {
        const searchText = searchTodo.toLowerCase();
        const todoText = todo.text.toLowerCase();

        return todoText.includes(searchText);
      }
    );

    const checkTodo = (text) => {
      const newCompleted = [...completed];
      const indexTodoCompleted = newCompleted.findIndex(
        (completed) => completed.text === text 
      );
      newCompleted[indexTodoCompleted].completed = 'true';
      saveTodos(newCompleted);
      console.log('Soy el check');
      }

    const deleteTodo = (text) => {
      const newCompleted = [...completed];
      const indexTodoCompleted = newCompleted.findIndex(
        (completed) => completed.text === text
      );
      newCompleted.splice(indexTodoCompleted, 1);
      saveTodos(newCompleted);
      console.log('Soy el delete');
    }

    return (
      <React.Fragment>
          <TodoTittle
          completedTodos = {completedTodos}
          totalTodos = {totalTodos}
          />
          <TodoSearch 
            searchTodo = {searchTodo}
            setSearchTodo = {setSearchTodo}
          />
          <TodoList>
            {conincidentTodo.map(todo => (
              <TodoItem
                text = {todo.text}
                key = {todo.text}
                completed = {todo.completed}
                onCheck = {() => checkTodo(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
    
          <TodoButton/>
      </React.Fragment>
    );
  }

export default App;
