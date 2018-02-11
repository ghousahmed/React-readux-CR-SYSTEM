import React, {Component} from 'react';
// import Bar from './appbar'
import {Link} from 'react-router-dom';
import firebase from 'firebase'
import './component.css'


class AdminPanel extends Component {
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
    delete(ind){
        this.state.data.splice(ind,1)
        this.setState({
            data: this.state.data.concat()
        })
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
              
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="wrapper">
                                <div className="side-bar">
                                    <ul>
                                        <li className="menu-head">

                                           
                                        </li>
                                        <div className="menu">
                                            <li>
                                                <a className="active" href="">
                                                   Student Post
                                                    <span className="glyphicon glyphicon-dashboard pull-right"></span>
                                                   
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" ><Link to='./allpostadmin'>Company Post<span className="glyphicon glyphicon-heart pull-right"></span></Link>
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
                                                                    <button onClick={this.delete.bind(this,ind)}>Delete</button>

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

export default AdminPanel;
