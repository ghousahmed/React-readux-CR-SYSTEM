import ActionTypes from '../constant/constant';
import firebase from 'firebase'
// import history from '../../history'

// Initialize Firebase

export function changeUserName() {
    return dispatch => dispatch({type: ActionTypes.USERNAME, payload: 'Ali'})

}

export function StudentSigninUser(user) {
    console.log(user)
               

    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(function (result) {
          
            console.log(result)

        })
        .catch(function (error) {
            console.log(error)
        });

    return dispatch => dispatch({type: ActionTypes.StudentSigninUser, payload: user})

}
export function CompanySigninUser(user) {
    console.log(user)
    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(function (result) {
           

            console.log(result)
        })
        .catch(function (error) {
            console.log(error)
        });

    return dispatch => dispatch({type: ActionTypes.CompanySigninUser, payload: user})

}
export function SigninAdmin(user) {
    console.log(user)

    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(function (result) {
           

            console.log(result)
        })
        .catch(function (error) {
            console.log(error)
        });

    return dispatch => dispatch({type: ActionTypes.SigninAdmin, payload: user})

}

export function StudentSignupUser(user) {
    console.log(user)
    firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(function (result) {
            firebase
                .database()
                .ref('/')
                .child("Users/" + result.uid)
                .set(user)
            console.log(result)
        })
        .catch(function (error) {
            console.log(error)

            
        });
   

    return dispatch => dispatch({type: ActionTypes.StudentSignupUser, payload: user})

}
export function CompanySignupUser(user) {
    firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(function (result) {
            firebase
                .database()
                .ref('/')
                .child("Users/" + result.uid)
                .set(user)
            console.log(result)
        })
        .catch(function (error) {
            console.log(error)

            // Handle Errors here. ...
        });
    // history.push('/signup')

    return dispatch => dispatch({type: ActionTypes.SigninUser, payload: user})

}

export function SignOut() {
    firebase
        .auth()
        .signOut()
        .then(function () {
            // Sign-out successful.
        })
        .catch(function (error) {
            // An error happened.
        });

    return dispatch => dispatch({type: ActionTypes.SignOut})

}