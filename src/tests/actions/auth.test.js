import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, startLogin, logout, startLogout } from './../../actions/auth';
// import database from './../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should generate login action object', () => {
    const uid = '123abc';
    const action = login(uid);
    expect(action.uid).toBe(uid);
    // expect(action).toEqual({
    //     type: 'LOGIN',
    //     uid
    // }); // also works
});

// test('should login from database', done => {
//     const store = createMockStore({});
    
// });

test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({ type: 'LOGOUT' });
});

// test('should logout from database', done => {
//     const store = createMockStore({});
// });

