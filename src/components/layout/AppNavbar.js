import React from 'react'
import { Link } from 'react-router-dom'


const AppNavbar = props => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Github repos search
                    </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarMain"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarMain">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                    {/* <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/bookmarks" className="nav-link">
                                Bookmarks
                            </Link>
                        </li>
                    </ul> */}
                </div>
            </div>
        </nav >
    )
}



export default AppNavbar
