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
        <h1 className="Title"> Please leave your name and information</h1>
        <Form onSubmit={fields => this.onSubmit(fields)}/>
    </div>
        );
    }
}

export default Developer;