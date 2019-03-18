import axios from 'axios';
import { toast } from 'react-toastify';
import {IP} from '../../app/Constants';
export const DISPLAY_EXPENSE='DISPLAY_EXPENSE';
export const editExpense= (id,history)=>{
    

    return (dispatch)=>{
        
            dispatch({
                type:'EDIT_EXPENSE',
                payload:id 
            });

    }
       
};
export const editExpenseSubmit= (userData,history)=>{
    console.log(userData);
    const data={
        desc: userData.description,
        amt: userData.amount,
        expdate:userData.date,
        note: userData.note
    }
    const url = IP+'api/expences/'+userData.id+'/?token='+localStorage.getItem('Token');
    return (dispatch)=>{
        return axios.put(url,data)
        .then((response)=>{
            dispatch({
                type:'EDIT_EXPENSE_SUBMIT',
                payload:userData
            });
            history.push('/dashboard');  
            toast.success("Edited Successfully");   
        })
        .catch((error)=>{
            toast.error("Edit failed");
        });
    }
};