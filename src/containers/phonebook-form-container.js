import React, { Component } from 'react';
import PhonebookForm from '../components/phonebook-form';

 class PhonebookFormContainer extends Component {
  render() {
    return (
      <div>
          <h1>Form</h1>
        <PhonebookForm/>
      </div>
    )
  }
}

export default PhonebookFormContainer;
