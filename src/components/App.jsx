import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   name: yup.string().min(4).max(6).required(),
// });

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
        // validationSchema={schema}
        onSubmit={this.handleSubmit}>
        <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field
          type="text"
          name="name"
          />
          {/* <ErrorMessage name="name" component='div'/> */}
        </label>
        <button type="submit">Add contact</button>
        </Form>
      </Formik>
      </div>
    );
  }

};
