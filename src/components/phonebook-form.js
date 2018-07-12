import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



 class PhonebookForm extends Component {
  render() {
    return (
      <form>
        <h3>Add Contact</h3>
        <TextField
          id="name.first"
          label="First Name"
          margin="normal"
        />
        <br/>
        <TextField
          id="name.last"
          label="Last Name"
          margin="normal"
        />
        <br/>
        <TextField
          id="phone"
          label="Phone"
          margin="normal"
        />
        <br/>
        <TextField
          id="email"
          label="Email"
          margin="normal"
        />
        <br/>
        <Button color="primary">
        Save
      </Button>
        </form>
    )
  }
}
export default PhonebookForm;