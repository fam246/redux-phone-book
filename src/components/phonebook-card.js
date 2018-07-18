import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



export default function PhonebookCard({ phonebook, deletePhoneBookContact }) {
  return (
    <Card>
      <CardContent key={phonebook._id}>

        {phonebook.name.first} {phonebook.name.last}
        <br />

        {phonebook.phone}
        <br />
        {phonebook.email}

        <br />
        <div>

          <Link to={`/phonebooks/edit/${phonebook._id}`} >Edit</Link>




          <Button color="secondary" onClick={() => deletePhoneBookContact(phonebook._id)} >
            Delete
                </Button>
        </div>


      </CardContent>

    </Card>
  )
}

PhonebookCard.propTypes = {
  phonebook: PropTypes.object.isRequired,
  deletePhoneBookContact: PropTypes.func.isRequired
};
