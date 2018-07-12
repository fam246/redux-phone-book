const defaultState ={
    phonebooks: []
}

export default (state = defaultState, action={}) =>{
switch (action.type){
    case 'FETCH_PHONEBOOKDATA_FULFILLED':{
        return {
            ...state,
            phonebooks: action.payload.data.data || 
             action.payload.data
        }
    }
    default:
    return state;
}



}