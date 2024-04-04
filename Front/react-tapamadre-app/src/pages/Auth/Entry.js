// 회원가입 화면 컴포넌트
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'

// 로그인 쪽 컴포넌트
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Entry = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('이메일을 입력해주세요'),
            name: Yup.string().required('이름을 입력해주세요'),
            password: Yup.string().required('비밀번호를 입력해주세요'),
            // confirmPassword: Yup.string().required('비밀번호')
        }),
        onSubmit: (value) => {
            var memberData = {
                email: value.email,
                name: value.name,
                password: value.password,
            }
            axios
                .post('http://localhost:3001/memberApi/entry', memberData)
                .then((response) => {
                    navigate('/login')
                })
                .catch((err) => {
                    console.log('백엔드 에러', err)
                })
        },
    })

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
            <Header></Header>
            <main id="main" className="mt-auto">
                <section className="position-relative">
                    <div className="container position-relative py-8">
                        <div className="row gx-0 justify-content-center align-items-center">
                            <div className="col-12 col-md-7 col-lg-5 col-xl-4 mx-auto">
                                <div className="d-flex flex-column">
                                    <ul className="nav nav-pills mb-4 pb-4 border-bottom">
                                        <li>
                                            <Link
                                                to="/login"
                                                data-bs-toggle="tab"
                                                aria-expanded="true"
                                                className="nav-link"
                                            >
                                                <h6 className="mb-0 text-reset">로그인</h6>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/entry"
                                                data-bs-toggle="tab"
                                                aria-expanded="true"
                                                className="active nav-link"
                                            >
                                                <h6 className="mb-0 text-reset">회원가입</h6>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade active show" id="register">
                                            <form noValidate className="needs-validation">
                                                <div className="mb-4">
                                                    <h2 className="mb-1 display-8">회원가입</h2>
                                                    <p className="mb-0 text-muted">
                                                        아래 입력 후 회원가입을 진행 바랍니다.
                                                    </p>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                                    <div className="form-floating mb-3 col-9">
                                                        <input
                                                            type="email"
                                                            id="registerEmail"
                                                            name="email"
                                                            className="form-control"
                                                            placeholder="Email address"
                                                            autoFocus
                                                            required
                                                        />
                                                        <label htmlFor="registerEmail">Email</label>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-primary mb-1">중복확인</button>
                                                    </div>
                                                </div>

                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        id="registerPassword"
                                                        name="password"
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
                                                        name="confirmPassword"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        required=""
                                                    />
                                                    <label htmlFor="registerConfirmPassword">Confirm Password</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="name"
                                                        required=""
                                                    />
                                                    <label htmlFor="name">Name</label>
                                                </div>

                                                <div className="form-check form-switch mb-3">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="checkForTerms"
                                                    />
                                                    <label className="form-check-label" htmlFor="checkForTerms">
                                                        <small>
                                                            <Link to="#">이용약관</Link>과
                                                            <Link to="#">개인정보취급방침</Link> 에 동의합니다.
                                                        </small>
                                                    </label>
                                                </div>
                                                <Link to="/">
                                                    <button
                                                        className="btn btn-lg btn-info btn-hover-scale w-100"
                                                        type="button"
                                                    >
                                                        <span>회원가입</span>
                                                    </button>
                                                </Link>
                                                {/* <p className="pt-4 small">
                                                    By creating an account, you accept the{' '}
                                                    <Link className="text-dark text-decoration-underline" to="#">
                                                        Terms of Service
                                                    </Link>{' '}
                                                    and{' '}
                                                    <Link className="text-dark text-decoration-underline" to="#">
                                                        Privacy Policy
                                                    </Link>
                                                </p> */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
            <script src="assets/js/theme.bundle.js"></script>
        </div>
    )
}

export default Entry
