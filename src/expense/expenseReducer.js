import axios from 'axios';

import ADD_EXPENSE from './add/AddExpenseAction';
import DELETE_EXPENSE from './delete/DeleteExpenseAction';
//import EDIT_EXPENSE from './edit/EditExpenseAction';
import DISPLAY_EXPENSE from './dashboard/DashBoardAction';



const expenseReducer=(state=[],action)=>
{
    
    switch(action.type)
    {
        
        case 'ADD_EXPENSE':
            state.push(action.payload);
            return state;
            //return {...state, action.payload};  
        case 'DISPLAY_EXPENSE':
            
          //  action.payload.map((e)=>state.push(e));
            return state.length==0?state=state.concat(action.payload):state;
        case 'DELETE_EXPENSE':
            return state.filter(e=>e["_id"]!==action.payload);
        case 'EDIT_EXPENSE':
               
            return state.map((expense)=>expense["_id"]===action.payload ? {...expense,editing:!expense["editing"]}:expense);
        case 'EDIT_EXPENSE_SUBMIT':
            return state.map((e)=>e["_id"]===action.payload.id?{...e,editing:!e["editing"],amt:action.payload.amount,desc:action.payload.description,expdate:action.payload.date,note:action.payload.note}:e)
        default :
       // console.log("from ae reducer default");

            return state;
    }
};
export default expenseReducer;