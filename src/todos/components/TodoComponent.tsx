import { useEffect, useState } from "react"
import TodoService from "../services/todo.service";
import { Todo } from "../models/todo.model.";
import { TodoItemComponent } from "./TodoItemComponent";

export default function TodoComponent(){
  const [todos,setTodos] = useState<Todo[]>([]);
  // const [checked,setChecked] = useState(false); 
  useEffect(()=> {
    TodoService().getTodos('todos').then((response) => {
      console.log('response', response);
      // render et
      setTodos([...response]);
    }).catch(err => {
    })

  }, []);

  // useEffect(()=> {
  //   console.log('render root component');
  // }, [checked])

  return <>
    {/* <input type="checkbox" checked = {checked} onChange={(e:any) => {
      setChecked(e.target.value)
    }} /> Check All */}
    {todos.map((item:Todo) => {
      return <TodoItemComponent key={item.id} title={item.title} completed={item.completed} />
      // return <div key={item.id}>{item.title}</div>
    })}
  </>
}