import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import User from './User';

const Task = () => <div>Task</div> 

const App = () => (
  <BrowserRouter>
    <Nav />
    <div className='margen'>
      <Route exact path='/' component={ User }/> 
      <Route exact path='/task' component={ Task }/> 
    </div>
  </BrowserRouter>
)

export default App