import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = (): JSX.Element => {
    return (
        <nav className="topnav">
            <a href='https://www.gotipath.com/'>Gotipath</a>
            <NavLink to="/zoom-api">Stream</NavLink>
            <NavLink to="/zoom-api">CDN</NavLink>
            <NavLink to="/zoom-api">Cloud</NavLink>
        </nav>
    );
};
