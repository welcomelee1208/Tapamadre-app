import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

const Header = () => {
    return (
        <React.Fragment>
            <Helmet>
                {/* Google Fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                {/* Bootstrap Icons */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                    rel="stylesheet"
                />
                {/* Main style */}
                <link rel="stylesheet" href="assets/css/style.min.css" id="switchThemeStyle" />
                {/* Custom style (if needed) */}
                <link rel="stylesheet" href="assets/css/custom.css" />
                {/* Title */}
            </Helmet>
            {/* <body> */}
            <nav
                className="navbar navbar-expand-lg navbar-light navbar-transparent navbar-sticky navbar-link-white"
                style={{ position: 'relative' }}
            >
                <div className="container">
                    <Link className="navbar-brand" href="index.html">
                        <img src="assets/img/logo/logo-light.svg" alt="Logo" className="img-fluid logo-default" />
                        <img src="assets/img/logo/logo-dark.svg" alt="Logo" className="img-fluid logo-pinned" />
                    </Link>
                    <div className="d-flex align-items-center order-lg-2 navbar-icons">
                        <button
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
                        </button>
                        <div className="navbar-nav flex-row align-items-center">
                            <div className="nav-item me-3 me-lg-0">
                                <Link className="nav-icon-link nav-link" href="login-register.html">
                                    SignIn
                                </Link>
                            </div>
                            <div className="nav-item me-lg-0 me-3">
                                <Link
                                    className="nav-icon-link nav-link"
                                    href="/login"
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
                                    href="#"
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
                                            <button type="button" className="btn btn-primary">
                                                Search
                                            </button>
                                        </div>
                                    </form>
                                    <div className="pt-2">
                                        <div className="dropdown-header">Popular searches</div>
                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <Link href="#!" className="dropdown-item">
                                                    Egg & spinach{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#!" className="dropdown-item">
                                                    Creamy soup{' '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#!" className="dropdown-item">
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
                                        href="/"
                                        className="dropdown-toggle nav-link active"
                                        data-bs-auto-close="outside"
                                        data-bs-toggle="dropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Home
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-start">
                                        <li>
                                            <Link className="dropdown-item" href="index.html">
                                                Default Parallax
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown nav-item">
                                    <Link
                                        href="/menu"
                                        className="dropdown-toggle nav-link"
                                        data-bs-toggle="dropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Menu
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-start">
                                        <li>
                                            <Link className="dropdown-item" href="menu-simple.html">
                                                Menu simple
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="menu-tiles.html">
                                                Menu tiles
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="menu-grid.html">
                                                Menu grid
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown nav-item">
                                    <Link
                                        href="#"
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
                                            <Link className="dropdown-item" href="blog-sidebar-end.html">
                                                Sidebar end
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="blog-sidebar-start.html">
                                                Sidebar start
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="blog-masonry.html">
                                                Masonry
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="blog-fullwidth.html">
                                                Full width
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="blog-post.html">
                                                Single Page
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="reservation.html">
                                        Reservation
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

export default Header
