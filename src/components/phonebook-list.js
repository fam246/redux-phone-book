import React from 'react';
import PropTypes from 'prop-types';
import PhonebookCard from './phonebook-card';
import Card from '@material-ui/core/Card';

export default function PhonebookList({ phonebooks, deletePhoneBookContact }) {

  const cards = () => {
    return phonebooks.map(phonebook => {
      return (
        <PhonebookCard key={phonebook._id} phonebook={phonebook} deletePhoneBookContact={deletePhoneBookContact} />
      )
    })
  }

  return (

    <Card>
      {cards()}

    </Card>
  )
}

PhonebookList.propTypes = {
  phonebooks: PropTypes.array.isRequired,
  deletePhoneBookContact: PropTypes.func.isRequired
};
