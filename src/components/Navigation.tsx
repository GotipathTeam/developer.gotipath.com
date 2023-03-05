
import { NavLink } from 'react-router-dom';

export const Navigation = (): JSX.Element => {
    return (
        <nav className="topnav">
            <div>
                <a href='https://www.gotipath.com/'>
                    <img src="https://images.prismic.io/gotipath-website/9d1ecca4-d282-4eb1-a7d3-9534700edcf8_gotiPath_logo.png?auto=compress,format" alt="Gotipath" />
                </a>
            </div>
            <NavLink to="/api/stream">Stream API</NavLink>
        </nav>
    );
};
