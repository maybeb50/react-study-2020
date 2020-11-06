import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </>
  );
}

export default App;
