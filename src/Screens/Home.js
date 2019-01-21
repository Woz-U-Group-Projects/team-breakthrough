import React from 'react';
import Header from '../Components/Header';
import HomeStyles from './HomeStyles.css';
import brLogo from '../Images/brLogo.png';


const Home = () => (
  <div className ="Home">
    <div className="HomeImage">
    <Header/>
   
        <div className="brBox">
        <img className="brLogo" src={require('../Images/brLogo.png')}  />
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
        </div>       
  </div>
</div>
  
)

export default Home;