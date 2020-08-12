import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Manga from './Manga';

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/manga/1">Manga 1</Link>
      <Link to="/manga/2">Manga 2</Link>
      <Link to="/manga/3">Manga 3</Link>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/manga/:id" component={Manga} />
      </div>
    </Router>
  );
}

export default App;