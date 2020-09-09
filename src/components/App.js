import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import User from './User';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Route exact path='/' component={ User }/> 
  </BrowserRouter>
)

export default App