import React, {Component} from 'react';
import Bar from './appbar'
import {Link} from 'react-router-dom';
import firebase from 'firebase'
import './component.css'

class AllpostAdmin extends Component {
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
                                        <li className="menu-head"></li>
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

                                                                    <span>Company Phone:{val.compnayPhone}</span>
                                                                    <br/>
                                                                    <br/>

                                                                    <span>Company Address:{val.companuAddress}</span>
                                                                    <br/>
                                                                    <br/>

                                                                    <span>Student Required:{val.studentRequired}</span>
                                                                    <br/>
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

export default AllpostAdmin;
