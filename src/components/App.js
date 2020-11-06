import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import User from './User';
import Publications from './Publications'

const Task = () => <div>Task</div> 

const App = () => (
  <BrowserRouter>
    <Nav />
    <div className='margen'>
      <Route exact path='/' component={ User }/> 
      <Route exact path='/task' component={ Task }/> 
      <Route exact path='/publications/:key' component={ Publications }/> 
    </div>
  </BrowserRouter>
)

export default App