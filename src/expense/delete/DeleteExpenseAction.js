import axios from 'axios';
import { toast } from 'react-toastify';
import {IP} from '../../app/Constants';

export const DISPLAY_EXPENSE='DISPLAY_EXPENSE';
export const deleteExpense= (id)=>{
   
    const url = IP+'api/expences/'+id+'/?token='+localStorage.getItem('Token');
    return (dispatch)=>{
        return axios.delete(url)
        .then((response)=>{
            dispatch({
                type:'DELETE_EXPENSE',
                payload:id
            });
            toast.success("Deleted");
        })
        .catch((error)=>{
           toast.success("Delete failed");
        });
    }
    
};