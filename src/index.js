import React from 'react';
import { render } from 'react-dom';
import Home from '../src/screens/Home';
import TableofContents from '../src/screens/Table of Contents';
import Anders from '../src/screens/Anders';
import Lori from '../src/screens/Lori';

const Index = ({ pathname }) => {
  switch(pathname) {
    case "/tableofcontents":
      return <TableofContents />;
    case "/anders":
      return <Anders />;
    case "/lori":
      return <Lori />;  
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

render(<Index pathname={pathname} />, document.getElementById("root"));

 window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
});