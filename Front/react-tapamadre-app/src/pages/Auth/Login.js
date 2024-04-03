// 로그인 화면 컴포넌트
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useFormik } from 'formik'
import axios from 'axios'
import { connect } from 'react-redux'

// 로그인 쪽 컴포넌트
import Header from '../../components/Header'
import Footer from '../../components/Footer'

//폼의 유효성을 검사하는 yup 패키지 참조
import * as Yup from 'yup'

//reactstrap은 bootstrap을 react에서 더 쉽게 사용하기 위한 부트스트랩 지원 리액트 패키지
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    FormGroup,
    Alert,
    Form,
    Input,
    Button,
    FormFeedback,
    Label,
    InputGroup,
} from 'reactstrap'

import { userLogin, loginUserSuccess } from '../../redux/actions'

const Login = (props) => {
    const navigate = useNavigate()
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    //폼 유효성검사 및 폼데이터처리
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('이메일을 입력해주세요'),
            password: Yup.string().required('비밀번호를 입력해주세요'),
        }),
        onSubmit: (values) => {
            var loginData = {
                email: values.email,
                password: values.password,
            }

            axios
                .post('http://localhost:3001/memberApi/login', loginData)
                .then((res) => {
                    console.log('로그인 데이터', res.data)

                    // 토큰저장
                    localStorage.setItem('token', res.data.data.token)

                    if (res.data.code === '200') {
                        props.loginUserSuccess(res.data.data.token, res.data.data.loginUser)

                        // axio의 디폴트 사용자 인증 토큰값 바인딩 처리해주기
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.data.token

                        // 로그인 후 main으로 이동
                        navigate('/')
                    }
                })
                .catch((err) => {
                    console.log('에러발생', err)
                    setShowAlert(true)
                    setAlertMessage('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.')
                })
        },
    })

    return (
        <React.Fragment>
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
                                                    className="active nav-link"
                                                >
                                                    <h6 className="mb-0 text-reset">로그인</h6>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/entry"
                                                    data-bs-toggle="tab"
                                                    aria-expanded="true"
                                                    className="nav-link"
                                                >
                                                    <h6 className="mb-0 text-reset">회원가입</h6>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane fade active show" id="login">
                                                <Form
                                                    noValidate
                                                    className="needs-validation"
                                                    onSubmit={formik.handleSubmit}
                                                >
                                                    <div className="mb-4">
                                                        <h2 className="mb-1 display-8">따빠마드레 방문을 환영합니다</h2>
                                                        <p className="mb-0 text-muted">로그인 후 이용바랍니다</p>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <Input
                                                            autoFocus
                                                            type="email"
                                                            name="email"
                                                            value={formik.values.email}
                                                            onChange={formik.handleChange}
                                                            id="inputEmail"
                                                            className="form-control"
                                                            placeholder="Email address"
                                                            required
                                                        />
                                                        <Label htmlFor="inputEmail">Email</Label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <Input
                                                            type="password"
                                                            name="password"
                                                            value={formik.values.password}
                                                            onChange={formik.handleChange}
                                                            id="inputPassword"
                                                            className="form-control"
                                                            placeholder="Password"
                                                            required=""
                                                        />
                                                        <Label htmlFor="inputPassword">Password</Label>
                                                    </div>
                                                    {/* 알림 표시 */}
                                                    {showAlert && (
                                                        <Alert color="danger" className="mb-3">
                                                            {alertMessage}
                                                        </Alert>
                                                    )}

                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        {/* 비밀번호 기억하기 */}
                                                        <div>
                                                            {/* <div className="form-check form-switch">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value=""
                                                                id="checkForRemember"
                                                            />
                                                            <Label
                                                                className="form-check-label"
                                                                htmlFor="checkForRemember"
                                                            >
                                                                <small>Remember me</small>
                                                            </Label>
                                                        </div> */}
                                                        </div>
                                                        <div>
                                                            <Link
                                                                to="/forgetpassword"
                                                                className="text-dark small text-decoration-underline"
                                                            >
                                                                비밀번호찾기
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <Button
                                                        className="btn btn-lg btn-info w-100 btn-hover-scale"
                                                        type="submit"
                                                    >
                                                        <span>로그인</span>
                                                    </Button>
                                                </Form>
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
        </React.Fragment>
    )
}

// export default Login
export default connect(null, { loginUserSuccess })(Login)
