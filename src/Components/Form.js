import React from 'react';
import axios from 'axios';


class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
  };}

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081", {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, comment: this.state.comment});
    this.props.onSubmit(this.state)
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
    })
    alert("Thanks!");
  };

  // handleSubmit(e) {
  //   alert("Thanks!");
  //   e.preventDefault();
  // }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h3 className="thanks">Thanks for stopping by!</h3>
      <div className="thisForm">
        <label>NAME</label>
        <br />
        <input className="inputS"
        name="firstName"
        placeholder='First name'
        value={this.state.firstName}
        onChange={e => this.change(e)}
        />
        <br />
        <input className="inputS"
        name="lastName"
        placeholder='Last name'
        value={this.state.lastName}
        onChange={e => this.change(e)}
        />
        <br />
        <br />
        <label>EMAIL</label>
        <br />
        <input  className="inputS"
        type="email"
        name="email"
        placeholder='Email'
        value={this.state.email}
        onChange={e => this.change(e)}
        />
        <br />
        <br />
        <label>LEAVE A COMMENT:</label>
        <br />
        <input  className="inputS"
        name="comment"
        placeholder='Comment...'
        value={this.state.comment}
        onChange={e => this.change(e)}
        />
        <br />

        <button className="elButton" onClick={e => this.onSubmit(e)}>Submit</button>

      </div>
      </form>  
    )
  }
}

  export default Form;

 