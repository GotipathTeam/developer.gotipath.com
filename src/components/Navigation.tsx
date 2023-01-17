import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = (): JSX.Element => {
    return (
        <nav className="topnav">
            <a href='https://www.gotipath.com/'>Gotipath</a>
            <NavLink to="/api/stream">Stream</NavLink>
            <NavLink to="/api/stream">CDN</NavLink>
            <NavLink to="/api/stream">Cloud</NavLink>
        </nav>
    );
};
