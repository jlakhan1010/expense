import axios from 'axios';
import displayExpense from '../expense/dashboard/DashBoardAction';
import {IP} from '../app/Constants';
import { ToastContainer, toast } from 'react-toastify';

export const LOGIN='LOGIN';
export const AUTHENTICATED='AUTHENTICATED';
export const AUTHENTICATION_ERROR='AUTHENTICATION_ERROR';
export const UN_AUTHENTICATED='UN_AUTHENTICATED';

export const login= ({usernameOrEmail,password},history)=>{
 
    const url = IP+'api/auth/signin';
    
    return (dispatch)=>{
        return axios.post("http://192.168.0.112:3010/api/auth/signin",{usernameOrEmail,password})
        .then((response)=>{
          localStorage.setItem('User',JSON.stringify(response.data.user));
          localStorage.setItem('Token',response.data.token);

          dispatch({
            type:AUTHENTICATED
          });
          
          history.push('/dashboard'); 
          toast.success("Login Successfull!!!");  
        })
        .catch((error)=>{
          toast.error("Login failed!!! Username or password incorrect....");
        });
    };
};


export const logout= (history)=>{
   
    localStorage.clear();
    return(dispatch)=>{
      return dispatch({
        type:UN_AUTHENTICATED
      })
    }
  
};




