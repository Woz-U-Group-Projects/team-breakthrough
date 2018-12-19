import React from 'react';
import Home from './home';
import Anders from './anders';
import Lori from './lori';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 

const TableofContents = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/anders">Anders</Link>
        </li>
        <li>
          <Link to="/lori">Lori</Link>
        </li>  
      </ul>

      <hr />

      <Route path="/" component={Home} />
      <Route path="/anders" component={Anders} />
      <Route path="/lori" component={Lori} />
    </div>
  </Router>  
)

export default TableofContents;