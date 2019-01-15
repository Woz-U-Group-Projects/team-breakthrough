import React from 'react';
import Header from '../Components/Header';
import HomeStyles from './HomeStyles.css';
import brLogo from '../Images/brLogo.png';


const Home = () => (
  <div className ="Home">
    <div className="HomeImage">
    <Header/>
    <img className="brLogo" src={require('../Images/brLogo.png')}  />
 
        <div className="box">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
        </div>
 
        {/* <footer className="Developers">
            <p>Click the links above to meet TEAM BREAKTHROUGH</p>
        </footer> */}
        
  </div>
</div>
  
)

export default Home;