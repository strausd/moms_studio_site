import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;