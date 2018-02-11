import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as firebase from "firebase"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

 var config = {
    apiKey: "AIzaSyBzO38HpHoh7jIE9D2curFVHAHQjwMkMfg",
    authDomain: "index-83d18.firebaseapp.com",
    databaseURL: "https://index-83d18.firebaseio.com",
    projectId: "index-83d18",
    storageBucket: "index-83d18.appspot.com",
    messagingSenderId: "671568613729"
  };
  firebase.initializeApp(config);

const render = () => ReactDOM.render(
    <MuiThemeProvider>

    <App/>
</MuiThemeProvider>, document.getElementById('root'));

render();
