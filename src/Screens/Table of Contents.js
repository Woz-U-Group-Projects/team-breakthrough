import React from 'react';
import Home from './Home';
import Anders from './Anders';
import Lori from './Lori';
import Developer from './Developer';
import Header from '../Components/Header';
import TableofContentsStyles from './TableofContentsStyles.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const TableofContents = () => (
  <div>
    <div className="header">
    <Header title="Pick a link to explore" />
    </div>
    
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/anders">Anders</Link>
        </li>
        <li>
          <Link to="/lori">Lori</Link>
        </li>
        <li>
          <Link to="/developer">New Developer</Link>
        </li>  
      </ul>

      <hr />

      <Route path="/" component={Home} />
      <Route path="/anders" component={Anders} />
      <Route path="/lori" component={Lori} />
      <Route path="/developer" component={Developer} />
    </div>
  </Router>
  </div>  
)

export default TableofContents;