import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Counter } from './pages/counter/Counter_bk';
import { Contact } from './pages/contact/Contact';
import { Homepage } from './pages/homepage/Homepage';
import { Main } from './pages/main/Main';
import { AnotherCounter } from './pages/anotherCounter/AnotherCounter';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/main">
        <Main />
      </Route>
      <Route path="/counter">
        <Counter />
      </Route>
      <Route path="/anotherCounter">
        <AnotherCounter />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  )
}