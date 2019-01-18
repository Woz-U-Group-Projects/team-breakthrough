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
        <div className="row row0">
          <div className="col-lg-12">
          <h3>About Me</h3>
          <section>
            I am Anders Kornkven.
            I have had the blessing and the curse of living all around the United States. <br />
            At times I feel like I am from everywhere and nowhere simultaneously. <br />
            I was born in Illinois, but I've also lived in South Dakota, Colorado, Alaska, California, and Wyoming. <br />
            I currently reside in Laramie, Wyoming.
          </section>
          </div>
        </div>
      </div>

      <div className="container cont1">
        <div className="row row1">
          <div className="col-lg-12 pics1">
            <img className="img1 img-responsive" src={require ("../Images/Illinois.jpg")}/>
            <figcaption>The Corn Fields of Illinois</figcaption>
            <img className="img1 img-responsive" src={require ("../Images/South Dakota.jpg")}/>
            <figcaption>Mount Rushmore, South Dakota</figcaption>
            <img className="img1 img-responsive" src={require ("../Images/Colorado Springs.jpg")}/>
            <figcaption> US Air Force Academy, Colorado Springs, Colorado</figcaption>
          </div>
        </div>
  
        <div className="row row1">
          <div className="col-lg-12 pics2">
            <img className="img1" src={require ("../Images/Denali.jpg")}/>
            <figcaption>Denali National Park, Alaska</figcaption>
            <img className="img1" src={require ("../Images/Sundial Bridge.jpg")}/>
            <figcaption>Sundial Bridge, Redding, California</figcaption>
            <img className="img1" src={require ("../Images/Background.jpg")}/>
            <figcaption>Wyoming</figcaption>

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

      <div className="container footerdiv">
      <h1> Thanks for looking at my page!</h1>
        <div className="row row1">
          <div className="col-lg-12">
            <footer className="footer">  
              <a className="item4" href="/">Home</a>
              <a className="item4" href="/Anders">Anders</a>
              <a className="item4" href="/Lori">Lori</a>
              <a className="item4" href="/Developer">Contact Us</a>
            </footer>
          </div>
        </div>
      </div>



    </div>
      )

export default Anders;