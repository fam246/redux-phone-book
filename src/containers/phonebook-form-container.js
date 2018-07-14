import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {SubmissionError} from 'redux-form';
import {connect} from 'react-redux';
import {newPhonebookContact, savePhoneBookContact} from '../actions/phonebook-actions';
import PhonebookForm from '../components/phonebook-form';

 class PhonebookFormContainer extends Component {
   state ={
     redirect: false
   }
   
   componentDidMount(){
     this.props.newPhonebookContact();
   }

submit = (phonebook) =>{
  return this.props.savePhoneBookContact(phonebook)
  .then(response => this.setState({redirect:true}))
  .catch(err => {
      throw new SubmissionError(this.props.errors)
  })
}   





  render() {
    return (
      <div>
        <h1> Form </h1>
        {
          this.state.redirect ?
          <Redirect to="/"/> :        
        <PhonebookForm phonebook={this.props.phonebook} loading=
        {this.props.loading} onSubmit={this.submit}/>
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    phonebook: state.phonebookStore.phonebook,
    errors: state.phonebookStore.errors
  }
}



export default connect(mapStateToProps, {newPhonebookContact, 
  savePhoneBookContact})(PhonebookFormContainer);