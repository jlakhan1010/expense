import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';

import Login from '../login/LoginComponent';
import SignUp from '../signup/SignUpComponant';
import DashBoard from '../expense/dashboard/DashBoardComponent';
import AddExpense from '../expense/add/AddExpenseComponent';
import EditExpenseComponent from '../expense/edit/editExpenseComponent';
import Gallery from '../Gallery/Gallery';
//import PrivateRoute from './PrivateRoute';
import Try from '../expense/add/try';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('Token')
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
const Routes = () => (
  <div>
   
    <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/login" component={Login} exact />
    <Route path="/signup" component={SignUp} exact />
    <Route path="/try" component={Try} />
    
    <PrivateRoute path="/addexpense" component={AddExpense} exact />
    
    <PrivateRoute path="/edit" component={EditExpenseComponent} exact />
    <PrivateRoute path="/dashboard" component={DashBoard} exact />
    <PrivateRoute path="/gallery" component={Gallery} exact />

    </Switch>
  </div>
);
export default Routes;

/*
<Route path="/dashboard" component={DashBoard} />
<PrivateRoute path="/dashboard" component={DashBoard} />
<Route path="/try" component={LStoreTest} />
*/
