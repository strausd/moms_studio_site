import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import LessonsPage from '../components/LessonsPage';
import ContactPage from '../components/ContactPage';

const AppRouter = props => {
  return (
    <Router>
      <div>
        <Header pages={props.pages} />

        {props.pages && props.pages.map(page => {
          switch(page.__typename) {
            case 'LessonPage':
              return <Route key={page.id} path={`/${page.slug}`} component={() => <LessonsPage pageData={page} />} />;
            case 'AboutPage':
              return <Route key={page.id} path={`/${page.slug}`} component={() => <AboutPage pageData={page} />} />;
            case 'ContactPage':
              return <Route key={page.id} path={`/${page.slug}`} component={() => <ContactPage pageData={page} />} />;
            default:
              return <Route key={page.id} exact path="/" component={() => <HomePage pageData={page} />} />;
          }
        })}
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({
    pages: state.pages
});

export default connect(mapStateToProps)(AppRouter);