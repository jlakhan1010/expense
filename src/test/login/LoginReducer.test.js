
import loginReducer from '../../login/LoginReducer';

describe('Login Reducer at initial ' , () => {
    it('Should return initial state' , () => {
        expect(loginReducer(undefined,{})).toEqual({isAuthenticated:false});
    });
    
});

describe('Loginn Reducer to check AUTHENTICATED or UN_AUTHENTICATED ' , () => {
    
    it('Should return new state having isAuthenticated:true ' , () => {
        const newState = loginReducer( undefined , {
                type:"AUTHENTICATED"
        });
        expect(newState).toEqual({isAuthenticated:true})
    });
    
    it('Should return new state having isAuthenticated:false' , () => {
         const newState = loginReducer( undefined , {
                 type:"UN_AUTHENTICATED"
         });
         expect(newState).toEqual({isAuthenticated:false});
     });
    
});
