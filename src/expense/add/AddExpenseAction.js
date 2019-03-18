import axios from 'axios';
import { toast } from 'react-toastify';
import {IP} from '../../app/Constants';
export const ADD_EXPENSE='ADD_EXPENSE';
export const addexpense= (userData,history)=>{
    const data = {
        desc: userData.description,
        amt: userData.amount,
        expdate:userData.date,
        note: userData.note
    }

    const url = IP+'api/expences?token='+localStorage.getItem('Token');
    return (dispatch)=>{
        return axios.post(url,data)
        .then((response)=>{
            dispatch({
                type:'ADD_EXPENSE',
                payload:response.data 
            });

            history.push('/dashboard');   
            toast.success("Expense added successfully!!!");
        })
        .catch((error)=>{
            toast.error("Failed!!!");  
        });
    }
    
};


