import * as React from 'react';

function gitTitle(title){
  return title;
}

function App() {
  return (
    <div>
      <h1>Hello {gitTitle('world')}!</h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />
    </div>
  );
}

export default App;