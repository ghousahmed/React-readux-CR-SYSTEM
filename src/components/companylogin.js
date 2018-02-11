import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CompanySigninUser} from '../store/action/action';
import Bar from './appbar'
import Paper from 'material-ui/Paper';

const style = {
    height: 500,
    width: 500,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
};

class CompanyLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            profile: "Company"
        }

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(ev) {
        ev.preventDefault()
        let data = {
            email: this.state.email,
            password: this.state.password,
            profile: this.state.profile,
            auth: "Logout"
        }
        this
            .props
            .CompanySigninUser(data);
    }
    signup() {
        this
            .props
            .history
            .push('/signup')
    }
    render() {
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
                                <h1>Company Login</h1>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={this
                                    .handleChange
                                    .bind(this)}
                                    placeholder="Email"/>
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
                                <button type="submit">Signin</button>
                                <Link to='./companysignup'>
                                    <button type="submit">Register</button>
                                </Link>

                            </form>
                        </Paper>
                        {/* <button onClick={this.signup.bind(this)}>Go</button> */}
                    </div>

                </center>
            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({userName: state.root.userName})
}
function mapDispatchToProp(dispatch) {
    return ({
        CompanySigninUser: (data) => {
            dispatch(CompanySigninUser(data))
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(CompanyLogin);
