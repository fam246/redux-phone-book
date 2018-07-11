import {combineReducers} from 'redux';
import PhonebookReducer from './phonebook-reducer';

const reducers ={
    phonebookStore: PhonebookReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;