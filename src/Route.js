import React, {Component} from 'react';
import {Route, Router, Switch, Redirect} from 'react-router-dom';
import Home from './components/home';
// import StudentPanel from './components/studentpanel';
// import CompanyPanel from './components/companypanel';
import StudentSignup from './components/studentsignup';
import CompanySignup from './components/companysignup';
import StudentLogin from './components/studentlogin';
import CompanyLogin from './components/companylogin';
import history from '../src/history'
import firebase from 'firebase'
import Notfound from './components/notFound';
// import Error from './components/error'
import MainPanel from './components/mainpanel'
import Admin from './components/adminlogin'
import Allpost from './components/allpost'
import Allpost2 from './components/allpost2'
import AllpostAdmin from './components/allpostadmin'

function PrivateRoute({
    component: Component,
    authed,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
            ? <Component {...props}/>
            : <Redirect
                to={{
                pathname: '/',
                state: {
                    from: props.location
                }
            }}/>}/>
    )
}
function PrivateRoute3({
    component: Component,
    authed,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
            ? <Component {...props}/>
            : <Redirect
                to={{
                pathname: '/',
                state: {
                    from: props.location
                }
            }}/>}/>
    )
}
function PrivateRoute4({
    component: Component,
    authed,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
            ? <Component {...props}/>
            : <Redirect
                to={{
                pathname: '/',
                state: {
                    from: props.location
                }
            }}/>}/>
    )
}
function PrivateRoute5({
    component: Component,
    authed,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
            ? <Component {...props}/>
            : <Redirect
                to={{
                pathname: '/',
                state: {
                    from: props.location
                }
            }}/>}/>
    )
}

/*function PrivateRoute2({
    component: Component,
    authed,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
            ? <Component {...props}/>
            : <Redirect
                to={{
                pathname: '/',
                state: {
                    from: props.location
                }
            }}/>}/>
    )
}*/

function PublicRoute({
    component: Component,
    authed,
    ...rest
}) {
    return (

        <Route
            {...rest}
            render={(props) => authed === false
            ? <Component {...props}/>
            : <Redirect to='/mainpanel'/>}/>

    )
}

class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authed: false
        }

    }
    componentDidMount() {
        let that = this
        firebase
            .auth()
            .onAuthStateChanged(function (user) {
                if (user) {
                    that.setState({authed: true})
                } else {
                    that.setState({authed: false})
                }
            });
    }
    

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <PrivateRoute
                        authed={this.state.authed}
                        path="/mainpanel"
                        component={MainPanel}/>
                    <PrivateRoute3 authed={this.state.authed} path='/allpost' component={Allpost}/>
                    <PrivateRoute4
                        authed={this.state.authed}
                        path='/allpost2'
                        component={Allpost2}/>
                        <PrivateRoute5
                        authed={this.state.authed}
                        path='/allpostadmin'
                        component={AllpostAdmin}/>
                    <PublicRoute
                        authed={this.state.authed}
                        path="/studentlogin"
                        component={StudentLogin}/>
                    <PublicRoute
                        authed={this.state.authed}
                        path="/companylogin"
                        component={CompanyLogin}/>

                    <PublicRoute
                        authed={this.state.authed}
                        path="/studentsignup"
                        component={StudentSignup}/>
                    <PublicRoute
                        authed={this.state.authed}
                        path="/companysignup"
                        component={CompanySignup}/>
                    <PublicRoute authed={this.state.authed} path="/admin" component={Admin}/>

                    <Route path="*" component={Notfound}/>

                </Switch>
            </Router>
        )
    }

}

// function mapStateToProp(state) {
//     return ({profile: state.root.profile})
// }

export default Routers;
