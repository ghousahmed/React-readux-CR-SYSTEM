import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import image from '../images/ipm_logo.png'
import firebase from 'firebase'
import {Link} from 'react-router-dom';

const style ={
  backgroundColor:"#d9853b"
}
class Bar extends Component {
    constructor(props){
        super(props)
        this.state = {
            auth: this.props.auth
        }
    }
    
     signOut(){
     firebase
        .auth()
        .signOut()
        .then(function () {
            // Sign-out successful.
        })
        .catch(function (error) {
            // An error happened.
        });
    }
 
    render() {
        return (
          
                    <div>
                        <AppBar iconElementLeft={<Link to='/'><img src={image} alt="img" height="50" width="50"/></Link>} title="CR SYSTEM" style={style} iconElementRight={<FlatButton label={this.state.auth}  onClick={this.signOut.bind(this)} />} />
                    </div>
          
        )
    }
}


export default Bar;