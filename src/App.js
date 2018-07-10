import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import PhonebookListContainer from './containers/phonebook-list-container';
//import PhonebookFormContainer from './containers/phonebook-list-container';



class App extends Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <div >
        <AppBar position="static">
          <Tabs value={value}  onChange={this.handleChange}>
          
            <Tab label="Item One"  />
          
            <Tab label="Item Two" />
            <Tab label="Item Three" href="#basic-tabs" />
          </Tabs>
        </AppBar>
        {value === 0 && <Tab label="Item Ones" />}
        {value === 1 && <Tab label="Item Twos" />}
        {value === 2 && <Tab label="Item Threes" />}
      </div>
    );
  }
}

export default App;
