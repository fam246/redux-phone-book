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

export function fetchPhoneBookContact(_id){
    return dispatch =>{
        return dispatch({
            type: 'FETCH_PHONEBOOKCONTACT',
            payload: client.get(`${url}/${_id}`)
        })
    }
}

export function updatePhoneBookContact(phonebook){
    return dispatch=>{
        return dispatch({
            type:'UPDATE_PHONEBOOKCONTACT',
            payload: client.put(`${url}/${phonebook._id}`, phonebook)
        })
    }
}

export function deletePhoneBookContact(_id){
    return dispatch =>{
        return dispatch({
            type: 'DELETE_PHONEBOOKCONTACT',
            payload: client.delete(`${url}/${_id}`)
        })
    }

}