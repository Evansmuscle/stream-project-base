import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="alert alert-danger">{error}</div>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="">
        <label>{label}</label>
        <input
          className="form-control col-lg-5"
          {...input}
          autoComplete="off"
        />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button style={{ marginTop: 10 }} className="ui button primary">
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title!';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description!';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);
