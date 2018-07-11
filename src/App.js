import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';

import PhonebookListContainer from './containers/phonebook-list-container';
import PhonebookFormContainer from './containers/phonebook-form-container';



class App extends Component {
  
  render() {
    
    return (
      <div >
        <Paper>
        <Tabs >
          
          <Link  exact to="/">
            Phonebook List
          </Link>
          </Tabs>
          <Tabs>
          
          <Link  exact to="/contacts/new">
            Add New Contact
          </Link>
        
        
        
   
        </Tabs>
        </Paper>

        <Route exact path="/" component={PhonebookListContainer}/>

        <Route path="/contacts/new" component={PhonebookFormContainer}/>
        <Route path="/contacts/edit/:_id" component={PhonebookFormContainer}/>
        
      </div>
    );
  }
}

export default App;
