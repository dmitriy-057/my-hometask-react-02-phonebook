import React, { Component } from "react";
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(values, {resetForm}) {
    resetForm();
    console.log(values)
  }

  render() {
    return (
      <div className="container">
      <Formik 
        initialValues={this.state} 
        onSubmit={this.handleSubmit}>
        <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field
          type="text"
          name="name"
          />
        </label>
        <button type="submit">Add contact</button>
        </Form>
      </Formik>
      </div>
    );
  }

};
