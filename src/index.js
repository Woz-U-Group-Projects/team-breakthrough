import React from 'react';
import { render } from 'react-dom';
import Home from '../src/screens/Home';
import TableofContents from '../src/screens/Table of Contents';
import Topics from '../src/screens/Topics';

const Index = ({ pathname }) => {
  switch(pathname) {
    case "/tableofcontents":
      return <TableofContents />;
    case "/topics":
      return <Topics />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

render(<Index pathname={pathname} />, document.getElementById("root"));

 window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
});