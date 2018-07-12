import {combineReducers} from 'redux';
import PhonebookReducer from './phonebook-reducer';
import {reducer as formReducer} from 'redux-form';

const reducers ={
    phonebookStore: PhonebookReducer,
    form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;