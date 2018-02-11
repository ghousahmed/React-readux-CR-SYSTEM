import React, {Component} from 'react';
import {SignOut} from '../store/action/action';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import firebase from 'firebase'
// import Bar from './appbar'
import './component.css'
// import Resume from './resume'

class StudentPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: "",
            name: "",
            email: "",
            phone: "",
            flag: "true",
            fullName: "",
            fatherName: "",
            CNIC: "",
            phoneNum: "",
            age: "",
            qualification: "",
            insituteName: ""
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
                        .Phone
                })
            })
    }
    resume() {
        alert("hh")
        this.setState({flag: "false"})
    }
    handleChange(ev){
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    submit(ev){
        ev.preventDefault()
        let data = {
            fullName: this.state.fullName,
            fatherName: this.state.fatherName,
            phonNum: this.state.phoneNum,
            age: this.state.age,
            CNIC: this.state.CNIC,
            qualification: this.state.qualification,
            insituteName: this.state.insituteName
        }
        console.log(data)
        let uid = firebase.auth().currentUser.uid
        firebase.database().ref("Resume/"+uid).set(data)
        
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
                                           <a href=""> <Link to='./allpost2'>Company Post<span className="glyphicon glyphicon-heart pull-right"></span></Link>
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
                                                <h1 className="pa">Student Panel</h1>
                                                <h2 className="name">Name:<span>{this.state.name}</span>
                                                </h2>
                                                <h3 className="email">Email:<span>{this.state.email}</span>
                                                </h3>
                                                <h4 className="phone">Phone:<span>{this.state.phone}</span>
                                                </h4>
                                                <form onSubmit={this.submit.bind(this)}>
                                                    <label>Full Name:</label>
                                                    <input type="text" name="fullName" onChange={this.handleChange.bind(this)} placeholder="Full Name"/>
                                                    <br/>
                                                    <label>Father Name:</label>
                                                    <input type="text" name="fatherName" onChange={this.handleChange.bind(this)} placeholder="Father Name"/>
                                                    <br/>
                                                    <label>CNIC:</label>
                                                    <input type="number" name="CNIC" onChange={this.handleChange.bind(this)} placeholder="CNIC"/>
                                                    <br/>

                                                    <label>Phone:</label>
                                                    <input type="number" name="phoneNum" onChange={this.handleChange.bind(this)} placeholder="Phone"/>
                                                    <br/>

                                                    <label>Age:</label>
                                                    <input type="number" name="age" onChange={this.handleChange.bind(this)} placeholder="Age"/>
                                                    <br/>

                                                    <label>Qualification:</label>
                                                    <input type="text" name="qualification" onChange={this.handleChange.bind(this)} placeholder="Qualification"/>
                                                    <br/>

                                                    <label>Insitute Name:</label>
                                                    <input type="text" name="insituteName" onChange={this.handleChange.bind(this)} placeholder="Insitute Name"/>
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

function mapStateToProp(state) {
    return ({userName: state.root.userName})
}
function mapDispatchToProp(dispatch) {
    return ({
        SignOut: () => {
            dispatch(SignOut())
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(StudentPanel)
