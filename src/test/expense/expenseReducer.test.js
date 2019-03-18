
import expenseReducer from '../../expense/expenseReducer';

describe('Expense Reducer at initial ' , () => {
    it('Should return initial state' , () => {
        
        expect(expenseReducer(undefined,{})).toEqual([]);
    });
    
});

describe('Expense Reducer ADD EDIT DELETE ' , () => {
    
    it('Should return new state having only given expense ADD initially' , () => {
       const expense= { amt: 120,created: "2019-03-14T10:57:09.778Z",desc: "water",
                        editing: false,expdate: "2019-03-20T00:00:00.000Z",
                        note: "jfbvbshvbsdjcbsjcbsjdcbjcbdscbhjd↵rgggerfv",user: "5c739d64e65b621ca661874b",
                        __v: 0,_id: "5c8a33858bab05646253929a"
                    };
        const newState = expenseReducer( undefined , {
                type:"ADD_EXPENSE",
                payload: expense
        });
        expect(newState).toEqual([expense])
    });
    
    it('Should return new state by adding given expense ADD' , () => {
        const expense= { amt: 8000,created: "2019-04-14T10:57:09.778Z",desc: "mobile",
                         editing: false,expdate: "2019-04-20T00:00:00.000Z",
                         note: "jfbvbshv ref  d dq wd efew few fwe few bjcbdscbhjd↵rgggerfv",user: "5c739d64e65b621ca661874b",
                         __v: 0,_id: "5c8a33858bab05646253929c"
                     };
        const state=[
                        { 
                            amt: 100,created: "2019-03-14T10:57:09.778Z",desc: "water",
                            editing: false,expdate: "2018-03-20T00:00:00.000Z",
                            note: "jfbvbshvbsdjcbsjcbsjdcbjcbdscbhjd↵rgggerfv",user: "5c739d64e65b621ca661874b",
                            __v: 0,_id: "5c8a33858bab05646253929a"
                        },
                        { 
                            amt: 200,created: "2018-03-14T10:57:09.778Z",desc: "lunch",
                            editing: false,expdate: "2019-03-20T00:00:00.000Z",
                            note: "dvds vvsv s s s vcssa c sv  vs ",user: "5c739d64e65b621ca661874b",
                            __v: 0,_id: "5c8a33858bab05646253929b"
                        }

                    ];
         const newState = expenseReducer( state , {
                 type:"ADD_EXPENSE",
                 payload: expense
         });
         const expectedState = [
                                    { 
                                        amt: 100,created: "2019-03-14T10:57:09.778Z",desc: "water",
                                        editing: false,expdate: "2018-03-20T00:00:00.000Z",
                                        note: "jfbvbshvbsdjcbsjcbsjdcbjcbdscbhjd↵rgggerfv",user: "5c739d64e65b621ca661874b",
                                        __v: 0,_id: "5c8a33858bab05646253929a"
                                    },
                                    { 
                                        amt: 200,created: "2018-03-14T10:57:09.778Z",desc: "lunch",
                                        editing: false,expdate: "2019-03-20T00:00:00.000Z",
                                        note: "dvds vvsv s s s vcssa c sv  vs ",user: "5c739d64e65b621ca661874b",
                                        __v: 0,_id: "5c8a33858bab05646253929b"
                                    },
                                    { 
                                        amt: 8000,created: "2019-04-14T10:57:09.778Z",desc: "mobile",
                                        editing: false,expdate: "2019-04-20T00:00:00.000Z",
                                        note: "jfbvbshv ref  d dq wd efew few fwe few bjcbdscbhjd↵rgggerfv",user: "5c739d64e65b621ca661874b",
                                        __v: 0,_id: "5c8a33858bab05646253929c"
                                    }
                                ];
         expect(newState).toEqual(expectedState);
     });

     it('Should return new state by deletinging given expense. DELETE' , () => {
        const state=[
                        { 
                            amt: 100,created: "2019-03-14T10:57:09.778Z",desc: "water",
                            editing: false,expdate: "2018-03-20T00:00:00.000Z",
                            note: "jfbvbshvbsdjcbsjcbsjdcbjcbdscbhjd↵rgggerfv",user: "5c739d64e65b621ca661874b",
                            __v: 0,_id: "5c8a33858bab05646253929a"
                        },
                        { 
                            amt: 200,created: "2018-03-14T10:57:09.778Z",desc: "lunch",
                            editing: false,expdate: "2019-03-20T00:00:00.000Z",
                            note: "dvds vvsv s s s vcssa c sv  vs ",user: "5c739d64e65b621ca661874b",
                            __v: 0,_id: "5c8a33858bab05646253929b"
                        }

                    ];
        const id = "5c8a33858bab05646253929b"
        const newState = expenseReducer( state , {
                type:"DELETE_EXPENSE",
                payload: id
        });
         const expectedState = [
                                    { 
                                        amt: 100,created: "2019-03-14T10:57:09.778Z",desc: "water",
                                        editing: false,expdate: "2018-03-20T00:00:00.000Z",
                                        note: "jfbvbshvbsdjcbsjcbsjdcbjcbdscbhjd↵rgggerfv",user: "5c739d64e65b621ca661874b",
                                        __v: 0,_id: "5c8a33858bab05646253929a"
                                    }
                                ];
         expect(newState).toEqual(expectedState);
     });


     it('Should return new state by updating given expense. EDIT-SUBMIT' , () => {
        const data= { 
                        amount: "300",
                        date: "2019-03-21",
                        description: "water",
                        id: "5c8a33858bab05646253929a",
                        note: "lj"
                     };
                     
        const state=[
                        { 
                            amt: 100,created: "2019-03-14T10:57:09.778Z",desc: "water",
                            editing: true,expdate: "2018-03-20T00:00:00.000Z",
                            note: "jfbvbshvbsdjcbsjcbsjdcbjcbdscbhjd↵rgggerfv",user: "5c739d64e65b621ca661874b",
                            __v: 0,_id: "5c8a33858bab05646253929a"
                        },
                        { 
                            amt: 200,created: "2018-03-14T10:57:09.778Z",desc: "lunch",
                            editing: false,expdate: "2019-03-20T00:00:00.000Z",
                            note: "dvds vvsv s s s vcssa c sv  vs ",user: "5c739d64e65b621ca661874b",
                            __v: 0,_id: "5c8a33858bab05646253929b"
                        }

                    ];
         const newState = expenseReducer( state , {
                 type:"EDIT_EXPENSE_SUBMIT",
                 payload: data
         });
         const expectedState = [
                        { 
                            amt: "300",created: "2019-03-14T10:57:09.778Z", desc : "water",
                            editing: false,expdate: "2019-03-21",
                            note: "lj",user: "5c739d64e65b621ca661874b",
                            __v: 0,_id: "5c8a33858bab05646253929a"
                        },
                      
                        { 
                            amt: 200,created: "2018-03-14T10:57:09.778Z",desc: "lunch",
                            editing: false,expdate: "2019-03-20T00:00:00.000Z",
                            note: "dvds vvsv s s s vcssa c sv  vs ",user: "5c739d64e65b621ca661874b",
                            __v: 0,_id: "5c8a33858bab05646253929b"
                        }

                    ];
         expect(newState).toEqual(expectedState);
     });

     
});

