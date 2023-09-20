import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import TodoComponent from './todos/components/TodoComponent';
import TodoCreateFormComponent from './todos/components/TodoCreateFormComponent';
import Layout from './Layout';
import Home from './Home';

function Routing() {
 
  const routes = useRoutes([
  {
    path:'',
    element: <Layout />,
    children: [
      {
        path:'',
        element: <Home />
      },
      {
        path:'/todo-page',
        element: <TodoComponent />
      }, {
        path:'/todo-form',
        element: <TodoCreateFormComponent />
      }
    ]
  }, 
  {
    path:'/crm',
    children:[
      
    ]
  } 
  ])

return routes;

}

export default Routing;
