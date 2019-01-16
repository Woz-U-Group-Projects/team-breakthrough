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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 className="Title"> Please leave your name and information</h2>
            <div className="container">
                <div className="row item3">
                    <div className="col-sm-0 item3">
                
                    </div>
                    <div className="col-sm-12 item3">
                    <Form onSubmit={fields => this.onSubmit(fields)}/>
                    </div>
                    <div className="col-sm-0 item3">
                        
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Developer;