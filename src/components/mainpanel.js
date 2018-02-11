import React, { Component } from 'react';
import {connect} from 'react-redux';
import Panel from './panel';
import AdminPanel from './admin';
// import firebase from 'firebase';
import  Bar from './appbar'





class MainPanel extends Component {
   
    
    render() {
        return (
            <div>
                  <Bar auth="logout"/>
                {
                (this.props.profile === "Admin")?
               <AdminPanel />
               :
               <Panel />
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


export default connect(mapStateToProp,null)(MainPanel);
