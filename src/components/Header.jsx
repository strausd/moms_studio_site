import React from 'react';
import { NavLink } from 'react-router-dom';

import { objIsEmpty } from '../utils/utils';


const Header = ({ pages }) => {
  if (objIsEmpty(pages)) {
    return (
      <div className="header"></div>
    );
  }
  return (
    <div className="header">
      <ul>
        {pages.map(page => {
          if (page.__typename === 'HomePage') {
            return (
              <li key={page.id}><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            );
          }
          return (
            <li key={page.id}><NavLink to={`/${page.slug}`} activeClassName="active">{page.title}</NavLink></li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;