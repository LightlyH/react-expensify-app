import authReducer from './../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };
    const state = authReducer({}, action); // can set original state to whatever you like
    expect(state).toEqual({
        uid: action.uid
    });
    // expect(state.uid).toBe(action.uid); // also works
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: '456asd' }, action);
    expect(state).toEqual({});
});
