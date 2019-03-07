import React from 'react';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';
import { VerticalSplit } from './examples/VerticalSplit';
import { HorizontalSplit } from './examples/HorizontalSplit';

export const App = () => (
  <div>
    <HashRouter>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to='/standard-horizontal'>Standard Horizontal</NavLink>
            </li>
            <li>
              <NavLink to='/standard-vertical'>Standard Vertical</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' />
          <Route path='/standard-horizontal' component={HorizontalSplit} />
          <Route path='/standard-vertical' component={VerticalSplit} />
        </Switch>
      </div>
    </HashRouter>
  </div>
);
