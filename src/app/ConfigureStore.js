import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import  createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import loginReducer from '../login/LoginReducer';
import expenseReducer from '../expense/expenseReducer';
import imagesReducer from '../Gallery/ImagesReducer';

const history=createHistory();
const middleware=routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export function persistreducer(state = {}, action) {
  switch (action.type) {
  case 'persist/REHYDRATE': {
    return { ...state, ...action.payload };
  }
  default: {
    return state;
  }
  } // Switch
}

const reducers = {
  form: formReducer,
  loginr: loginReducer,
  expenser:expenseReducer,
  imagesr:imagesReducer
};

export function configureStore() {
  /* simplified React Promise Middleware */
  const store = createStore(
    combineReducers(reducers),
    undefined,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
