import axios from "axios"
import { Todo } from "../models/todo.model."

// MVVM => Model View View Model React,Vue, Angular bu template pattern ile çalışır.
export default function TodoService() {

  const baseUrl = 'https://jsonplaceholder.typicode.com'
  // todos
  function getTodos(endPoint:string):Promise<Todo[]> {
    return axios.get(`${baseUrl}/${endPoint}`).then(response => response.data);
  }

  //todos/1
  function getTodosById(endPoint:string):Promise<Todo> {
    return axios.get(`${baseUrl}/${endPoint}`).then(response => response.data);
  }

  function create(todo:any,endPoint:string):Promise<any> {
      return axios.post(`${baseUrl}/${endPoint}`, todo).then((response:any) => response.data);
  }

  return {
    getTodos,
    getTodosById,
    create
  }

}