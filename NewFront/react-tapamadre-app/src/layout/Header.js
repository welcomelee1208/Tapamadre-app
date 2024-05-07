import React, { useState, useEffect } from 'react'
// import logo from '../assets/img/logo2.jpg'
import logo from '../assets/img/logo.png'

import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// import { setActiveTab } from '../redux/actions'
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

// import '../assets/js/theme.bundle'
import classnames from 'classnames'

// AOS 라이브러리
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = (props) => {
    // aos 초기화
    useEffect(() => {
        AOS.init()
    }, [])

    // 메뉴 선택시 선택 탭정보 전역상태 반영
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
                {/* Main style */}
                <link rel="stylesheet" to="../assets/css/style.min.css" id="switchThemeStyle" />

                {/* <!--aos animation--> */}
                <link rel="stylesheet" href="../assets/vendor/css/aos.css" />
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                <script src="../assets/js/theme.bundle.js"></script>

                {/* Title */}
            </Helmet>
            {/* <body> */}
            <nav className="navbar navbar-expand-lg navbar-light navbar-transparent navbar-sticky navbar-link-white">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" className="img-fluid logo-default" />
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
                            {/* <div className="nav-item me-lg-0 me-3">
                                <Link className="nav-icon-link nav-link" to="/entry">
                                    <div className="d-flex align-items-center">
                                        <span>Join</span>
                                    </div>
                                </Link>
                            </div> */}
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
                                {/* <li className="dropdown nav-item">
                                    <Link
                                        to="/"
                                        className="nav-link active"
                                        data-bs-auto-close="outside"
                                        data-bs-toggle="dropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Home
                                    </Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">
                                        HOME
                                    </Link>
                                </li>
                                <li className="dropdown nav-item">
                                    <div
                                        className="dropdown-toggle nav-link"
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        style={{ cursor: 'pointer' }}
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
                                <li className="nav-item">
                                    <Link className="nav-link" to="/newsevent">
                                        NEWS & EVENT
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/inquiry">
                                        Q & A
                                    </Link>
                                </li> */}
                                {/* Reservation */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/reservation">
                                        Reservation
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
