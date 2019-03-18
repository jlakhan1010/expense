import SIGNUP from './SignUpAction';

const signupReducer=(state={},action)=>
{
    switch(action.type)
    {
        case SIGNUP:
            return action.payload;
        default:
            return state;
    }
};
export default signupReducer;

