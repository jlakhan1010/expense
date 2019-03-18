import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
//import { Route, Switch, Redirect } from 'react-router-dom';
import {logout} from '../login/LoginAction';

class Header extends React.Component {

   /* handleLogout=()=>{
        localStorage.setItem('Token','');
        window.location.replace("http://localhost:8080/");
    }*/
    handleLogout=()=>{
        this.props.dispatch(logout());
        
    }
  render() {
    
    return (
        <div  style={{width:'100%' , height:'50px' , backgroundColor:'black'}}>
            <div className="m-auto" style={{width:'700px'}}>
                <h1 style={{color:'white' , marginLeft:'20px',float:'left'}}>Expense</h1>
                {
                    localStorage.getItem('Token')?<div>
                                                    <Link to="/login" onClick={this.handleLogout} style={{color:'white', margin:'10px 20px' ,float:'right'} } > 
                                                       Logout
                                                    </Link>
                                                    <Link to="/gallery" style={{color:'white', margin:'10px 20px' ,float:'right'} } > 
                                                        Gallery
                                                    </Link>
                                                  </div> : <div />
                }
           </div>              
        </div>
    );
  }
}


const mapStateToProps = (state) => {

  return {
    modal: state.modal,
    loginr:state.loginr

  };
};
export default connect(mapStateToProps)(Header);
