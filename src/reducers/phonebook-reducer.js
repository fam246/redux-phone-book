const defaultState ={
    phonebooks: []
}

export default (state = defaultState, action={}) =>{
switch (action.type){
    case 'FETCH_PHONEBOOKDATA':{
        return {
            ...state,
            phonebooks: action.payload
        }
    }
    default:
    return state;
}



}