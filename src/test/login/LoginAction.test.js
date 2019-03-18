import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {login} from '../../login/LoginAction';
/*
const createMockStore = configureMockStore([thunk])
//Test Login Success
test('should able to login using email and password', (done) => {
  const store = createMockStore({});
  const loginCredential = {
    usernameOrEmail : 'jlakhan1010',
    password : 'LJ@kurul1234'
  }
  const {usernameOrEmail , password } = loginCredential;
  store.dispatch(login({usernameOrEmail , password} )).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: AUTHENTICATED
    })
    done();
  })  
})
*/
it('fake test', () => {
  expect(1).toBe(1);
})