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
      <br />
      <br />
      <br />
      <br />
      <br />
      <title className="Title">
        <h1>A Portfolio</h1>
        <h3>By Anders Kornkven</h3>
      </title>
      </header>
      <div className="container cont0">
        <div className="row row1">
          <div className="col-lg-12">
          <h3>About Me</h3>
          <section>
            I am Anders Kornkven.
            I have the blessing and the curse of living all around the United States. <br />
            I feel like I am from everywhere and nowhere at the same time. <br />
            I was born in Illinois, but I've also lived in South Dakota, Colorado, Alaska, California, Ohio, and Wyoming (twice!). <br />
            I currently call home Laramie, Wyoming.


          </section>
          </div>
        </div>
      </div>

      <div className="container cont1">
        <div className="row row1">
          <div className="col-lg-12 pics1">
          <img className="img1" src={require ("../Images/Illinois.jpg")}/>
          <figcaption>The Corn Fields of Illinois</figcaption>
          <img className="img1" src={require ("../Images/South Dakota.jpg")}/>
          <figcaption>Mount Rushmore, South Dakota</figcaption>
          <img className="img1" src={require ("../Images/Colorado Springs.jpg")}/>
          <figcaption> US Air Force Academy, Colorado Springs, Colorado</figcaption>

          </div>
        </div>
      </div>

      <div className="container cont2">
        <div className="row row1">
          <div className="col-lg-4">
            <h3>Skills</h3>
            <section>My name is Anders Kornkven. I live in Laramie, Wyoming.</section>
          </div>
          <div className="col-lg-4">
            <h3>What I am Learning</h3>
            <section> How big does this space get. I want to see the size of this box. </section>
          </div>
          <div className="col-lg-4">
            <h3>Goals</h3>
            <section>This is the third box in the row. </section>
          </div>
        </div>
      </div>

      <div className="container-2 cont3">
        <div className="row row1">
          <div className="col-lg-4">
            <h3> content </h3>
          </div>
          <div className="col-lg-4">
            <h3> content </h3>
          </div>
          <div className="col-lg-4">
            <h3> content </h3>
          </div>
        </div>
      </div>

      <footer className="footer">
        This is where the footer will be.
      </footer>  



    </div>
      )

export default Anders;