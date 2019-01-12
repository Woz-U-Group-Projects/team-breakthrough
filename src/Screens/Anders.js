import React from 'react';
import Header  from '../Components/Header';
import AndersStyles from './AndersStyles.css';
import Wyoming from '../Images/Wyoming.jpg';

const Anders = () => (
    <div className="Anders">
      <header className="Background">
      <Header/>
      <br />
      <br />
      <br />
      <div className="Title">
        <h1>Team Breakthrough</h1>
        <h3>By Anders Kornkven</h3>
      </div>
      </header>
      <div className="container-2">
        <div className="row">
          <div className="col-lg-3">
            <h3>About Me</h3>
            <p>My name is Anders Kornkven. I live in Laramie, Wyoming.</p>
          </div>
          <div className="col-lg-5">
            <h3>Skills</h3>
            <p> How big does this space get. I want to see the size of this box. </p>
          </div>
          <div className="col-lg-4">
            <h3>Current Projects</h3>
            <p>This is the third box in the row. </p>
          </div>
        </div>
      </div>
    </div>
      )

export default Anders;