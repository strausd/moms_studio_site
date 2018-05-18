import React from 'react';
import { connect } from 'react-redux';

import AppRouter from '../routers/AppRouter';


export const App = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="loader-container">
        <img src="/dist/img/loading-dark.gif" alt="Loading website data..." />
      </div>
    );
  }
  return (
      <div>
        <AppRouter />
      </div>
    );
};

const mapStateToProps = state => ({
  isLoading: !state.pages || state.pages.length < 1
});

export default connect(mapStateToProps)(App);