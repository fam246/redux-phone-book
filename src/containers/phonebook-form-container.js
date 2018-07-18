import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {SubmissionError} from 'redux-form';
import {connect} from 'react-redux';
import {newPhonebookContact, savePhoneBookContact,fetchPhoneBookContact,updatePhoneBookContact} from '../actions/phonebook-actions';
import PhonebookForm from '../components/phonebook-form';
import PropTypes from 'prop-types';

 class PhonebookFormContainer extends Component {
   state ={
     redirect: false
   }
   
   componentDidMount =()=>{
     const {_id} = this.props.match.params;
     if(_id){
       this.props.fetchPhoneBookContact(_id)
     }
     else{
      this.props.newPhonebookContact();
     }
     
     
   }

submit = (phonebook) =>{
  if(!phonebook._id){
  return this.props.savePhoneBookContact(phonebook)
  .then(response => this.setState({redirect:true}))
  .catch(err => {
      throw new SubmissionError(this.props.errors)
  })
} 
else{
  return this.props.updatePhoneBookContact(phonebook)
  .then(response => this.setState({redirect:true}))
  .catch(err => {
      throw new SubmissionError(this.props.errors)
  })

}
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

PhonebookFormContainer.propTypes = {
  newPhonebookContact: PropTypes.func.isRequired,
  savePhoneBookContact: PropTypes.func.isRequired,
  phonebook:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired,
  loading:PropTypes.object.isRequired,
  fetchPhoneBookContact:PropTypes.func.isRequired,
  match:PropTypes.object.isRequired,
  updatePhoneBookContact:PropTypes.func.isRequired
};



export default connect(mapStateToProps, {newPhonebookContact, savePhoneBookContact,fetchPhoneBookContact,updatePhoneBookContact})(PhonebookFormContainer);