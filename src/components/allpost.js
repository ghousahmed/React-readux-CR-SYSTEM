import React, {Component} from 'react';
import Bar from './appbar'
import {Link} from 'react-router-dom';
import firebase from 'firebase'
import './component.css'

class Allpost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: "",
            data: []
        }
        firebase
            .database()
            .ref("Resume")
            .on("child_added", (data) => {
                this.setState({
                    data: [
                        ...this.state.data,
                        data.val()
                    ]
                })
            })

    }
    delete(ind) {
        this
            .state
            .data
            .splice(ind, 1)
        this.setState({
            data: this
                .state
                .data
                .concat()
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
                                                                    <span>Name:{val.fullName}</span>
                                                                    <br/>
                                                                    <br/>

                                                                    <span>Father Name:{val.fatherName}</span>
                                                                    <br/>
                                                                    <br/>

                                                                    <span>Phone:{val.phone}</span>
                                                                    <br/>
                                                                    <br/>

                                                                    <span>CNIC:{val.CNIC}</span>
                                                                    <br/>
                                                                    <br/>

                                                                    <span>Qualification:{val.qualification}</span>
                                                                    <br/>
                                                                    <br/>

                                                                    <span>Age:{val.age}</span>
                                                                    <br/>
                                                                    <br/>

                                                                    <span>insituteName:{val.insituteName}</span>
                                                                    <br/>
                                                                    <button
                                                                        onClick={this
                                                                        .delete
                                                                        .bind(this, ind)}>Delete</button>

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

export default Allpost;
