import React from 'react';

import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { ToastContainer } from 'react-toastify';
import { FormGroup, Label, Form, Button } from 'reactstrap';
import { addexpense } from './AddExpenseAction';

//Form validation constants
import { required, alphaNumeric, minValue1 } from '../../app/Constants';
import  renderField from '../../app/RenderField';
import renderTextAreaField from '../../app/renderTextAreaField';

class AddExpense extends React.Component
{  
    submit=(values)=>
    {  
        this.props.dispatch(addexpense(values, this.props.history));
    }
    render()
    {
       
      const { handleSubmit } = this.props;
        //take handlesubmit method here using this
        return(
            <div >
                <ToastContainer />
                <div className="header">
                    <div className="container" style={{width:'700px'}} >
                        <h3 className="d-flex ">
                            Add Expense
                        </h3>
                    </div>
                </div>
                <div className="container" style={{width:'700px'}}>
                    
                    <Form onSubmit={handleSubmit(this.submit)} className="ui form">
                        <FormGroup>
                            <Field 
                                name="description" 
                                type="text" 
                                component={renderField}
                                placeholder="Description"
                                validate={[required,alphaNumeric]}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Field 
                                className="form-control" 
                                name="amount" 
                                type="number" 
                                component={renderField}
                                placeholder="Amount"
                                validate={[required, minValue1 ]}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Field 
                                className="form-control" 
                                name="date" 
                                type="date" 
                                component={renderField}
                                validate={[required]}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Field 
                                className="form-control" 
                                name="note" 
                                type="text" 
                                component={renderTextAreaField}
                                placeholder="Add a note for your expense (optional)"
                            />
                        </FormGroup>
                        <Button className="ui button primary">Save Expense </Button>
                    </Form> 
                </div>
            </div>          
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

  
  AddExpense = connect(mapStateToProps )(AddExpense);


  export default reduxForm({
      form:'addexpenseForm'
  })(AddExpense);

