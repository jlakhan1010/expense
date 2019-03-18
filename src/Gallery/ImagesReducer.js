import axios from 'axios';


const imagesReducer=(state=[],action)=>
{
    switch(action.type)
    {
        case 'ADD_IMAGE':
            state? state.push(action.payload) : state = [ action.payload] ;
            localStorage.setItem('myImages',JSON.stringify(state));
            return state;
            //return {...state, action.payload};  
     
        case 'DELETE_IMAGE':
        console.log("From delete ir");
            state = state.filter(img=>img["link"]!==action.payload);
            localStorage.setItem('myImages',JSON.stringify(state));
            return state;
        case 'DISPLAY_IMAGE':
            return state.length==0?state=action.payload : state;
        default :
            return state;
    }
};
export default imagesReducer;