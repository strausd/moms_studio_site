import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import configureStore from './store/store';
import App from './components/App';
import { addPagesData } from './actions/baseActions';

import './styles/styles.scss';

const store = configureStore();
const client = new ApolloClient({
  uri: 'https://api.graphcms.com/simple/v1/cjham1sh42pvr0187via6jwgm'
});
client.query({
  query: gql`
    query allSiteData {
      allHomePages {
        id,
        title,
        body,
        image {
          url,
          fileName
        }
      },
      allLessonPages {
        id,
        title,
        body,
        slug,
        costIntro,
        lessonCosts {
          id,
          price,
          duration
        },
        instrumentsIntro,
        instruments {
          id, 
          instrumentName
        }
      },
      allAboutPages {
        id,
        title,
        body,
        slug
      },
      allContactPages {
        id,
        title,
        body,
        slug,
        mailAPI
      }
    }
  `
}).then(payload => store.dispatch(addPagesData(payload.data))).catch(e => console.log(e));

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));