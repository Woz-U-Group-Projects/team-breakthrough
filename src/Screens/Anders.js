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
          <div className="col-lg-12 aboutme">
          <h3>About Me</h3>
          <section>
            I have had the blessing and the curse of moving all around the United States. <br />
            At times I can't decide if I am from everywhere I've ever lived or nowhere. <br />
            I was born in Illinois, but I've also lived in South Dakota, Colorado, Alaska, California, and Wyoming (a couple times!). <br />
            I currently reside in Laramie, Wyoming.
          </section>
          </div>
        </div>
      </div>

      <h3 className="containerheader"> These Are My Favorite Places </h3>
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
            <figcaption>No man's land, Wyoming</figcaption>

          </div>
        </div>    
      </div>

      <div className="container cont00">  
        <div className="row row1">
          <div className="col-lg-1">
            <img className="img2" src={require ("../Images/brLOGOsmall.png")}/>
          </div>
          <div className="col-lg-4 colbor">
            <h3> Coding Story </h3>
            <section>
              I started coding two years ago. I had no idea what I was getting in to at the time,
              and I still feel that way! I began learning Python online - took a couple classes - 
              then decided to jump head first into a bootcamp. This brought me to Bethel Tech.
            </section>  
          </div>
        </div>
      </div>  
      
      <div className="container cont2">
        <div className="row row1">
          <div className="col-lg-4 abox">
            <h3>Skills</h3>
            <section>Java | Spring MVC | Reactjs | HTML | CSS</section>
          </div>
          <div className="col-lg-4 abox">
            <h3>What I am Learning</h3>
            <section>Python | Javascript | Animations </section>
          </div>
          <div className="col-lg-4 abox">
            <h3>Goals</h3>
            <section>Learn Python and Java really well. Develop cool and useful apps.
            Keep getting better.   
            </section>
          </div>
        </div>
      </div>

      <div className="container footerdiv">
        <h3> Check out the links below for more content</h3>
        <div className="row row1">
          <div className="col-lg-12">
            <footer className="footer">  
            <a className="item4" href="https://github.com/Anders44/"><i className="fab fa-github-square"></i></a>
            <a className="item4" href="https://www.linkedin.com/in/anders-kornkven/"><i className="fab fa-linkedin"></i></a>
            <a className="item4" href="https://www.instagram.com/anders.kornkven/"><i className="fab fa-instagram"></i></a>
            </footer>
          </div>
        </div>
        
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