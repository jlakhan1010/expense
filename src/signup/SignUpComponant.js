import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, Label, Form, Button } from 'reactstrap';
import {signUp } from './SignUpAction';
import  renderField from '../app/RenderField';
//Form validation constants
import { required, alphaNumeric, email, alphabetic, minLength6, phoneNumber } from '../app/Constants';

class SignUp extends React.Component
{
    submit=(formValues)=>
    {
        const {firstName,lastName,username,email,phone,password}=formValues;
        //console.log(this.props);
        this.props.dispatch(signUp({firstName,lastName,username,email,phone,password},this.props.history));
    }
    render()
    {
        const { handleSubmit } = this.props;
        return(
            <div className="ui container ">
                <ToastContainer />
                    <div className="loginBox">
                        <h3 className="d-flex justify-content-center">Create new Account</h3>
                        <Form onSubmit={handleSubmit(this.submit)} className="ui form">
                            <FormGroup>
                                <Field 
                                    name="firstName"  
                                    type="text"                                         
                                    component={renderField}
                                    placeholder="First name"
                                    validate={[required,alphabetic]}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Field 
                                    name="lastName"  
                                    type="text" 
                                    component={renderField}
                                    placeholder="Last name"
                                    validate={[required,alphabetic]}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Field 
                                    name="username"  
                                    type="text" 
                                    component={renderField}
                                    placeholder="Username"
                                    validate={[required, alphaNumeric]}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Field 
                                    name="email"  
                                    type="email" 
                                    component={renderField}
                                    placeholder="Email-ID"
                                    validate={[required,email]}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Field 
                                    name="phone"  
                                    type="number" 
                                    component={renderField}
                                    placeholder="Mobile Number"
                                    validate={[required,phoneNumber]}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Field 
                                    name="password"  
                                    type="password" 
                                    component={renderField}
                                    placeholder="Password"
                                    validate={[required, minLength6]}
                                />
                            </FormGroup>
                            <button className="ui button primary btn-block">SIGNUP </button>
                            <Link to="/login" className="d-flex justify-content-end text-success">Already have an account...?</Link>
                        </Form> 
                    </div>
               
            </div>          
        );
    }
}

  export default reduxForm({
      form:'signupForm'
  })(SignUp);

