import React, { useEffect } from 'react'

import { Helmet } from 'react-helmet'

import { Link } from 'react-router-dom'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

// AOS 라이브러리
import AOS from 'aos'
import 'aos/dist/aos.css'

const QnA = () => {
    // aos 초기화
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div>
            <Header />
            <Helmet>
                {/* <!--Flatpickr and choices select css--> */}
                <link rel="stylesheet" href="../../assets/vendor/css/flatpickr.min.css" />

                {/* <!--Google fonts--> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                {/* <!--aos animation--> */}
                <link rel="stylesheet" href="../../assets/vendor/css/aos.css" />
                <link rel="stylesheet" href="../../assets/js/theme.bundle"></link>
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                {/* <!--Bootstrap icons--> */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                />
                {/* <!--Main style--> */}
                <link rel="stylesheet" href="../../assets/css/style.min.css" id="switchThemeStyle" />

                {/* <!--Add custom style here--> */}
                {/* <!-- <link rel="stylesheet" href="assets/css/custom.css"> --> */}

                <title>Resto</title>
            </Helmet>
            {/* <!--Main content--> */}
            {/* 상단 header 디자인 부분 */}
            <section className="position-relative overflow-hidden bg-dark">
                <div className="container pt-8 pb-6 text-center position-relative">
                    <div className="row pt-4 pt-lg-6 justify-content-center text-center">
                        <div className="col-lg-8 col-md-10">
                            <h1 className="display-3 mb-3 mx-auto">Extended Tiles</h1>
                            <p className="lead mb-0">The best food in town at one of the best locations</p>
                        </div>
                    </div>
                </div>
            </section>
            <main id="main">
                <section className="position-relative">
                    <div className="container py-7 py-lg-10">
                        <div className="row">
                            <div className="col-md-10 col-lg-7 mx-auto">
                                <div className="mb-5" data-aos="fade-up" data-aos-duration="400">
                                    <h4 className="mb-3">Call us</h4>
                                    <h2 className="mb-0 display-5 fw-lighter">
                                        <a href="#"> +01 123-456-4590</a>
                                    </h2>
                                </div>
                                <hr className="my-0" />
                                <div className="mb-5 pt-5" data-aos="fade-up" data-aos-duration="400">
                                    <h4 className="mb-3">Send Email</h4>
                                    <h2 className="mb-0 display-5 fw-lighter">
                                        <a href="mailto:booking@resto.com" className="d-inline-block">
                                            <span>booking@resto.com</span>
                                        </a>
                                    </h2>
                                </div>
                                <hr className="my-0" />
                                <div className="mb-5 pt-5" data-aos="fade-up" data-aos-duration="400">
                                    <h4 className="mb-3">Opening house</h4>
                                    <h2 className="mb-0 display-5 fw-lighter"></h2>
                                </div>
                                <hr className="my-5" />

                                {/* 수정하기 */}
                                <div class="mx-auto">
                                    <div class="">
                                        <form>
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-sm-6 col-12 mb-2 mb-sm-0">
                                                        <div class="mb-2">
                                                            <label class="mb-2">카테고리</label>
                                                            <input
                                                                type="email"
                                                                id="contactMail"
                                                                class="form-control"
                                                                placeholder="예약문의"
                                                                required=""
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-12">
                                                        <div class="mb-2">
                                                            <label class="mb-2">이름</label>
                                                            <input
                                                                type="text"
                                                                id="contactPhone"
                                                                class="form-control"
                                                                placeholder="홍길동"
                                                                required=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <div class="row">
                                                    <div class="col-sm-6 col-12 mb-2 mb-sm-0">
                                                        <div class="mb-2">
                                                            <label class="mb-2">이메일</label>
                                                            <input
                                                                type="email"
                                                                id="contactMail"
                                                                class="form-control"
                                                                placeholder="test@test.com"
                                                                required=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 col-12">
                                                        <div class="mb-2">
                                                            <label class="mb-2">연락처</label>
                                                            <input
                                                                type="text"
                                                                id="contactPhone"
                                                                class="form-control"
                                                                placeholder="010-0000-0000"
                                                                required=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <span style={{ color: 'red', fontSize: '12' }}>
                                                    문의한 내용이 이메일과 문자로 발송되오니, 정확히 입력하시기
                                                    바랍니다.
                                                </span>
                                            </div>

                                            <div class="mb-3">
                                                <label class="mb-2">문의하기</label>
                                                <textarea
                                                    rows="6"
                                                    id="contactMsg"
                                                    class="form-control"
                                                    // placeholder="Enter your Message"
                                                    required=""
                                                ></textarea>
                                            </div>
                                            <div class="text-end">
                                                <button
                                                    type="submit"
                                                    class="btn btn-lg btn-outline-primary btn-hover-scale"
                                                >
                                                    <span>발송</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default QnA
