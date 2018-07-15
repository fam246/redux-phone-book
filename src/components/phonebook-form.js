import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import PropTypes from 'prop-types';

const required = value => (value == null ? 'Required' : undefined);
const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined);


class PhonebookForm extends Component {


  render() {
    const {handleSubmit,pristine, submitting, loading} = this.props;
    return (
      
      <form onSubmit={handleSubmit} loading={loading}>
      <h3>Add Contact</h3>
        
        <div>
        <Field 
            name="name.first"
            type="text"
            component={TextField}
            hintText="Name"
            label="First Name"
            validate={required}
            
          
          />
          </div>
          <br/>
           <div>
          <Field
            name="name.last"
            type="text"
            component={TextField}
            hintText="Name"
            label="Last Name"
            validate={required}
          
          
          />
          </div>
          <br/>
          <div>
          <Field
            name="phone"
            type="text"
            component={TextField}
            hintText="Phone"
            label="Phone"
            validate={required}
          
            
          />
          </div>
          <br/>
           <div>
          <Field
            name="email"
            type="text"
            component={TextField}
            hintText="Email"
            label="Email"
            validate={[required,email]}
          
            
          />
          </div>
          <br/>
          <div>
          <button type="submit" disabled={pristine || submitting}>Save</button>
          </div>
        
        </form>
    )
  }
}
PhonebookForm.propTypes={
  handleSubmit: PropTypes.object.isRequired,
  pristine: PropTypes.object.isRequired,
  submitting: PropTypes.object.isRequired,
  loading: PropTypes.object.isRequired
}



export default reduxForm({form: 'phonebook'})(PhonebookForm);