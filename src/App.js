import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./App.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }


  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  render() {
    return (
      <div className="Login">

        <form onSubmit={this.handleSubmit}>
          <div>
            <h1>Welcome</h1>
          </div>
          <FormGroup controlId="email" >

            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="email"
            />
          </FormGroup>
          <FormGroup controlId="password" >

            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              placeholder="password"
            />
          </FormGroup>
          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
            className="submit-button"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
