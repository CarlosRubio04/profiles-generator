import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.scss';


class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar Bg-Primary-Dark">
                <div className="Navbar-Container">
                    <Link to="/" className="Body-1">
                        Name Place
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;
