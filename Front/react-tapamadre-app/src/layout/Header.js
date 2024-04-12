import React, { useState, useEffect } from 'react'
import logo from '../assets/img/logo.png'

import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

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
    const toggleTab = (tab) => {
        props.setActiveTab(tab)
    }
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const activeTab = props.activeTab

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                    rel="stylesheet"
                />
                <link rel="stylesheet" to="assets/css/style.min.css" id="switchThemeStyle" />
                <link rel="stylesheet" to="assets/css/custom.css" />
            </Helmet>
            <nav
                className="navbar navbar-expand-lg navbar-light navbar-transparent navbar-sticky navbar-link-white"
                style={{ position: 'relative' }}
            >
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" className="img-fluid logo-default" />
                    </Link>
                    {/* <img src="assets/img/logo/logo-light.svg" alt="Logo" className="img-fluid logo-default" /> */}
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
                                    {/* <form>
                                        {/* <input
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
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <div
                                        className="dropdown-toggle nav-link"
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                    >
                                        MENU
                                    </div>
                                    <ul
                                        className={classnames('dropdown-menu dropdown-menu-start', {
                                            show: dropdownOpen,
                                        })}
                                    >
                                        <li>
                                            <Link className="dropdown-item" to="/menufood">
                                                FOOD
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/menudrink">
                                                DRINK
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/menuset">
                                                SET MENU
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown nav-item">
                                    <Link
                                        to="/newsevent"
                                        className="dropdown-toggle nav-link"
                                        data-bs-toggle="dropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        NEWS & EVENT
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-start">
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
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/reservation">
                                        Reservation
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/inquiry">
                                        Q & A
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

const mapStatetoProps = (state) => {
    return {
        ...state.Layout,
    }
}

export default connect(mapStatetoProps)(Header)
