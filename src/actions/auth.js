import { firebase, googleAuthProvider } from './../firebase/firebase';

export const login = uid => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => { // name export; asynchronous action
    return () => { 
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => { // return a function
        return firebase.auth().signOut(); // use return to continue the promise chain
    };
};