import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const ForgetPassword = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const [showNotification, setShowNotification] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:3001/admin/forgot-password', { id, name })
            setPassword(response.data.data)
            alert(response.data.data)
            setShowNotification(true)
            navigate('/login')
        } catch (error) {
            setError('임시 비밀번호 생성에 실패했습니다. 입력한 정보를 확인해주세요')
        }
    }
    return (
        <>
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
                                <div className="d-flex flex-column"></div>
                                <h4 style={{ marginBottom: '20px' }}>비밀번호 찾기</h4>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <label htmlFor="name" style={{ marginBottom: '10px' }}>
                                            이름
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-floating mb-3">
                                        <label htmlFor="id" style={{ marginBottom: '10px' }}>
                                            아이디
                                        </label>
                                        <input
                                            type="text"
                                            id="id"
                                            className="form-control"
                                            value={id}
                                            onChange={(e) => setId(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary" style={{ marginTop: '15px' }}>
                                            찾기
                                        </button>
                                    </div>
                                </form>
                                {showNotification && (
                                    <div className="alert alert-success mt-3" role="alert">
                                        임시 비밀번호가 생성되었습니다.로그인후 비밀번호 변경해주시기 바랍니다.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>{' '}
            <Footer />
        </>
    )
}

export default ForgetPassword
