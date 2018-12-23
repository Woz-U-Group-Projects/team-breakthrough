import React from 'react';
import { render } from 'react-dom';
import Home from '../src/screens/Home';
import TableofContents from '../src/screens/Table of Contents';
import Anders from '../src/screens/Anders';
import Lori from '../src/screens/Lori';
import Developer from '../src/screens/Developer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tableofcontents">Table of Contents</Link>
        </li>  
      </ul>

      <hr />

      <Route path="/" component={Home} />
      <Route path="/tableofcontents" component={TableofContents} />
      <Route path="/anders" component={Anders} />
      <Route path="/lori" component={Lori} />
      <Route path="/developer" component={Developer} />
    </div>
  </Router>
);

render(
  <App />,
  document.getElementById('root')
);