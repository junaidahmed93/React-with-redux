import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import AllRoutes from './Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <AllRoutes />
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root'));
registerServiceWorker();
