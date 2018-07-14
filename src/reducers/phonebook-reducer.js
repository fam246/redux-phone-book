const defaultState ={
    phonebooks: [],
    phonebook: {name: {}},
    loading: false,
    errors:{}
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

    case 'NEW_PHONEBOOKCONTACT':{
        return{
            ...state,
            phonebook:{name:{}}
        }
    }

    case 'SAVE_PHONEBOOK_PENDING': {
        return {
          ...state,
          loading: true
        }
      }

      case 'SAVE_PHONEBOOK_FULFILLED': {
        return {
          ...state,
          phonebooks: [...state.phonebooks, action.payload.data],
          errors: {},
          loading: false
        }
      }

      case 'SAVE_PHONEBOOK_REJECTED': {
        const data = action.payload.response.data;
        // convert feathers error formatting to match client-side error formatting
        const { "name.first":first, "name.last":last, phone, email } = data.errors;
        const errors = { global: data.message, name: { first,last }, phone, email };
        return {
          ...state,
          errors: errors,
          loading: false
        }
      }



}



}