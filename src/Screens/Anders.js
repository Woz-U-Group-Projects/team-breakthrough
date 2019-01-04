import React from 'react';
import Header  from '../Components/Header';
import AndersStyles from './AndersStyles.css';
import Wyoming from '../Images/Wyoming.jpg';

const Anders = () => (
    <div>
      <Header/>
      <h1 className="Title">Welcome to my Portfolio!</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
          <img className="Wyoming" src={require('../Images/Wyoming.jpg')}  />
            <p>My name is Anders Kornkven. I live in Laramie, Wyoming.</p>
          </div>
          <div className="col-lg-5">
            <p> How big does this space get. I want to see the size of this box. </p>
          </div>
          <div className="col-lg-4">
            <p>This is the third box in the row. </p>
          </div>
        </div>
      </div>
    </div>
      )

export default Anders;