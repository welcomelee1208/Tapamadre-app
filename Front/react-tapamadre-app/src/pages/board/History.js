import React, { useEffect } from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'

const History = () => {
    // aos 초기화
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div>
            <Header />
            {/* 상단 header 디자인 부분 */}
            <section className="position-relative overflow-hidden bg-dark jarallax" data-speed=".3">
                <img src="assets/img/1920x1000/5.jpg" alt="" className="jarallax-img opacity-25" />

                <div className="container pt-8 pb-6 text-center position-relative text-white">
                    <div className="row pt-4 pt-lg-6 justify-content-center text-center">
                        <div className="col-lg-8 col-md-10">
                            <h1 className="display-2 mb-2 mx-auto">History</h1>
                            <p className="lead mb-0">The best food in town at one of the best locations</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* main */}
            <main id="main">
                <section class="position-relative">
                    <div class="container pt-8 pb-3 pt-lg-9 pb-lg-9 position-relative">
                        <div class="row align-items-end justify-content-center">
                            <div class="col-lg-6 col-xl-5" data-aos="fade-right" data-aos-duration="600">
                                <h6 class="mb-2">Since 2016</h6>
                                <h1 class="mb-4 display-5 position-relative">
                                    We make you feel better with fresh & tasty food.
                                </h1>
                                <p class="mb-0">
                                    Lorem ipsum dolor eiusmod tempor dolore magna. quis nostrud ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="position-relative">
                    <div class="position-absolute start-0 top-0 h-50 w-75 bg-opacity-10 bg-info d-none d-lg-block"></div>
                    <div class="container position-relative py-7 py-lg-10">
                        <div class="row justify-content-around align-items-center">
                            <div class="col-lg-6 col-xl-4 order-last" data-aos="fade-right" data-aos-duration="400">
                                <h6 class="mb-3">Our Culture</h6>
                                <h1 class="mb-4 display-5">Without Passion, There is no Taste</h1>
                                <p class="mb-5 pe-lg-3">
                                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                </p>
                                <div class="mb-4 mb-lg-5 pe-lg-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="width-10 border border-primary"></div>
                                        <h5 class="mb-0 ms-2">The Spirit</h5>
                                    </div>
                                    <p class="mb-0">
                                        Lorem ipsum is placeholder text commonly used in the graphic publishing
                                        industries for previewing layouts and visual mockups.
                                    </p>
                                </div>
                                <div class="pe-lg-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="width-10 border border-primary"></div>

                                        <h5 class="mb-0 ms-2">The Environment</h5>
                                    </div>
                                    <p class="mb-0">
                                        Lorem ipsum is placeholder text commonly used in the graphic publishing
                                        industries for previewing layouts and visual mockups.
                                    </p>
                                </div>
                            </div>
                            <div
                                class="col-lg-6 col-xl-5 order-1 mb-5 mb-lg-0"
                                data-aos="fade-right"
                                data-aos-duration="400"
                            >
                                {/* <!-- Image --> */}
                                <div class="position-relative">
                                    <img src="assets/img/600x800/4.jpg" alt="" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="position-relative overflow-hidden">
                    <div
                        class="position-absolute start-0 bottom-0 ms-3 ms-lg-9 bg-dark w-100 h-100 jarallax"
                        data-speed=".3"
                    >
                        <img src="assets/img/1920x1000/5.jpg" alt="" class="jarallax-img opacity-25" />
                    </div>
                    <div class="container px-lg-10 py-7 py-lg-10">
                        {/* <!--Swiper-slider--> */}
                        <div class="swiper-container overflow-hidden pb-6 position-relative ps-3 ps-lg-0 swiper-testimonials text-white mx-lg-12">
                            <div class="swiper-wrapper">
                                {/* <!--Swiper-slide--> */}
                                <div class="swiper-slide">
                                    <div class="text-center">
                                        <svg
                                            class="mb-4 text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="17"
                                            viewBox="0 0 35 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M23.1868 16.22C20.4579 16.22 17.7289 16.1702 15 16.1702C17.4853 10.7967 19.9706 5.37349 22.4558 0C26.3543 0 30.2528 0.0497545 34.2 0.0497545C30.5452 5.42324 26.8416 10.8465 23.1868 16.22Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M8.18681 16.22C5.45787 16.22 2.72894 16.1702 0 16.1702C2.48528 10.7967 4.97056 5.37349 7.45584 0C11.3543 0 15.2528 0.0497545 19.2 0.0497545C15.5452 5.42324 11.8416 10.8465 8.18681 16.22Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <p class="h2 mb-5">
                                            We had lunch here a few times while traveling with family. The servers are
                                            just wonderful and have great memories. We enjoy our delicious lunch. Must
                                            try!
                                        </p>
                                        <h5 class="mb-0 text-white">
                                            Joshua C, <small>CA</small>
                                        </h5>
                                    </div>
                                </div>
                                {/* <!--Swiper-slide--> */}
                                <div class="swiper-slide">
                                    <div class="text-center">
                                        <svg
                                            class="mb-4 text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="17"
                                            viewBox="0 0 35 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M23.1868 16.22C20.4579 16.22 17.7289 16.1702 15 16.1702C17.4853 10.7967 19.9706 5.37349 22.4558 0C26.3543 0 30.2528 0.0497545 34.2 0.0497545C30.5452 5.42324 26.8416 10.8465 23.1868 16.22Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M8.18681 16.22C5.45787 16.22 2.72894 16.1702 0 16.1702C2.48528 10.7967 4.97056 5.37349 7.45584 0C11.3543 0 15.2528 0.0497545 19.2 0.0497545C15.5452 5.42324 11.8416 10.8465 8.18681 16.22Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <p class="h2 mb-5">
                                            We have had two meals here in two days. Both were excellent. Tonight “Q” was
                                            attentive and friendly. Great job!
                                        </p>
                                        <h5 class="mb-0 text-white">
                                            Josh Bob, <small class="text-muted">CA</small>
                                        </h5>
                                    </div>
                                </div>
                                {/* <!--Swiper-slide--> */}
                                <div class="swiper-slide">
                                    <div class="text-center">
                                        <svg
                                            class="mb-4 text-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="17"
                                            viewBox="0 0 35 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M23.1868 16.22C20.4579 16.22 17.7289 16.1702 15 16.1702C17.4853 10.7967 19.9706 5.37349 22.4558 0C26.3543 0 30.2528 0.0497545 34.2 0.0497545C30.5452 5.42324 26.8416 10.8465 23.1868 16.22Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M8.18681 16.22C5.45787 16.22 2.72894 16.1702 0 16.1702C2.48528 10.7967 4.97056 5.37349 7.45584 0C11.3543 0 15.2528 0.0497545 19.2 0.0497545C15.5452 5.42324 11.8416 10.8465 8.18681 16.22Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <p class="h2 mb-5">
                                            The food was fresh, properly prepared and a great value for the price. We
                                            highly recommend it. The breakfast buffet on Sunday was equally as good.
                                        </p>
                                        <h5 class="mb-0 text-white">
                                            Jessica White, <small class="text-muted">LA</small>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Add Pagination --> */}
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </section>
                {/* <!--testimonials end--> */}
                <section class="position-relative">
                    <div class="container py-7 py-lg-10 position-relative">
                        <div class="text-center w-lg-50 w-md-75 w-lg-50 mx-auto" data-aos="fade-up" data-aos-delay="50">
                            <h6 class="mb-2">From the kitchen</h6>
                            <h1 class="mb-5 display-5">Meet the Chefs</h1>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="50">
                                <div class="mb-5 mb-lg-0">
                                    <img src="assets/img/chefs/chef1.jpg" alt="" class="img-fluid mb-4" />
                                    <div>
                                        <h5 class="mb-2">Emily Doe</h5>
                                        <span class="mb-3 d-block text-muted small">Manager</span>
                                        <p class="mb-0">
                                            Lorem ipsum is placeholder text commonly used in the graphic publishing
                                            industries for previewing layouts and visual mockups.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                <div class="mb-5 mb-lg-0">
                                    <img src="assets/img/chefs/chef2.jpg" alt="" class="img-fluid mb-4" />
                                    <div>
                                        <h5 class="mb-2">Gourge Floyyd</h5>
                                        <span class="mb-3 d-block text-muted small">Executive Chef</span>
                                        <p class="mb-0">
                                            Lorem ipsum is placeholder text commonly used in the graphic publishing
                                            industries for previewing layouts and visual mockups.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="150">
                                <div class="">
                                    <img src="assets/img/chefs/chef3.jpg" alt="" class="img-fluid mb-4" />
                                    <div>
                                        <h5 class="mb-2">John Smith</h5>
                                        <span class="mb-3 d-block text-muted small">Master Chef</span>
                                        <p class="mb-0">
                                            Lorem ipsum is placeholder text commonly used in the graphic publishing
                                            industries for previewing layouts and visual mockups.
                                        </p>
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

export default History
