import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { Field, reduxForm } from 'redux-form';
//import { FormGroup, Label, Form, Button } from 'reactstrap';
//import { addexpense } from './AddExpenseAction';



class PrivateRoute extends React.Component
{  
    render()
    {
        console.log("From private route");
        console.log(this);
        
        return(<Route  render={(props) => (
            this.props.loginr.isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
        )} />
        );
        
    }
}


const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        loginr:state.loginr,
        signupr:state.signupr,
        expenser:state.expenser
    };
  }; 
PrivateRoute = connect(mapStateToProps )(PrivateRoute);
export default PrivateRoute;

/*
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true? <Component {...props} /> : <Redirect to='/login' />
    )} />
)


 <Route  render={(props) => (
                this.props.isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
            )} />
*/