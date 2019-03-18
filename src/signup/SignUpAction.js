import axios from 'axios';
import { toast } from 'react-toastify';
export const SIGNUP='SIGNUP';
import { IP } from '../app/Constants';

export const signUp= ({firstName,lastName,username,email,phone,password},history)=>{
    
   
    const url = IP+'api/auth/signup';
    return (dispatch)=>{
        return axios.post(url,{firstName,lastName,username,email,phone,password})
        .then((response)=>{

            history.push('/login'); 
            toast.success("User created successfully!!!");  
            
        })
        .catch((error)=>{
            toast.error("Signup failed!!!");  
        });
    };
};

