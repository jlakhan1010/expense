import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteExpense } from '../delete/DeleteExpenseAction';
import { displayExpense } from './DashBoardAction';
import { editExpense } from '../edit/EditExpenseAction';

class DashBoard extends React.Component
{
    constructor (props){
        super(props);
        this.props.dispatch(displayExpense());   
    }
    handleEdit=(id)=>{
        this.props.history.push('/edit');
        this.props.dispatch(editExpense(id), this.props.history);
    }
    expenseList = () => {
        var expenses=this.props.expensesr;
        var i=1;
        return(
            <div className=" expenselist ">
                <div className=" container grid" style={{width:'700px'}}>
                    <div className=" row expense" style={{backgroundColor:'#c6f4f3'}}>       
                        
                        <div className="col-sm-6">
                            <div className="ui container">                 
                                <h3>Expenses</h3>           
                            </div>
                        </div>
                        <div className="col-sm-3 ">
                            <div className="ui container">                 
                                    <h3>Amount </h3>         
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="ui container">                 
                                    <h3>Operations</h3>          
                            </div>
                        </div>
                    </div>
               
              
               
                    { 
                    
                        expenses.map((e)=>(
                            <div  className="row expense" key={e["_id"]} >    
                                
                                <div className="col-sm-6">
                                    <div className="ui container">                 
                                        <h5>
                                            {e["desc"]}
                                        </h5> 
                                        <p>
                                            { new Date(e["expdate"]).toLocaleString("en-us", { month: "long" }) } {" "}
                                            { new Date(e["expdate"]).getDate()}
                                            {   
                                                (new Date(e["expdate"]).getDate())==(1||21||31)? "st" : (new Date(e["expdate"]).getDate())==(2||22) ? "nd" : (new Date(e["expdate"]).getDate())==(3||23) ? "rd" : "th"
                                            },  
                                                
                                            {" "}
                                            {new Date(e["expdate"]).getFullYear()}
                                        </p>     
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <div className="ui container d-flex flex-row-reverse">                 
                                       <strong> {"$"}{e["amt"]}   </strong>      
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ui container" style={{padding:'10px'}}>
                                        <button className="btn btn-success" onClick={()=>this.handleEdit(e["_id"])}
                                        >
                                            Edit
                                        </button>                   
                                        <button className="btn btn-danger" onClick={()=>this.props.dispatch(deleteExpense(e["_id"]))}
                                        >
                                            Delete 
                                        </button>  
                                                 
                                    </div>
                                    
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>       
        );

    }
    render()
    {
        var expenses=this.props.expensesr;
        var i=0,sum=0;
        expenses.map((e)=>{i++,sum=sum+Number(e.amt)});

        return(
            <div className="ui  " >
                <ToastContainer />
                <div className="header" >
                       
                    <div className="container" style={{width:'700px'}}>
                        <div >                 
                            <p >
                                Viewing <strong><b>{i}{" "}</b></strong> 
                                expenses totalling  <strong>$ <b>{sum}</b></strong> 
                            </p>
                            <Link to="/addexpense">
                                <button className="ui button primary" style={{marginBottom:'10px'}}>
                                    Add Expense
                                </button>
                            </Link>   
                            <br />
                                                 
                        </div> 
                    </div>
            
                </div>
                <div className="searchbar">
                    <div className="container " style={{width:'700px'}}>
                        <input type="text" placeholder="Search Expenses" />
                        <label htmlFor="fromdate">From Date</label>
                        <input type="date" id="fromdate" />
                        <label htmlFor="todate">To Date</label>
                        <input type="date" id="todate" />    
                    </div>
                </div>
                { 
                    this.expenseList()
                }       
            </div>          
        );
    }
}


const mapStateToProps = (state) => {
    
    return {
        modal: state.modal,
        loginr:state.loginr,
        signupr:state.signupr,
        expensesr:state.expenser
    };
  };

  
DashBoard = connect(mapStateToProps )(DashBoard);
export default DashBoard;








 