// 로그인 + 회원가입 화면 컴포넌트 (tab으로 화면 나뉘어져있음)
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Login = () => {
    return (
        <div>
            <Helmet>
                {/* Google fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                {/* aos animation */}
                <link rel="stylesheet" href="assets/vendor/css/aos.css" />
                {/* Bootstrap icons */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                />
                {/* Main style */}
                <link rel="stylesheet" href="assets/css/style.min.css" id="switchThemeStyle" />
                {/* Add custom style here */}
                {/* <link rel="stylesheet" href="assets/css/custom.css" /> */}
                <title>Resto</title>
            </Helmet>
            <main id="main" className="mt-auto">
                <section className="position-relative">
                    <div className="container position-relative py-8">
                        <div className="row gx-0 justify-content-center align-items-center">
                            <div className="col-12 col-md-7 col-lg-5 col-xl-4 mx-auto">
                                <div className="d-flex flex-column">
                                    <ul className="nav nav-pills mb-4 pb-4 border-bottom">
                                        <li>
                                            <Link
                                                to="#login"
                                                data-bs-toggle="tab"
                                                aria-expanded="true"
                                                className="active nav-link"
                                            >
                                                <h6 className="mb-0 text-reset">Login</h6>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#register"
                                                data-bs-toggle="tab"
                                                aria-expanded="true"
                                                className="nav-link"
                                            >
                                                <h6 className="mb-0 text-reset">Register</h6>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade active show" id="login">
                                            <form noValidate className="needs-validation">
                                                <div className="mb-4">
                                                    <h2 className="mb-1 display-6">Welcome Back</h2>
                                                    <p className="mb-0 text-muted">Please login to continue</p>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        autoFocus
                                                        type="email"
                                                        id="inputEmail"
                                                        className="form-control"
                                                        placeholder="Email address"
                                                        required
                                                    />
                                                    <label htmlFor="inputEmail">Email address</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        id="inputPassword"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        required=""
                                                    />
                                                    <label htmlFor="inputPassword">Password</label>
                                                </div>

                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                    <div>
                                                        <div className="form-check form-switch">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                id="checkForRemember"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="checkForRemember"
                                                            >
                                                                <small>Remember me</small>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            to="#!"
                                                            className="text-dark small text-decoration-underline"
                                                        >
                                                            Forget Password?
                                                        </Link>
                                                    </div>
                                                </div>
                                                <button
                                                    className="btn btn-lg btn-info w-100 btn-hover-scale"
                                                    type="submit"
                                                >
                                                    <span>Sign in</span>
                                                </button>
                                            </form>
                                        </div>
                                        <div className="tab-pane fade" id="register">
                                            <form noValidate className="needs-validation">
                                                <div className="mb-4">
                                                    <h2 className="mb-1 display-6">Create Account</h2>
                                                    <p className="mb-0 text-muted">
                                                        Enter the details below for create account
                                                    </p>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="email"
                                                        id="registerEmail"
                                                        className="form-control"
                                                        placeholder="Email address"
                                                        autoFocus
                                                        required
                                                    />
                                                    <label htmlFor="registerEmail">Email address</label>
                                                </div>

                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        id="registerPassword"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        required=""
                                                    />
                                                    <label htmlFor="registerPassword">Password</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        id="registerConfirmPassword"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        required=""
                                                    />
                                                    <label htmlFor="registerConfirmPassword">Confirm Password</label>
                                                </div>

                                                <div className="form-check form-switch mb-3">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="checkForTerms"
                                                    />
                                                    <label className="form-check-label" htmlFor="checkForTerms">
                                                        <small>Get filled in on new flavors, pop-ups &amp; more</small>
                                                    </label>
                                                </div>
                                                <button
                                                    className="btn btn-lg btn-info btn-hover-scale w-100"
                                                    type="submit"
                                                >
                                                    <span>Create Account</span>
                                                </button>
                                                <p className="pt-4 small">
                                                    By creating an account, you accept the{' '}
                                                    <Link className="text-dark text-decoration-underline" to="#">
                                                        Terms of Service
                                                    </Link>{' '}
                                                    and{' '}
                                                    <Link className="text-dark text-decoration-underline" to="#">
                                                        Privacy Policy
                                                    </Link>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <script src="assets/js/theme.bundle.js"></script>
        </div>
    )
}

export default Login
