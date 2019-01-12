import React from 'react';
import { render } from 'react-dom';
import Home from '../src/screens/Home';
import Anders from '../src/screens/Anders';
import Lori from '../src/screens/Lori';
import Developer from '../src/screens/Developer';

const Index = ({ pathname }) => {
  switch(pathname) {
    case "/Anders":
      return <Anders />;
    case "/Lori":
      return <Lori />;
    case "/Developer":
      return <Developer />;
    default:
      return <Home />;    
  
  }
};

let pathname = window.location.pathname;

render(<Index pathname={pathname} />, document.getElementById("root"));

 window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
});