import React from 'react';
import logo from "./logo.png";


const navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: '#282828' }}>
            <div className="container">
                <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Me</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
};

export default navbar;
