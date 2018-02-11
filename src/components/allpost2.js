import React, {Component} from 'react';
import Bar from './appbar'
import {Link} from 'react-router-dom';
import firebase from 'firebase'
import './component.css'


class Allpost2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: "",
            data: []
        }
        firebase
            .database()
            .ref("CompanyPosts")
            .on("child_added", (data) => {
                this.setState({
                    data: [
                        ...this.state.data,
                        data.val()
                    ]
                })
            })

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
    render() {
        console.log(this.state.data)
        return (
            <div>
                <Bar auth="logout"/>
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
                                                <a href="">
                                                    <Link to='./mainpanel'>Dashboard
                                                        <span className="glyphicon glyphicon-dashboard pull-right"></span>
                                                    </Link>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" className="active">All Post<span className="glyphicon glyphicon-heart pull-right"></span>
                                                </a>
                                            </li>

                                        </div>

                                    </ul>
                                </div>

                                <div className="content">
                                    <div className="col-md-12">
                                        <div className="panel panel-default">

                                            <div className="panel-body">
                                                {this
                                                    .state
                                                    .data
                                                    .map((val, ind) => {

                                                        return (
                                                            <div key={ind}>
                                                                <div className="all">
                                                                    <span>Company Name:{val.companyName}</span>
                                                                    <br/>
                                                                    <br/>

                                                                    <span>Company Email:{val.companyEmail}</span>
                                                                    <br/>
                                                                    <br/>

                                                                    <span>Company Phone:{val.companuPhone}</span>
                                                                    <br/>
                                                                    <br/>

                                                                    <span>Company Address:{val.companuAddress}</span>
                                                                    <br/>
                                                                    <br/>

                                                                    <span>Student Requeired:{val.studentRequired}</span>
                                                                  
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                            </div>
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

export default Allpost2;
