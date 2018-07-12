import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


export default function PhonebookCard ({phonebook}) {
  return (
    <Card>
        <CardContent key={phonebook._id}>

           {phonebook.name.first} {phonebook.name.last}
           <br/>

           {phonebook.phone} 
           <br/>
           {phonebook.email}

           <br/>
           <Button color= "primary"> 
                 Edit
                

                 </Button>
           
             <Button color="secondary">
                 Delete
                

                 </Button>
           

            </CardContent>
      
    </Card>
  )
}

PhonebookCard.propTypes = {
    phonebook: PropTypes.object.isRequired
  };
