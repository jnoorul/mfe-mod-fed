
import React from 'react';
function App({basePath}: {basePath: string}) {
  return (
    <div className="App">
      <h2>Child App 1</h2>
      <h5>{`React version ${React.version}`}</h5>
    </div>
  );
}

export default App;
