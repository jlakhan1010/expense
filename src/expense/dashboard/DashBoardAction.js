import axios from 'axios';
import {IP} from '../../app/Constants';
export const DISPLAY_EXPENSE='DISPLAY_EXPENSE';
export const displayExpense= ()=>{
    const url = IP+'api/expences?token='+localStorage.getItem('Token');
    return (dispatch)=>{
        return axios.get(url)
        .then((response)=>{
            dispatch({
                type:DISPLAY_EXPENSE,
                payload:response.data 
            });    
        })
        .catch((error)=>{history.pushState('/')});
    }
    
};
