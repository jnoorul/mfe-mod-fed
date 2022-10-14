import React from 'react';

function App({basePath}: {basePath: string}) {
  return (
    <div className="App">
      <h1>Child App 2</h1>
      <h3>{`React Version ${React.version}`}</h3>
    </div>
  );
}

export default App;
