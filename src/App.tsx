import React,{useEffect, useState} from 'react';
import './App.scss';
import InputField from './components/InputField.tsx/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList/TodoList';

//variables
// const name:string = "Michel";
// const age: number = 20;
// const hobbies: string[] = ["Web developer", "Graphic Designer"];
// let role : [string, number];
// role= ["dsc",2]

// const person : Person = {
//   name: "John",
//   age: 21,
//   isAlive:true
// };

//Types:
// type Person = {
//   name: string,
//   age: number,
//   isAlive?:boolean;
// };
// let personArray: Person[]= [];
// console.log(personArray);
// let age: number |string;
// age = 10 
// console.log(age);

//functions:
// let printName: (name: string) => void;
// let printAge: unknown;
// let printPerson: (name: string) => never;

//Difference bettween types and interfaces:
// type X= {
//   a:string,
//   b:string
// }

// type Y=X & {
//   c:string,
//   d:string
// }
// let y: Y = {
//   c:"c",
//   d:"d",
//   a:"a",
//   b:"b",
// }

// interface X {
//   a:string,
//   b:string
// }
// interface Y extends X {
//   c:string,
//   d:string
// }
// interface Y extends Z {
//   c:string,
//   d:string
// }
// let y:Y = {
//   c: "c",
//   d: "d",
//   a: "a",
//   b: "b",
//   e: "e",
//   f: "f"
// }
// let x:X = {
//   a: "a",
//   b: "b",
// }
// type Z=X & {
//   e: string,
//   f:string
// }


const App: React.FC = () => {
  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([])
  
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      settodos(JSON.parse(storedTodos));
    }
  }, [])
  
  const handleAdd = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const updatedTodos = [...todos, {id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1, todo, isDone: false}]
    settodos(updatedTodos);
    // Save to local storage
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    settodo("");
  }
  console.log(todos);
  

  return (
    <div className="App">
    <h1>Taskify</h1>
    <InputField todo={todo} settodo={settodo} handleAdd={handleAdd}/>
    <TodoList todos={todos} settodos={settodos}/>
    </div>
  );
}

export default App;
