import React, { Component } from "react";
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  
  handleSubmit(values, {resetForm}) {
    console.log(values);
    resetForm();
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
