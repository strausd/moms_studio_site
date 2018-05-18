import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import configureStore from './store/store';
import App from './components/App';
import { addPagesData } from './actions/baseActions';
import { getSiteData } from './utils/utils';

import './styles/styles.scss';

const store = configureStore();
getSiteData(store);

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));