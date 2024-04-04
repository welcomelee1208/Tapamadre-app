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
            <nav class="navbar py-4 py-lg-3 navbar-expand border-bottom bg-white navbar-light w-100">
                <div class="container">
                    <a href="/" class="navbar-brand width-80">
                        <img src="assets/img/logo/logo-dark.svg" alt="" class="img-fluid" />
                    </a>
                    <div class="d-flex align-items-center ms-auto">
                        <small class="me-3 text-muted"> Book Now</small>
                        <a href="#!" class="lead text-dark">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 16 16"
                                class="bi bi-telephone-fill me-1 align-middle"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
                                />
                            </svg>
                            <span class="lead">+01 0123 4567</span>
                        </a>
                    </div>
                    {/* <!--/.nav-offcanvas --> */}
                </div>
            </nav>
            {/* </body> */}
        </React.Fragment>
    )
}

export default Header
