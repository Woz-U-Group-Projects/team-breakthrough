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
    
    <div>
        <Header/>
        <h2 className="Title"> Please leave your name and information</h2>
        <Form onSubmit={fields => this.onSubmit(fields)}/>
        <div className="ContactBackground"></div>
    </div>
        );
    }
}

export default Developer;