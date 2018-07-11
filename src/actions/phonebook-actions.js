import {phonebooks} from '../phonebook-data';

export function fetchPhonebookData(){
    return dispatch =>{
        dispatch({
            type: 'FETCH_PHONEBOOKDATA',
            payload: phonebooks
        })
    }
}