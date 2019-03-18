import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, Label, Form, Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { login } from './LoginAction';

//Form validation constants
import { required, alphaNumeric } from '../app/Constants';

import  renderField from '../app/RenderField';


export class Login extends React.Component
{
    submit=(formValues)=>
    {
        const {usernameOrEmail,password}=formValues;
        this.props.dispatch(login({usernameOrEmail,password}, this.props.history)); 
    }
    render()
    {
        const { handleSubmit } = this.props;
        return(
            <div className="container" data-test="login">
                <ToastContainer />
                <div className="d-block h-100 ">
                    <div className="loginBox" data-test="loginbox">
                        <h3 className="d-flex justify-content-center">Login to your Account</h3>
                        <br />
                        <Form onSubmit={handleSubmit(this.submit)} className="ui form">
                            <FormGroup>
                                <Field
                                    name="usernameOrEmail"
                                    type="text"
                                    component={renderField}
                                    placeholder="Username"
                                    validate={[required]}
                                    warn={alphaNumeric}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Field 
                                    name="password"   
                                    type="password" 
                                    component={renderField}
                                    placeholder="Password"
                                    validate={[required]}
                                />
                            </FormGroup>
                            <button className="ui button primary btn-block">SignIn</button>

                            <Link to="/signup" className="d-flex justify-content-end text-success">Create new account</Link>
                        </Form> 
                    </div>
                </div>
            </div>         
        );
    }
}



  export default reduxForm({
      form:'loginForm',
     // validate
  })(Login);

