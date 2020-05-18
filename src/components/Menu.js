import React from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';


class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="menu">
                <div className="container">
                    <Link to="/">
                        <img className="navbar-brand" id="logo" src="public/../assets/img/favicon.png" />
                    </Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMobile">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarMobile">
                        <ul className="navbar-nav nav-pills">
                            <li className="nav-item">
                                <Link to="/">
                                    <p className="nav-link" >عروس دریایی</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/information">
                                    <p className="nav-link" >اطلاعات اولیه</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/structure">
                                    <p className="nav-link" >ساختار عروس دریایی</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/reproduction">
                                    <p className="nav-link" >تولید مثل عروس دریایی</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/gallery">
                                    <p className="nav-link" >گالری تصاویر</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu;