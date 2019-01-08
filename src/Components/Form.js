import React from 'react';

class NameForm extends React.Component {
  
    render() {
      return (
        <div>
          <label>
            Name:
            <input type="text" />
          </label>
          <input type="submit" value="Submit" />
        </div>
      );
    }
  }

  export default Form;