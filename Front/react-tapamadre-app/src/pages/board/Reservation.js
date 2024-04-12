// 예약화면 컴포넌트
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

// AOS 라이브러리
import AOS from 'aos'
import 'aos/dist/aos.css'

const Reservation = () => {
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
            <main>
                <h1>예약</h1>
            </main>
            <Footer />
        </div>
    )
}

export default Reservation
