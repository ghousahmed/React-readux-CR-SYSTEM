import React, { Component } from 'react';
import { SignOut } from '../store/action/action';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import  Bar from './appbar'
import firebase from 'firebase'




class CompanyPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            image: "",
             name: "",
            email: "",
            phone: "",
            companyName: "",
            companyEmail: "",
            companyPhone: "",
            companyAddress: "",
            studentRequired: ""
        }
    }
    componentWillMount() {
        let that = this
        let uid = firebase
            .auth()
            .currentUser
            .uid
        firebase
            .database()
            .ref('/')
            .child("Users/" + uid)
            .on("value", (data) => {
                that.setState({
                    image: data
                        .val()
                        .imageUrl,
                    name: data
                        .val()
                        .userName,
                    email: data
                        .val()
                        .email,
                    phone: data
                        .val()
                        .phone
                })
            })
    }
     handleChange(ev){
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    submit(ev){
        ev.preventDefault()
        let data = {
          companyName: this.state.companyName,
          companyPhone: this.state.companyPhone,
          companyEmail: this.state.companyEmail,
          companuAddress: this.state.companyAddress,
          studentRequired: this.state.studentRequired
        }
        console.log(data)
        let uid = firebase.auth().currentUser.uid
        firebase.database().ref("/").child("CompanyPosts/"+uid).set(data)
    }

    render() {
        return (
             <div>
                <div className="container">
                    <div className="row">
                        <div className="wrapper">
                            <div className="side-bar">
                                <ul>
                                    <li className="menu-head">

                                        <img className="img" src={this.state.image} alt="img"/>
                                    </li>
                                    <div className="menu">
                                        <li>
                                            <a href="" className="active">Dashboard
                                                <span className="glyphicon glyphicon-dashboard pull-right"></span>
                                            </a>
                                        </li>
                                        <li>
                                           <a href=""> <Link to='./allpost'>Student Post<span className="glyphicon glyphicon-heart pull-right"></span></Link>
                                           </a>
                                        </li>

                                    </div>

                                </ul>
                            </div>

                            <div className="content">
                                <div className="col-md-12">
                                    <div className="panel panel-default">

                                        <div className="panel-body">
                                            <center>
                                                <h1 className="pa">Company Panel</h1>
                                                <h2 className="name">Company Name:<span>{this.state.name}</span>
                                                </h2>
                                                <h3 className="email">Company Email:<span>{this.state.email}</span>
                                                </h3>
                                                <h4 className="phone">Company Phone:<span>{this.state.phone}</span>
                                                </h4>
                                                <form onSubmit={this.submit.bind(this)}>
                                                    <label>Company Name:</label>
                                                    <input type="text" name="companyName" onChange={this.handleChange.bind(this)} placeholder="companyName"/>
                                                    <br/>
                                                    <label>Company Phone:</label>
                                                    <input type="number" name="companyPhone" onChange={this.handleChange.bind(this)} placeholder="companyPhone"/>
                                                    <br/>
                                                      <label>Company Email:</label>
                                                     <input type="email" name="companyEmail" onChange={this.handleChange.bind(this)} placeholder="companyEmail"/>
                                                    <br/>
                                                      <label>Company Address:</label>
                                                     <input type="text" name="companyAddress" onChange={this.handleChange.bind(this)} placeholder="companyAddress"/>
                                                    <br/>
                                                      <label>Student Reqeuired:</label>
                                                     <input type="text" name="studentRequired" onChange={this.handleChange.bind(this)} placeholder="studentRequired"/>
                                                    <br/>
                                                    <input type="submit" value="submit"/>

                                                </form>
                                            </center>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

 function mapStateToProp(state){
    return({
        userName: state.root.userName
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        SignOut: () => { dispatch(SignOut()) }
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(CompanyPanel);
