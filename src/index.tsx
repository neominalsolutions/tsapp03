import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Routing';
import reportWebVitals from './reportWebVitals';
import UseEffectHooks from './UseEffectHooks';
import Test from './Test';
import TodoComponent from './todos/components/TodoComponent';
import TodoCreateFormComponent from './todos/components/TodoCreateFormComponent';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {/* <App /> */}
    {/* <Test /> */}
    {/* <TodoComponent /> */}

    <BrowserRouter>
        <Routing />
      {/* <TodoCreateFormComponent />  */}
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
