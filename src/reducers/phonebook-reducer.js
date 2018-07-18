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

      case 'FETCH_PHONEBOOKCONTACT_PENDING' :{
        return{
          ...state,
          loading:true,
          phonebook:{name:{}}
        }
      }

      case 'FETCH_PHONEBOOKCONTACT_FULFILLED':{
        return{
          ...state,
          phonebook:action.payload.data,
          errors:{},
          loading:false
        }
      }

      case 'UPDATE_PHONEBOOKCONTACT_PENDING':{
        return{
          ...state,
          loading:true
        }
      }

      case 'UPDATE_PHONEBOOKCONTACT_FULFILLED':{
        const phonebook = action.payload.data;
        return{
          ...state,
          phonebooks: state.phonebooks.map(item => item._id ===
          phonebook._id ? phonebook : item),
          errors:{},
          loading:false
        }
      }


      case 'UPDATE_PHONEBOOKCONTACT_REJECTED':{
        const data = action.payload.response.data;
        const {"name.first":first, "name.last":last,phone,email} = 
        data.errors;
        const errors = {global:data.message, name:{first,last},phone,email};
      

      return{
        ...state,
        errors:errors,
        loading:false
      }
    }

    case 'DELETE_PHONEBOOKCONTACT_FULFILLED':{
      const _id = action.payload.data._id;
      return{
        ...state,
        phonebooks:state.phonebooks.filter(item => item._id !==_id)
      }
    }



}



}