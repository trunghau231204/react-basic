import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

class MyComponent extends React.Component {
  /* 
     JSX => return block
     fragment
    */

  state = {
    firstName: '',
    lastName: '',
  };

  handleOnChangeFistName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleOnChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('>>> check input data: ', this.state);
  };
  render() {
    console.log('>> call render: ', this.state);
    return (
      <>
        <form>
          <label htmlFor="fname">First name: </label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => {
              this.handleOnChangeFistName(event);
            }}
          />{' '}
          <br />
          <label htmlFor="lname">Last name: </label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => {
              this.handleOnChangeLastName(event);
            }}
          />{' '}
          <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
      </>
    );
  }
}

export default MyComponent;
