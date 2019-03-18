import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';

import { configureStore } from './ConfigureStore';
import '../styles/styles.scss';
import '../styles/styling.css';
import LayoutMain from './LayoutMain';
import Header from './header';
import Login from '../login/LoginComponent';
//import SignUp from '../signup/SignUpComponant';

const store = configureStore();


const Layout = withRouter(LayoutMain);

export default class App extends React.Component {
  render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
            <div>
               <Header />
              <Layout />
            </div>
          </BrowserRouter>
        </Provider>
      );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
