import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { NavBar } from './NavBar';

function App({basePath}: {basePath: string}) {
  return (
    <BrowserRouter>
      <h1>Child App 2</h1>
      <h3>{`React Version ${React.version}`}</h3>
      <NavBar basePath={basePath} />
      <Switch>
        <Route path={`/${basePath}/tab1`}>
          <h4>First Tab Content of App 2</h4>
        </Route>
        <Route path={`/${basePath}/tab2`}>
          <h4>Second Tab Content of App 2</h4>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
