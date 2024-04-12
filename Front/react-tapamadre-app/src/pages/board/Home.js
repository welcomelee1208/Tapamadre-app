// 메인 홈화면 컴포넌트
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

// AOS 라이브러리
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    // aos 초기화
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div>
            <Helmet>
                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                {/* Bootstrap Icons */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                    rel="stylesheet"
                />
                {/* <!--aos animation--> */}
                <link rel="stylesheet" href="../../assets/vendor/css/aos.css" />
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
                {/* <!--Bootstrap icons--> */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                />
                {/* Main style */}
                <link rel="stylesheet" href="../../assets/css/style.min.css" id="switchThemeStyle" />

                <link rel="stylesheet" href="../../assets/js/theme.bundle"></link>
                {/* Title */}
                <title>Resto</title>
            </Helmet>
            {/* <body> */}
            {/* <!--Page hero--> */}
            <Header />
            <section className="position-relative bg-dark text-white h-100 overflow-hidden jarallax" data-speed="0.2">
                <img src="../../assets/img/main.png" alt="" className="jarallax-img opacity-25" />
                <div className="container h-100 align-items-end d-flex w-100 text-white py-4 zindex-2 position-relative">
                    <div className="row w-100" style={{ position: 'absolute', top: '50%' }}>
                        <div className="col-xl-9 text-center mx-auto">
                            <h1 className="display-1 mb-5">Welcome to Tapamadre</h1>
                        </div>
                    </div>
                </div>
                {/* <!--End verticle line--> */}
            </section>

            <main id="main">
                <section className="position-relative overflow-hidden">
                    <svg
                        className="text-light position-absolute top-50 start-100 translate-middle"
                        width="300"
                        height="600"
                        preserveAspectRatio="none"
                        viewBox="0 0 120 241"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M120 240.058C88.174 240.058 57.6515 227.415 35.1472 204.91C12.6428 182.406 -8.85339e-07 151.884 0 120.058C8.85339e-07 88.2316 12.6428 57.7092 35.1472 35.2048C57.6516 12.7004 88.174 0.0576168 120 0.0576172V22.7206C94.1846 22.7206 69.4266 32.9757 51.1724 51.23C32.9181 69.4842 22.663 94.2422 22.663 120.058C22.663 145.873 32.9181 170.631 51.1724 188.885C69.4266 207.139 94.1846 217.395 120 217.395L120 240.058Z"
                            fill="currentColor"
                        />
                    </svg>

                    <div className="container py-7 py-lg-10 position-relative z-index-1">
                        <div className="row justify-content-around align-items-center">
                            <div
                                className="col-lg-6 col-xl-4 order-last order-lg-1"
                                data-aos="fade-up"
                                data-aos-delay="50"
                            >
                                <p className="mb-3 text-primary fw-bold small text-uppercase">fresh food</p>
                                <h1 className="mb-5 display-5 position-relative me-lg-n9">
                                    따빠마드레 Tapa Madre
                                </h1>
                                <p className="mb-5 ps-4 border-2 border-info border-start position-relative me-lg-n5">
                                    한국유일 스페인정부 공식인증 레스토랑
                                </p>
                                {/* <img src="assets/img/sign.png" className="d-block" alt="" /> */}
                            </div>
                            <div
                                className="col-lg-6 col-xl-5 order-1 order-lg-last position-relative mb-5 mb-lg-0"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                {/* <!-- Image --> */}
                                <div className="position-relative">
                                    <img src="assets/img/mainImg.jpg" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 메뉴 */}
                <section className="position-relative" style={{ backgroundColor: 'black' }}>
                    <div className="container py-7 py-lg-10 position-relative z-index-1 p-lg-5">
                        <div className="row g-2 justify-content-center">
                            <div className="col-md-4 col-sm-10 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="50">
                                <Link
                                    to="/menu"
                                    className="card-overlay d-block position-relative overflow-hidden tilt-image1"
                                >
                                    <img
                                        className="img-fluid"
                                        src="assets/img/food.jpg"
                                        alt=".."
                                        data-tilt
                                        data-tilt-mouse-event-element=".tilt-image1"
                                    />
                                    <div className="card-overlay-box overlay-linear position-absolute start-0 top-0 w-100 h-100">
                                        <div className="card-overlay-box-content text-white position-relative d-flex h-100 justify-content-end align-items-center flex-column px-4 pb-4 pb-lg-8">
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="order-last flex-grow-1 pt-1 border-top border-bottom border-white"></div>
                                                <h2 className="mb-0 display-6">Food</h2>
                                            </div>
                                            <span className="d-block"> burger . pizza . meat . chicken</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* <!--item-col--> */}
                            <div className="col-md-4 col-sm-10 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                                <Link
                                    to="/menu"
                                    className="card-overlay d-block position-relative overflow-hidden tilt-image2"
                                >
                                    <img
                                        className="img-fluid"
                                        src="assets/img/Drink.jpg"
                                        alt=".."
                                        data-tilt
                                        data-tilt-mouse-event-element=".tilt-image2"
                                    />
                                    <div className="card-overlay-box overlay-linear position-absolute start-0 top-0 w-100 h-100">
                                        <div className="card-overlay-box-content text-white position-relative d-flex h-100 justify-content-end align-items-center flex-column px-4 pb-4 pb-lg-8">
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="order-last flex-grow-1 pt-1 border-top border-bottom border-white"></div>
                                                <h2 className="mb-0 display-6">Drink</h2>
                                            </div>
                                            <span className="d-block"> drink . cocktail . coffee . tea</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* <!--item-col--> */}
                            <div className="col-md-4 col-sm-10" data-aos="fade-up" data-aos-delay="150">
                                <Link
                                    to="/menu"
                                    className="card-overlay d-block position-relative overflow-hidden tilt-image3"
                                >
                                    <img
                                        className="img-fluid"
                                        src="assets/img/set.jpg"
                                        alt=".."
                                        data-tilt
                                        data-tilt-mouse-event-element=".tilt-image3"
                                    />
                                    <div className="card-overlay-box overlay-linear position-absolute start-0 top-0 w-100 h-100">
                                        <div className="card-overlay-box-content text-white position-relative d-flex h-100 justify-content-end align-items-center flex-column px-4 pb-4 pb-lg-8">
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="order-last flex-grow-1 pt-1 border-top border-bottom border-white"></div>
                                                <h2 className="mb-0 display-6">Set Menu</h2>
                                            </div>
                                            <span className="d-block">Lunch . Dinner</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/* <!--item-col--> */}
                        </div>
                    </div>
                </section>

                {/* 영업시간, 연락처, 문의사항 */}
                <section className="position-relative">
                    <div className="container py-7 py-lg-10 position-relative overflow-hidden">
                        {/* <div className="row">
                                <div className="mb-5 text-center col-12" data-aos="fade-up" data-aos-duration="200">
                                    <div data-aos="fade-up"></div>
                                    <h1 className="display-4 mb-0">Q & A</h1>
                                </div>
                            </div> */}
                        <div className="mb-5" style={{ display: 'flex' }}>
                            {/* 지도 */}
                            <div className="col-7">
                                {/* <div className="col-7 mb-7"> */}
                                <img src="assets/img/map.png" style={{ height: 430 }} />
                            </div>
                            {/* 영업시간, 연락처 */}
                            <div className="col-md-5 mb-5 mb-md-0" style={{ textAlign: 'left' }}>
                                <div
                                    className="mb-4 pb-4 border-bottom border-light"
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                >
                                    <h5 className="mb-3">Opening hours</h5>
                                    <div style={{ display: 'flex' }}>
                                        <div className="mb-2 col-4" style={{ color: '#ff3d00', fontWeight: 'bold' }}>
                                            주중(월-금)
                                        </div>
                                        <div className="col-8">
                                            11:30 - 22:00 (BreakTime : 15:00 - 17:30) <br />
                                            Last Order : 런치2시, 디너9시
                                        </div>
                                    </div>
                                    <hr />
                                    <div style={{ display: 'flex' }}>
                                        <div
                                            className="mb-2 border-top border-bottom border-light py-2 mb-0 col-4"
                                            style={{ color: '#ff3d00', fontWeight: 'bold' }}
                                        >
                                            주말(토,일,공휴일)
                                        </div>
                                        <div className="col-8">
                                            12:00 - 17:00 (BreakTime : 16:00 - 17:00) <br />
                                            Last Order : 런치3시, 디너8시
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="mb-4 border-bottom border-light pb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    <h5 className="mb-3">Address</h5>
                                    <p className="mb-0">
                                        서울 종로구 경희궁길 43, 따빠마드레 <br />
                                        신문로2가 1-251
                                    </p>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div className="mb-0 col-6" data-aos="fade-up" data-aos-delay="150">
                                        <h5 className="mb-3">Call us</h5>
                                        <p className="lead text-dark mb-0">
                                            <Link href="#" className="text-secondary">
                                                02-722-4199
                                            </Link>
                                        </p>
                                    </div>

                                    <div
                                        className="mb-4 border-bottom border-light pb-4 col-6"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <h5 className="mb-3">Mail us</h5>
                                        <p className="lead mb-0">
                                            <Link href="madre@gmail.com" className="text-secondary">
                                                madre@gmail.com
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            {/* </body> */}
        </div>
    )
}

export default Home
