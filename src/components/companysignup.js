import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CompanySignupUser} from '../store/action/action';
import Bar from './appbar'
import firebase from 'firebase'
import Paper from 'material-ui/Paper';

const style = {
    height: 500,
    width: 500,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
};

class CompanySignup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            email: "",
            password: "",
            profile: "Company",
            phone: "",
            fileTitle: ""
        }

    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(ev) {
        ev.preventDefault()
        let fileTitle = this.state.fileTitle

        firebase
            .storage()
            .ref()
            .child('sweet_gifs/' + fileTitle)
            .getDownloadURL()
            .then(url => {
                let data = {
                    userName: this.state.userName,
                    email: this.state.email,
                    password: this.state.password,
                    profile: this.state.profile,
                    auth: "Logout",
                    imageUrl: url
                }
                this
                    .props
                    .CompanySignupUser(data);
            })
    }
    uploadImage(ev) {
        let file = ev.target.files[0];
        let fileTitle = ev.target.files[0].name;

        this.setState({fileTitle: fileTitle})

        firebase
            .storage()
            .ref('sweet_gifs/' + fileTitle)
            .put(file);
    }

    render() {
        console.log(this.props.userName + this.props.password)
        return (
            <div>
                <Bar/>
                <center>
                    <div className="container">
                        <Paper style={style} zDepth={2}>

                            <form
                                onSubmit={this
                                .submit
                                .bind(this)}>
                                <h1>Company Signup</h1>
                                <input
                                    type="text"
                                    name="userName"
                                    onChange={this
                                    .handleChange
                                    .bind(this)}
                                    placeholder="Company Name"/>
                                <br/>
                                <br/>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={this
                                    .handleChange
                                    .bind(this)}
                                    placeholder="Company Email"/>
                                <br/>
                                <br/>
                                <input
                                    type="number"
                                    name="phone"
                                    onChange={this
                                    .handleChange
                                    .bind(this)}
                                    placeholder="Company Phone"/>
                                <br/>
                                <br/>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={this
                                    .handleChange
                                    .bind(this)}
                                    placeholder="password"/>
                                <br/>
                                <input
                                    type="file"
                                    onChange={this
                                    .uploadImage
                                    .bind(this)}/>
                                <br/>
                                <br/>
                                <button type="submit">Signup</button>
                                <br/>
                                <span>You have already account</span>
                                <Link to='./studentlogin'>
                                    <button type="submit">Login</button>
                                </Link>

                            </form>
                        </Paper>
                    </div>
                </center>
            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({userName: state.root.userName, password: state.root.password})
}
function mapDispatchToProp(dispatch) {
    return ({
        CompanySignupUser: (data) => {
            dispatch(CompanySignupUser(data))
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(CompanySignup);
