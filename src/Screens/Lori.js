import React from "react";
import Header from "../Components/Header";
import LoriStyles from "./LoriStyles.css";
// import LDClove2code from '.../Images/LDClove2code.png';

const Lori = () => (
  <div className="LDiv grid">
    <Header />

    <div className="jumbotron text-center">
      <div className="zoom2">
        <h1 className="LDh1">
          I am an aspiring jr. developer eager to make your life easier!
        </h1>
        <img
          className="LDClove2code"
          src={require("../Images/LDClove2code.png")}
        />
      </div>
    </div>

    {/* <div className="skills col-lg-11 col-lg-offset-1"> */}
    <div className="main">
      <div className="skills-a">
        <h2>I'm Learning:</h2>

        <ul className="story">
          <li>Reactjs</li>
          <li>Flexbox</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
          and more!
        </ul>
        <h2>My Favorites:</h2>

        <ul className="story">
          <li>HTML</li>
          <li>SS animations</li>
          <li>Java</li>
          <li>Eclipse</li>
          <li>Spring Suite</li>
          <li>SQL</li>
          <li>noSQL</li>
          <li>Adobe Illustrator</li>
          <li>Keynote animations</li>
        </ul>
        <div className="skills-b">
          <img
            className="me"
            src={require("../Images/LDeCoderLOGO.png")}
            width="100%"
            height="50%"
          />
        </div>
      </div>

      {/* <div className="col-lg-11 col-lg-offset-1"> */}
      <div className="skills-c">
        <div className="teamBreakthrough">
          <h2>Proud member of Team Breakthrough!</h2>
          <img
            className="breakthroughGreyTeal"
            src={require("../Images/BreakThroughLogoGreyTeal.png")}
          />
        </div>

        <div className="skills-d">
          <div className="me">
            <h1 className="LDh1">Lori Davis | LDeCoder | My Story</h1>
            <p className="story">
              Until I went to a Heaven Come Conference in Dallas that was put on
              by Bethel, I had never even heard of something called "coding."
              The short story is that when I went, God specifically told me,
              “Either you can have a 30-second encounter with man, or you can be
              here and receive the fullness of what I have for you." Not long
              after He told me this, an announcement was made for Bethel Tech.
              Again, I had never heard of such things! Yet, somehow my soul was
              so excited! It felt like I was a little kid just bubbling over
              with an amazing joy! God then promised me ”free school.” And ya
              know what, just 1 week later, with my obedience in fasting and
              prayer, HE DELIVERED! So, my story for being a junior software
              developer began when God made me a big promise, and He hasn’t
              stopped delivering! And that promise is Ephesians 2:10. You should
              check it out - because He has made the very same promise to YOU!
              Now, I am excited to see who He has asked to step out and give me
              an opportunity to show His faithfulness by giving me a chance to
              code for them! For this project, our team name is Breakthrough;
              because, ~ <br />{" "}
              <strong>The MISSION is greater than the CODE!</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Lori;
