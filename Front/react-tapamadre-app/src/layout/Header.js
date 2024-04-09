import React, { useState, useEffect } from 'react'
import logo from '../assets/img/logo.png'

// 추가참조
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// 리덕스 액션함수 참조하기
import { setActiveTab } from '../redux/actions'
import { Helmet } from 'react-helmet'

import {
    Nav,
    NavItem,
    NavLink,
    UncontrolledTooltip,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    Button,
} from 'reactstrap'

import classnames from 'classnames'

const Header = (props) => {
    // 메뉴 선택시 선택 탭정보 전역상태 반영
    const toggleTab = (tab) => {
        props.setActiveTab(tab)
    }

    // LayOut 전역상태내의 activeTab 전역상태값을 props에서 추출하여 현재의  전역상태내 activeTab 값을 추출한다.
    const activeTab = props.activeTab

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <Helmet>
                {/* Google Fonts */}
                <link
                    to="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                {/* Bootstrap Icons */}
                <link
                    to="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                    rel="stylesheet"
                />
                {/* Main style */}
                <link rel="stylesheet" to="assets/css/style.min.css" id="switchThemeStyle" />
                {/* Custom style (if needed) */}
                <link rel="stylesheet" to="assets/css/custom.css" />
                {/* Title */}
            </Helmet>
            {/* <body> */}
            <nav
                className="navbar navbar-expand-lg navbar-light navbar-transparent navbar-sticky navbar-link-white"
                style={{ position: 'relative' }}
            >
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" className="img-fluid logo-default" />
                        {/* <img src="assets/img/logo/logo-light.svg" alt="Logo" className="img-fluid logo-default" />
                        <img src="assets/img/logo/logo-dark.svg" alt="Logo" className="img-fluid logo-pinned" /> */}
                    </Link>
                    <div className="d-flex align-items-center order-lg-2 navbar-icons">
                        <Button
                            className="navbar-toggler order-last ms-3 ms-lg-0"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#restoMainNavbar"
                            aria-controls="restoMainNavbar"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line-end"></span>
                        </Button>
                        <div className="navbar-nav flex-row align-items-center">
                            <div className="nav-item me-3 me-lg-0">
                                <Link className="nav-icon-link nav-link" to="/login">
                                    LOGIN
                                </Link>
                            </div>
                            <div className="nav-item me-lg-0 me-3">
                                <Link
                                    className="nav-icon-link nav-link"
                                    to="/entry"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasCart"
                                >
                                    <div className="d-flex align-items-center">
                                        <span>Join</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="position-lg-relative me-4 me-lg-0 nav-item">
                                <Link
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                    to="#"
                                    className="nav-link"
                                ></Link>
                                <div
                                    className="dropdown-menu w-100 position-absolute dropdown-menu-lg-end dropdown-search p-4"
                                    id="dropdown-search"
                                >
                                    <h5 className="mb-3">Tell us what you're looking for</h5>
                                    <form>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Example: Dinner, Wine, Pizza"
                                        />
                                        <div className="d-grid pt-2">
                                            <Button type="button" className="btn btn-primary">
                                                Search
                                            </Button>
                                        </div>
                                    </form>
                                    <div className="pt-2">
                                        <div className="dropdown-header">Popular searches</div>
                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <Link to="#!" className="dropdown-item">
                                                    Egg & spinach{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#!" className="dropdown-item">
                                                    Creamy soup{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#!" className="dropdown-item">
                                                    Crunch veg salad{' '}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--navbar-offcanvas-lg--> */}
                    <div className="offcanvas offcanvas-end" id="restoMainNavbar">
                        <div className="offcanvas-header">
                            <button
                                className="btn-close z-index-1"
                                type="button"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav mx-auto">
                                <li className="dropdown nav-item">
                                    <Link
                                        to="/"
                                        className="dropdown-toggle nav-link active"
                                        data-bs-auto-close="outside"
                                        data-bs-toggle="dropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="dropdown nav-item">
                                    <Link
                                        to="/menu"
                                        className="dropdown-toggle nav-link"
                                        data-bs-toggle="dropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        MENU
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-start">
                                        <li>
                                            <Link className="dropdown-item" to="/food">
                                                FOOD
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/drink">
                                                DRINK
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/set">
                                                SET MENU
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown nav-item">
                                    <Link
                                        to="/newsEvent"
                                        className="dropdown-toggle nav-link"
                                        data-bs-toggle="dropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        NEWS & EVENT
                                    </Link>
                                    {/* <ul className="dropdown-menu dropdown-menu-start">
                                        <li>
                                            <Link className="dropdown-item" to="/blogDetail">
                                                Sidebar end
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/blogList">
                                                Sidebar start
                                            </Link>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/reservation">
                                        Reservation
                                    </Link>
                                </li>
                                {/* Q & A */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/inquiry">
                                        Q & A
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--/.nav-offcanvas --> */}
                </div>
            </nav>
            {/* </body> */}
        </React.Fragment>
    )
}

const mapStatetoProps = (state) => {
    return {
        ...state.Layout,
    }
}

export default connect(mapStatetoProps)(Header)
// export default connect(null, { setActiveTab })(Header)
// export default Header
