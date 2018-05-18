import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import { addPagesData } from '../actions/baseActions';


export const objIsEmpty = obj => {
  if (!obj) {
    return true;
  }
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
};

export const objKeysAsArray = obj => {
  if (objIsEmpty(obj)) {
    return [];
  }
  const finalArray = [];
  for (let key in obj) {
    finalArray.push(key);
  }
  return finalArray;
}

export const needNewSiteData = oldTimeStamp => {
  const oldTime = new Date(oldTimeStamp);
  const now = new Date();
  const hours = (now - oldTime) / 36e5;
  return hours > 1;
}

export const makeUpdatedSiteDataCall = () => {
  const client = new ApolloClient({
    uri: 'https://api.graphcms.com/simple/v1/cjham1sh42pvr0187via6jwgm'
  });
  return client.query({
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
  });
};

export const getSiteData = store => {
  const localStorageString = localStorage.getItem('siteData');
  const siteData = JSON.parse(localStorageString);

  if (siteData && !needNewSiteData(siteData.dateUpdated)) {
    store.dispatch(addPagesData(siteData.pages, siteData.dateUpdated));
  } else {
    console.log('Making new API call');
    makeUpdatedSiteDataCall().then(payload => {
      const pages = [
        payload.data.allHomePages[0],
        payload.data.allLessonPages[0],
        payload.data.allAboutPages[0],
        payload.data.allContactPages[0]
      ];
      store.dispatch(addPagesData(pages));
    }).catch(e => console.log(e));
  }
};