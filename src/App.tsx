import React from 'react';
import Link from './common/link';
import Box from '@common/box';
import './App.css';

/**
 * React application
 *
 * @returns {JSX.Element}
 */
const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Link />
      <Box title="Another Box" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
