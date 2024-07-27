import React from "react";
import "/workspaces/LuisCarter8791_react_landingpage/src/styles/navbar.css"

export function Navbar() {
    return (
        <div className="nav d-flex justify-content-between bg-dark">
            <nav className="navbar nav bg-dark text-danger">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">
                        <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        Start Bootstrap
                    </a>
                </div>
            </nav>

            <nav className="navbar nav navbar-expand-lg bg-dark text-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" aria-current="page" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}; 