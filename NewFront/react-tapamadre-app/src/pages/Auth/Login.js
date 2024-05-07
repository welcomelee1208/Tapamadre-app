// 로그인 화면 컴포넌트
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useFormik } from 'formik'
import axios from 'axios'
import { connect } from 'react-redux'

// 로그인 성공 알림창
import { toast } from 'react-toastify'

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

import ForgetPassword from './ForgetPassword'

const Login = (props) => {
    const navigate = useNavigate()
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    // 비밀번호 찾기 모달
    const [showModal, setShowModal] = useState(false)
    const handleForgotPasswordClick = () => {
        setShowModal(true)
    }

    const formik = useFormik({
        initialValues: {
            id: '',
            password: '',
        },
        validationSchema: Yup.object({
            id: Yup.string().required('이메일을 입력해주세요'),
            password: Yup.string().required('비밀번호를 입력해주세요'),
        }),
        onSubmit: async (values) => {
            try {
                const loginData = {
                    id: values.id,
                    password: values.password,
                }

                const response = await axios.post('http://localhost:3001/admin/login', loginData)

                if (response.data.code === '200') {
                    const { token, loginUser } = response.data.data
                    props.loginUserSuccess(token, loginUser)
                    localStorage.setItem('token', token)
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                    navigate('/') // 로그인 성공 후 홈 페이지로 이동
                    toast.success('로그인에 성공했습니다.')
                } else {
                    setShowAlert(true)
                    setAlertMessage('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.')
                }
            } catch (error) {
                console.error('에러 발생:', error)
                setShowAlert(true)
                setAlertMessage('로그인에 실패했습니다. 서버와의 통신에 문제가 발생했습니다.')
            }
        },
    })

    return (
        <React.Fragment>
            <div>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
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

                <Header />
                <main id="main" className="mt-auto">
                    <section className="position-relative">
                        <div className="container position-relative py-8">
                            <div className="row gx-0 justify-content-center align-items-center">
                                <div className="col-12 col-md-7 col-lg-5 col-xl-4 mx-auto">
                                    <div className="d-flex flex-column">
                                        <ul className="nav nav-pills mb-4 pb-4 border-bottom">
                                            <li>
                                                <Link to="/login" aria-expanded="true" className="active nav-link">
                                                    <h6 className="mb-0 text-reset">로그인</h6>
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <Link to="/entry" aria-expanded="true" className="nav-link">
                                                    <h6 className="mb-0 text-reset">회원가입</h6>
                                                </Link>
                                            </li> */}
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane fade active show" id="login">
                                                <Form
                                                    noValidate
                                                    className="needs-validation"
                                                    onSubmit={formik.handleSubmit}
                                                >
                                                    <div className="mb-4">
                                                        <h4 className="mb-1 display-8">
                                                            관리자는 로그인 후 이용바랍니다.
                                                        </h4>
                                                        <p className="mb-0 text-muted">
                                                            일반사용자는 이용할 수 없습니다.
                                                        </p>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <Input
                                                            autoFocus
                                                            type="text"
                                                            name="id"
                                                            value={formik.values.id}
                                                            onChange={formik.handleChange}
                                                            id="inputId"
                                                            className="form-control"
                                                            placeholder="Email address"
                                                            required
                                                        />
                                                        <Label htmlFor="inputId">ID</Label>
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
                                                                to="#"
                                                                onClick={handleForgotPasswordClick}
                                                                className="text-dark small text-decoration-underline"
                                                            >
                                                                비밀번호찾기
                                                            </Link>
                                                            <ForgetPassword
                                                                isOpen={showModal}
                                                                onClose={() => setShowModal(false)}
                                                            />
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
                <Footer />
                <script src="assets/js/theme.bundle.js"></script>
            </div>
        </React.Fragment>
    )
}

// export default Login
export default connect(null, { loginUserSuccess })(Login)
