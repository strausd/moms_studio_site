import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';


const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </div>
    </Router>
  );
};

export default AppRouter;