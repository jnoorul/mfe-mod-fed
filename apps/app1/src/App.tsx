
import React from 'react';
function App({basePath}: {basePath: string}) {
  return (
    <div className="App">
      <h1>Child App 1</h1>
      <h3>{`React version ${React.version}`}</h3>
    </div>
  );
}

export default App;
