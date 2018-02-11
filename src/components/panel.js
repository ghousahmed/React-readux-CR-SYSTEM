import React, { Component } from 'react';
import {connect} from 'react-redux';
import StudentPanel from './studentpanel';
import CompanyPanel from './companypanel'
import firebase from 'firebase'
// import  Bar from './appbar'





class Panel extends Component {
    constructor(props){
        super(props)
        this.state = {
            profile: ""
        }
    }
    componentWillMount() {
        const uid = firebase.auth().currentUser.uid
        firebase.database().ref('/').child("User/"+uid).on("value",(data) => {
            console.log(data.val())
        })
    }
    render() {
        return (
            <div>
              
                {
                (this.props.profile === "Student")?
               <StudentPanel />
               :
               <CompanyPanel />
                }
               
            </div>
        )
    }
}

 function mapStateToProp(state){
    return({
        profile: state.root.profile
    })
}


export default connect(mapStateToProp,null)(Panel);
