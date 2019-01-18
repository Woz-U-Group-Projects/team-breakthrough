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
<div className="ContactBackground">
            <Header/>     
            
            
<div className="container4m">

{/* <form> */}
  <div className="form-group row">
    <div className="col-sm-10">
    <Form onSubmit={fields => this.onSubmit(fields)} />
     

    </div>
  </div>


            </div>
        </div>
        );
    }
}

export default Developer;

