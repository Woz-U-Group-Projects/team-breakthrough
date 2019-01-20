import React, { Component } from 'react';
import Header from '../Components/Header';
import Form from '../Components/Form';
import DeveloperStyles from './DeveloperStyles.css';

class Developer extends Component {
    state = {
        fields: {}
    };
    
    onSubmit = fields => {
        this.setState({fields});
        console.log('App comp got: ', fields);
    };
    
    render() {
        return (
<div className="backgroundContainer">
            <Header/>     
            <h2 className="thanks">Thanks for stopping by!</h2>
            {/* col-md-offset-8 */}
  <div className="col-md-offset-4 col-md-4 col-md-offset-4">

    <Form onSubmit={fields => this.onSubmit(fields)} />
  
  </div>
</div>
        );
    }
}

export default Developer;

