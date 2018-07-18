import React, { Component,  } from 'react';
import PhonebookList from '../components/phonebook-list';
import {connect} from 'react-redux';
import {fetchPhonebookData, deletePhoneBookContact} from '../actions/phonebook-actions';
import PropTypes from 'prop-types';


 class PhonebookListContainer extends Component {
   componentDidMount(){
     this.props.fetchPhonebookData();
   }

  render() {
    return (
      <div>
          <h1> Phonebook List </h1>
          <PhonebookList phonebooks={this.props.phonebooks} deletePhoneBookContact={this.props.deletePhoneBookContact}/>
        
      </div>
    )
  }
}

PhonebookListContainer.propTypes = {
  fetchPhonebookData: PropTypes.func.isRequired,
  phonebooks: PropTypes.array.isRequired,
  deletePhoneBookContact: PropTypes.func.isRequired
};





    function mapStateToProps (state){
      return{
        phonebooks: state.phonebookStore.phonebooks
      }
    }

export default connect(mapStateToProps, {fetchPhonebookData,deletePhoneBookContact})(PhonebookListContainer);