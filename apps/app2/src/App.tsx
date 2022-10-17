import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { NavBar } from './NavBar';

function App({basePath}: {basePath: string}) {
  const [preference, setPreference] = useState('');
  useEffect(() => {
    document.addEventListener('preference-change', (event) => {
      //@ts-ignore
      setPreference(event.detail.country);
    });
  }, [])
  return (
    <BrowserRouter>
      <h2>Child App 2</h2>
      <h5>{`React Version ${React.version}`}</h5>
      <h5>{`Selected Country - ${preference}`}</h5>
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

export interface Preference {
  country: string;
}
