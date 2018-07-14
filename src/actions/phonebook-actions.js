import {client} from './index';

const url = '/phonebooks';
export function fetchPhonebookData(){
    return dispatch =>{
        dispatch({
            type: 'FETCH_PHONEBOOKDATA',
            payload: client.get(url)
        })
    }
}

export function newPhonebookContact(){
    return dispatch =>{
        dispatch({
            type: 'NEW_PHONEBOOKCONTACT'
        })
    }
}


export function savePhoneBookContact(phonebook){
    return dispatch =>{
        return dispatch({
            type: 'SAVE_PHONEBOOKCONTACT',
            payload: client.post(url,phonebook)
        })
    }

}