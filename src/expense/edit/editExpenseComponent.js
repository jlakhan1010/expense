import React from 'react';

import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { ToastContainer } from 'react-toastify';
import { FormGroup, Label,  Button,  FormText} from 'reactstrap';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { editExpenseSubmit } from './EditExpenseAction';
//import { addexpense } from './AddExpenseAction';
//Form validation constants
import { required, alphaNumeric, minValue1 } from '../../app/Constants';


class EditExpenseComponent extends React.Component
{  
    constructor(props) {
        super(props);
        const expenses=this.props.expenser;
        var expenseToEdit;
        expenses.map((e)=>e.editing?expenseToEdit=e:e);
        this.state = {
            id:expenseToEdit._id,
            description: expenseToEdit.desc,
            amount:expenseToEdit.amt,
            date:expenseToEdit.expdate.substring(0, 10),
            note:expenseToEdit.note
        };
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleNoteChange = this.handleNoteChange.bind(this);
    }
    handleDescriptionChange(event) 
    {
        event.preventDefault();
        this.setState({description: event.target.value});
    }
    handleAmountChange(event) 
    {
        event.preventDefault();
        this.setState({amount: event.target.value});
    }
    handleDateChange(event) 
    {
        event.preventDefault();
        this.setState({date: event.target.value});
    }
    handleNoteChange(event) 
    {
        event.preventDefault();
        this.setState({note: event.target.value});
    }
    
    submit=()=>
    {  
        this.props.dispatch(editExpenseSubmit(this.state, this.props.history));
    }

    render()
    {  
        const { handleSubmit } = this.props;
        return(
            <div >
                <ToastContainer />
                <div className="header">
                    <div className="container" style={{width:'700px'}}>
                        <h3 className="d-flex ">
                            Edit Expense
                        </h3>
                    </div>
                </div>
                <div className="container" style={{width:'700px'}}>
                    <Form onSubmit={handleSubmit(this.submit)} className="ui form">
                        
                        <FormGroup>
                            <br />
                            <Input 
                                type="text" 
                                id="description" 
                                value={this.state.description}
                                validations={[required,alphaNumeric]}
                                onChange={this.handleDescriptionChange}                                     
                            />
                        </FormGroup>
                        <FormGroup>
                            <br />
                            <Input
                                type="number"
                                name="number"
                                id="amount"
                                value={this.state.amount}
                                validations={[required, minValue1]}
                                onChange={this.handleAmountChange}
                            />
                        </FormGroup>
                        
                        <FormGroup>
                            <br />
                            <Input
                                type="date"
                                name="date"
                                id="date"
                                value={this.state.date}
                                validations={[required]}
                                onChange={this.handleDateChange}
                            />
                        </FormGroup>
                        
                        <FormGroup>
                            <br />
                            <textarea 
                                rows="4" 
                                name="text" 
                                id="note"  
                                onChange={this.handleNoteChange}
                            >
                                {this.state.note}
                            </textarea>
                           
                        </FormGroup>
                        <button>Update</button>
                    </Form>
                </div>
                
            </div>
             
        );
    } 
}

//export default EditExpenseComponent;
const mapStateToProps = (state) => {
    return {

        expenser:state.expenser
    };
  };

  
  EditExpenseComponent = connect(mapStateToProps )(EditExpenseComponent);


  export default reduxForm({
      form:'addexpenseForm'
  })(EditExpenseComponent);