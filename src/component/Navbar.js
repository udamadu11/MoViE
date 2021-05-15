import React from 'react';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark mb-5">
                <div className="container">
                    <div className="navvar-header">
                        <a className="navbar-brand text-white text-lg brand-text" href="#">
                            Movie Potal
                        </a>
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                            <i class="fa fa-imdb fa-5x"></i>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;