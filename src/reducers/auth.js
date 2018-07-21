export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid // add the prop
            };
        case 'LOGOUT':
            return {}; // wipe out the prop
        default:
            return state; // current state value 
    }
};