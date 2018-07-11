import React from 'react';
import PropTypes from 'prop-types';

export default function PhonebookList({phonebooks}){

  const list = () => {
    return phonebooks.map(phonebook => {
      return (
        <li key={phonebook._id}>{phonebook.name.first} {phonebook.name.last}</li>
      )
    })
  }

  return (
    <div>
      <ul>
        { list() }
      </ul>
    </div>
  )
}

PhonebookList.propTypes = {
  phonebooks: PropTypes.array
};
