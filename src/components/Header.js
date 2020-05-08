import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="menu">
                <div className="container">
                    <a href="#" className="navbar-brand"><img id="logo" src="public/../assets/img/favicon.png" /></a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMobile">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarMobile">
                        <ul className="navbar-nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link" href="#section01">عروس دریایی</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section02">اطلاعات اولیه</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section03">ساختار عروس دریایی</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section04">تولید مثل عروس دریایی</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section05">گالری تصاویر</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;