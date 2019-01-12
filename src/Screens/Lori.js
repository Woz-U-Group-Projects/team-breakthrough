import React from "react";
import Header from "../Components/Header";
import LoriStyles from "./LoriStyles.css";
// import LDClove2code from '.../Images/LDClove2code.png';

const Lori = () => (
LoriReact
<div className="div">
    <Header />

        <div className="jumbotron text-center">
            <div className="zoom2">
                <h1>I am an aspiring jr. developer</h1> 
                    <img className="LDClove2code" src={require("/Users/loridavis/Desktop/finalProjectTeamBreakthrough/team-breakthrough/src/Images/LDClove2code.png")} width="40%"/>
                <h1>eager to make your life easier! </h1>
            </div>
        </div>


      

        <div className="skills">
                <div className="col-lg-6">
                    <h2>My Favorites:</h2>
                    <p className="story"> HTML | CSS with animations | Java | Eclipse | Spring Suite | SQL and noSQL | Adobe Illustrator</p>
                </div>


                <div className="col-lg-6">
                    <h2>I'm Learning:</h2>
                    <p className="story">React | Flexbox | Bootstrap | jQuery | Keynote animations</p>
                </div>
            </div>



            <div className="skills">
        <div className="container">
           <div className="col-lg-4">
            <div className="teamBreakthrough">
                <h2>I'm a proud member of</h2>
                <img className="breakthroughGreyTeal"
                src={require("/Users/loridavis/Desktop/finalProjectTeamBreakthrough/Lori.portfolio/FINALprojectIMAGES/BreakThroughLogoGreyTeal.png")} height="68%" width="68%" />
                <h2>
                <strong> Team Breakthrough!</strong>
                </h2>
            </div>
           </div>

           <div className="col-lg-8">
            <div className="me">
                <h2>Lori Davis | LDeCoder | My Story</h2>
                <p className="story"> Until I went to a Heaven Come Conference in Dallas that was put on by
                Bethel, I had never even heard of something called "coding." The short
                story is that when I went, God specifically told me, “Either you can
                have a 30-second encounter with man, or you can be here and receive
                the fullness of what I have for you." Not long after He told me this,
                an announcement was made for Bethel Tech. Again, I had never heard of
                such things! Yet, somehow my soul was so excited! It felt like I was a
                little kid just bubbling over with an amazing joy! God then promised
                me ”free school.” And ya know what, just 1 week later, with my
                obedience in fasting and prayer, HE DELIVERED! So, my story for being
                a junior software developer began when God made me a big promise, and
                He hasn’t stopped delivering! And that promise is Ephesians 2:10. You
                should check it out - because He has made the very same promise to
                YOU! Now, I am excited to see who He has asked to step out and give me
                an opportunity to show His faithfulness by giving me a chance to code
                for them! For this project, our team name is Breakthrough, because,
                you know what ~ <strong>The MISSION is greater than the CODE!</strong></p>
           </div>
          </div>
        </div>


        <div className="col-lg-4">
            <img className="me" src={require("/Users/loridavis/Desktop/finalProjectTeamBreakthrough/Lori.portfolio/FINALprojectIMAGES/LDeCoderLOGO.png")} width="80%" height="80%" />
        </div>

      </div>

            
</div>

);

export default Lori;


