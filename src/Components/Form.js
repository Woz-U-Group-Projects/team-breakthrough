import React from 'react';

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
    })
  };

  render() {
    return (
      <form>
        <input
        name="firstName"
        placeholder='First name'
        value={this.state.firstName}
        onChange={e => this.change(e)}
        />
        <br />
        <input
        name="lastName"
        placeholder='Last name'
        value={this.state.lastName}
        onChange={e => this.change(e)}
        />
        <br />
        <input
        name="email"
        placeholder='Email'
        value={this.state.email}
        onChange={e => this.change(e)}
        />
        <br />
        <textarea
        name="comment"
        placeholder='Leave a comment...'
        value={this.state.comment}
        onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>

      </form>  
    )
  }
}

  export default Form;