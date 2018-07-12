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