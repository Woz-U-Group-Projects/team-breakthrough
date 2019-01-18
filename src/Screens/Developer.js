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
            {/* <h2 className="Title"> Thanks for visiting! Please sign our guestbook and just for fun - vote on your favorite ice cream!</h2> */}
            
            
            
<div className="container f">

<form>
<h2 className="Title col-lg-8"> Thanks for visiting! Please sign our guestbook and just for fun - vote on your favorite ice cream!</h2>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">NAME</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">EMAIL</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
    </div>
  </div>
  <div className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">VOTE NOW!</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
          <label className="form-check-label" for="gridRadios1">
            Vanilla
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
          <label className="form-check-label" for="gridRadios2">
            Chocolate
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
          <label className="form-check-label" for="gridRadios3">
            I like it ALL!
          </label>
        </div>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-2">I like cheesecake</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1" />
        <label class="form-check-label" for="gridCheck1">
            CHEEEEESECAKE!!
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
    <Form onSubmit={fields => this.onSubmit(fields)} />
     
      {/* <button type="submit" class="btn btn-primary">Sign in</button> */}
    </div>
  </div>
</form>

            </div>
        </div>
        );
    }
}

export default Developer;



          {/* *****THE FIRST FORM******** */}
                {/* <div className="row item3">
                    <div className="col-sm-0 item3">
                
                    </div>
                    <div className="col-sm-12 item3">
                    <Form onSubmit={fields => this.onSubmit(fields)}/>
                    </div>
                    <div className="col-sm-0 item3">
                        
                    </div>
                </div> */}