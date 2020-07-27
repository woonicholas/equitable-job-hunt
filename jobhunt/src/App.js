import React, { Component } from 'react';
import Jumbo from './pre-form'
import Jobhunt from './finalForm'
import Error from './error'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component= { Jumbo } exact />
        <Route path="/application-form" component= { Jobhunt } />
        <Route component = {Error} />      
      </Switch>
    </div>
  );
}

export default App;

