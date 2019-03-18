import {AUTHENTICATED, UN_AUTHENTICATED } from './LoginAction';


const loginReducer=(state={isAuthenticated:localStorage.getItem('Token')?true:false},action)=>{
    switch(action.type)
    {
        case AUTHENTICATED:
          return {...state,isAuthenticated:true};
        case UN_AUTHENTICATED:
        return {...state,isAuthenticated:false};
        default:
            return state;
    }
};
export default loginReducer;
