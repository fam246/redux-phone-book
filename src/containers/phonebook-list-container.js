import React, { Component } from 'react';
import PhonebookList from '../components/phonebook-list';

 class PhonebookListContainer extends Component {
  render() {
    return (
      <div>
          <h1> Contact List </h1>
          <PhonebookList/>
        
      </div>
    )
  }
}

export default PhonebookListContainer;