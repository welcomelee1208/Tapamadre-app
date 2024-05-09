import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

import '../../assets/css/app.css'

const Social = () => {
    // aos 초기화
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <Header />

            {/* 상단 header 디자인 부분 */}
            <section className="position-relative overflow-hidden bg-dark jarallax" data-speed=".3">
                <img src="assets/img/1920x1000/5.jpg" alt="" className="jarallax-img opacity-25" />

                <div className="container pt-8 pb-6 text-center position-relative text-white">
                    <div className="row pt-4 pt-lg-6 justify-content-center text-center">
                        <div className="col-lg-8 col-md-10">
                            <h1 className="display-2 mb-2 mx-auto">Social</h1>
                            <p className="lead mb-0">The best food in town at one of the best locations</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Main content--> */}
            <main id="main">
                <section class="position-relative">
                    <div class="container pb-7">
                        <div class="row">
                            {/* <div class="col-12 mb-6">
                                <div class="embed-responsive embed-responsive-21by9 position-relative mt-n8">
                                    <div class="embed-responsive-item" id="map" style={{ height: '300px' }}></div>
                                </div>
                            </div> */}
                            <div class="container py-7 py-lg-10">
                                <nav class="nav nav-pill filter-nav mb-5 d-flex justify-content-center">
                                    <button
                                        type="button"
                                        data-filter="*"
                                        data-bs-target=".isotope-grid"
                                        data-bs-toggle="pill"
                                        class="btn btn-outline-secondary active rounded-pill btn-sm is-checked me-2"
                                    >
                                        All
                                    </button>
                                    <button
                                        type="button"
                                        data-filter=".g_2021"
                                        data-bs-target=".isotope-grid"
                                        data-bs-toggle="pill"
                                        class="btn btn-outline-secondary rounded-pill btn-sm me-2"
                                    >
                                        2021
                                    </button>
                                    <button
                                        type="button"
                                        data-filter=".g_2022"
                                        data-bs-target=".isotope-grid"
                                        data-bs-toggle="pill"
                                        class="btn btn-outline-secondary rounded-pill btn-sm"
                                    >
                                        2022
                                    </button>
                                </nav>
                                <div class="row g-2 isotope-grid" data-isotope>
                                    <div class="col-md-4 col-sm-6 grid-item g_2022">
                                        <Link
                                            href="../../assets/img/logo.png"
                                            data-title="Lorem ipsum 2022"
                                            data-gallery="gallery"
                                            class="glightbox hover-shadow hover-lift d-block"
                                            to="https://www.instagram.com/tapamadre2016/"
                                        >
                                            <img src="../../assets/img/logo.png" alt="" class="img-fluid" />
                                        </Link>
                                    </div>
                                    <div class="col-md-4 col-sm-6 grid-item g_2021">
                                        <a
                                            href="assets/img/800x600/3.jpg"
                                            data-title="Lorem ipsum 2021"
                                            data-gallery="gallery"
                                            class="glightbox hover-shadow hover-lift d-block"
                                        >
                                            <img src="assets/img/800x600/3.jpg" alt="" class="img-fluid" />
                                        </a>
                                    </div>
                                    <div class="col-md-4 col-sm-6 grid-item g_2022">
                                        <a
                                            href="assets/img/800x600/5.jpg"
                                            data-title="Lorem ipsum 2022"
                                            data-gallery="gallery"
                                            class="glightbox hover-shadow hover-lift d-block"
                                        >
                                            <img src="assets/img/800x600/5.jpg" alt="" class="img-fluid" />
                                        </a>
                                    </div>
                                    <div class="col-md-4 col-sm-6 grid-item g_2021">
                                        <a
                                            href="assets/img/800x600/4.jpg"
                                            data-title="Lorem ipsum 2021"
                                            data-gallery="gallery"
                                            class="glightbox hover-shadow hover-lift d-block"
                                        >
                                            <img src="assets/img/800x600/4.jpg" alt="" class="img-fluid" />
                                        </a>
                                    </div>
                                    <div class="col-md-4 col-sm-6 grid-item g_2022">
                                        <a
                                            href="assets/img/800x600/6.jpg"
                                            data-title="Lorem ipsum 2022"
                                            data-gallery="gallery"
                                            class="glightbox hover-shadow hover-lift d-block"
                                        >
                                            <img src="assets/img/800x600/6.jpg" alt="" class="img-fluid" />
                                        </a>
                                    </div>
                                    <div class="col-md-4 col-sm-6 grid-item g_2021">
                                        <a
                                            href="assets/img/800x600/2.jpg"
                                            data-title="Lorem ipsum 2021"
                                            data-gallery="gallery"
                                            class="glightbox hover-shadow hover-lift d-block"
                                        >
                                            <img src="assets/img/800x600/2.jpg" alt="" class="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <p class="text-center mb-0 pt-8">
                                    <a href="#!" class="h6 mb-0 text-secondary d-inline-flex align-items-center">
                                        Follow us on
                                        <svg
                                            class="ms-2"
                                            viewBox="0 0 512 512"
                                            width="1.5rem"
                                            height="1.5rem"
                                            fill="currentColor"
                                        >
                                            <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                                            <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                                        </svg>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mapBox">
                        <img src="../../assets/img/map2.png" style={{ width: '100%', height: '90%' }} />
                        {/* <i class="bi bi-calendar2-check"></i> */}
                        <div className="box">
                            <div className="col-md-4 mb-5 mb-md-0">
                                <img
                                    src="assets/img/main.png"
                                    style={{ width: '300px' }}
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                />
                            </div>
                            <div className="col-md-8 mb-5 mb-md-0" style={{ padding: '2rem' }}>
                                <div
                                    className="mb-4 pb-4 border-bottom border-light"
                                    data-aos="fade-up"
                                    data-aos-delay="50"
                                >
                                    <h5 className="mb-3">Opening hours</h5>
                                    <div style={{ display: 'flex' }}>
                                        <div className="mb-2 col-4" style={{ color: '#ff3d00' }}>
                                            주중(월-금)
                                        </div>
                                        <div className="col-8">
                                            11:30 - 22:00 (BreakTime : 15:00 - 17:30) <br />
                                            Last Order : 런치2시, 디너9시
                                        </div>
                                    </div>
                                    <hr />
                                    <div style={{ display: 'flex' }}>
                                        <div className="mb-2 py-2 mb-0 col-4" style={{ color: '#ff3d00' }}>
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
        </>
    )
}

export default Social
