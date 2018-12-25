import React from 'react';
import Header from '../Components/Header';
import HomeStyles from './HomeStyles.css';
import brLogo from '../Images/brLogo.png';


const Home = () => (
  <div>
    <img className="brLogo" src={require('../Images/brLogo.png')}  />
    <p>This is our homepage. Add content here. </p>
  </div>  
)

export default Home;