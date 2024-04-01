// 메인 홈화면 컴포넌트
import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <div>
            <Helmet>
                {/* Google Fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                {/* Bootstrap Icons */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                    rel="stylesheet"
                />
                {/* Main style */}
                <link rel="stylesheet" href="assets/css/style.min.css" id="switchThemeStyle" />
                {/* Custom style (if needed) */}
                <link rel="stylesheet" href="assets/css/custom.css" />
                {/* Title */}
                <title>Resto</title>
            </Helmet>
            <body>
                {/* <!--Page hero--> */}
                <section
                    className="position-relative bg-dark text-white h-100 overflow-hidden jarallax"
                    data-speed="0.2"
                >
                    <img src="assets/img/1920x1000/5.jpg" alt="" className="jarallax-img opacity-25" />
                    <div className="container h-100 align-items-end d-flex w-100 text-white py-4 zindex-2 position-relative">
                        <div className="row w-100">
                            <div className="col-xl-9 text-center mx-auto">
                                <h1 className="display-1 mb-5">Welcome to Tapamadre</h1>
                                {/* <div className="mb-7 mb-lg-8">
                                    <Link href="#main" data-scroll className="btn btn-primary btn-hover-scale btn-lg">
                                        <span> Explore Menu</span>
                                    </Link>
                                </div> */}
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
                                        Made with natural ingredients
                                    </h1>
                                    <p className="mb-5 ps-4 border-2 border-info border-start position-relative me-lg-n5">
                                        Lorem massa cras eget ut bibendum. Utoh pharetra orci est pretium. Id purus sed
                                        ornare ridiculus sem diam ultricies aliquam cras.
                                    </p>
                                    <img src="assets/img/sign.png" className="d-block" alt="" />
                                </div>
                                <div
                                    className="col-lg-6 col-xl-5 order-1 order-lg-last position-relative mb-5 mb-lg-0"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    {/* <!-- Image --> */}
                                    <div className="position-relative">
                                        <img src="assets/img/intro.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="position-relative" style={{ backgroundColor: 'black' }}>
                        <div className="container position-relative z-index-1 p-lg-5">
                            <div className="row g-2 justify-content-center">
                                <div className="col-md-4 col-sm-10 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="50">
                                    <Link
                                        href="#!"
                                        className="card-overlay d-block position-relative overflow-hidden tilt-image1"
                                    >
                                        <img
                                            className="img-fluid"
                                            src="assets/img/600x800/1.jpg"
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
                                <div
                                    className="col-md-4 col-sm-10 mb-4 mb-md-0"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    <Link
                                        href="#!"
                                        className="card-overlay d-block position-relative overflow-hidden tilt-image2"
                                    >
                                        <img
                                            className="img-fluid"
                                            src="assets/img/600x800/2.jpg"
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
                                        href="#!"
                                        className="card-overlay d-block position-relative overflow-hidden tilt-image3"
                                    >
                                        <img
                                            className="img-fluid"
                                            src="assets/img/600x800/5.jpg"
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
                    <section class="position-relative">
                        <div className="container position-relative overflow-hidden py-7">
                            <div className="row">
                                <div className="mb-5 text-center col-12" data-aos="fade-up" data-aos-duration="200">
                                    <div data-aos="fade-up">{/* <h6 className="mb-2">On highlight</h6> */}</div>
                                    <h1 className="display-4 mb-0">Q & A</h1>
                                </div>
                            </div>
                            <div className="mb-5" style={{ display: 'flex' }}>
                                {/* 지도 */}
                                <div class="col-6 mb-6">
                                    <img src="assets/img/map.png" style={{ height: 400 }} />
                                </div>
                                {/* 영업시간, 연락처 */}
                                <div class="col-md-6 mb-5 mb-md-0" style={{ textAlign: 'left' }}>
                                    <div
                                        class="mb-4 pb-4 border-bottom border-light"
                                        data-aos="fade-up"
                                        data-aos-delay="50"
                                    >
                                        <h5 class="mb-3">Opening hours</h5>
                                        <p class="mb-2">
                                            Tuesday - <small class="text-dark">10am - 5pm</small>
                                        </p>
                                        <p class="mb-2 border-top border-bottom border-light py-2 mb-0">
                                            Sunday - <small class="text-dark">5pm - 11pm</small>
                                        </p>
                                        <p class="mb-0">
                                            Monday - <small class="text-dark">Close</small>
                                        </p>
                                    </div>
                                    <div
                                        class="mb-4 border-bottom border-light pb-4"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <h5 class="mb-3">Mail us</h5>
                                        <p class="lead mb-0">
                                            <Link href="mailto:yourmail@domain.com" class="text-secondary">
                                                yourmail@domain.com
                                            </Link>
                                        </p>
                                    </div>
                                    <div class="mb-0" data-aos="fade-up" data-aos-delay="150">
                                        <h5 class="mb-3">Call us</h5>
                                        <p class="lead text-dark mb-0">
                                            <Link href="#" class="text-secondary">
                                                +01 123-456-4590
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 문의사항 */}
                            <div class="col-md-6 mx-auto">
                                <div class="">
                                    <form>
                                        <div class="mb-3">
                                            <div class="row">
                                                <div class="col-sm-6 col-12 mb-2 mb-sm-0">
                                                    <div class="mb-2">
                                                        <label class="mb-2">Category</label>
                                                        <input
                                                            type="text"
                                                            id="contactMail"
                                                            class="form-control"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-12">
                                                    <div class="mb-2">
                                                        <label class="mb-2">Name</label>
                                                        <input
                                                            type="text"
                                                            id="contactPhone"
                                                            class="form-control"
                                                            placeholder="Your Name"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-12">
                                                    <div class="mb-2">
                                                        <label class="mb-2">Email</label>
                                                        <input
                                                            type="text"
                                                            id="contactPhone"
                                                            class="form-control"
                                                            placeholder="Your Email"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-12">
                                                    <div class="mb-2">
                                                        <label class="mb-2">Phone Number</label>
                                                        <input
                                                            type="text"
                                                            id="contactPhone"
                                                            class="form-control"
                                                            placeholder="Your Phone"
                                                            required=""
                                                        />
                                                        <span style={{ fontSize: 10, color: 'red' }}>
                                                            문의한 내용이 문자로 발송되오니, 정확한 연락처를
                                                            입력바랍니다.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <label class="mb-2">Message</label>
                                            <textarea
                                                rows="6"
                                                id="contactMsg"
                                                class="form-control"
                                                placeholder="Enter your Message"
                                                required=""
                                            ></textarea>
                                        </div>
                                        <div class="text-end">
                                            <button
                                                type="submit"
                                                class="btn btn-lg btn-outline-primary btn-hover-scale"
                                            >
                                                <span>Send Message</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="position-relative bg-light"
                        style={{ backgroundImage: "url('assets/img/dust.png')" }}
                    >
                        <div className="container py-7 py-lg-10">
                            <div className="row pb-6">
                                <div className="mb-5 text-center col-12" data-aos="fade-up" data-aos-duration="200">
                                    <div data-aos="fade-up">
                                        <h6 className="mb-2">On highlight</h6>
                                    </div>
                                    <h1 className="display-4 mb-0">News & events</h1>
                                </div>
                                {/* <!--News & Event row--> */}
                                <div className="row justify-content-center mb-8 align-items-stretch">
                                    <div
                                        className="col-md-6 col-lg-4 mb-5 mb-md-0"
                                        data-aos="fade-up"
                                        data-aos-delay="50"
                                    >
                                        <Link href="#!" className="d-block overflow-hidden">
                                            <div className="thumbnail-hover">
                                                <img src="assets/img/600x800/5.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                        <div className="p-4 pb-0 d-flex flex-column">
                                            <Link href="#!" className="text-dark">
                                                <h3 className="text-reset position-relative mb-2">
                                                    Enjoy locally sourced fish and seafood.
                                                </h3>
                                                {/* <!--Divider line--> */}
                                                <div className="d-inline-block pe-7 pt-1 border-top mb-1"></div>
                                                <span className="text-muted d-block small">December 03, 2020</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                        <Link href="#!" className="d-block overflow-hidden">
                                            <div className="thumbnail-hover">
                                                <img src="assets/img/600x800/2.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </Link>
                                        <div className="p-4 pb-0 d-flex flex-column">
                                            <Link href="#!" className="text-dark">
                                                <h3 className="text-reset position-relative mb-2">
                                                    Ceiling offering a view to every guest
                                                </h3>
                                                {/* <!--Divider line--> */}
                                                <div className="d-inline-block pe-7 pt-1 border-top mb-1"></div>
                                                <span className="text-muted d-block small">December 03, 2020</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--END News & Event row--> */}
                                {/* <!--Divider pattern--> */}
                                <div className="text-center text-info mb-5" data-aos="fade-up" data-aos-delay="200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="45"
                                        height="14"
                                        viewBox="0 0 45 14"
                                        fill="none"
                                    >
                                        <circle cx="1.5" cy="1" r="1" fill="currentColor" />
                                        <circle cx="7.5" cy="1" r="1" fill="currentColor" />
                                        <circle cx="13.5" cy="1" r="1" fill="currentColor" />
                                        <circle cx="19.5" cy="1" r="1" fill="currentColor" />
                                        <circle cx="1.5" cy="7" r="1" fill="currentColor" />
                                        <circle cx="7.5" cy="7" r="1" fill="currentColor" />
                                        <circle cx="13.5" cy="7" r="1" fill="currentColor" />
                                        <circle cx="19.5" cy="7" r="1" fill="currentColor" />
                                        <circle cx="1.5" cy="13" r="1" fill="currentColor" />
                                        <circle cx="7.5" cy="13" r="1" fill="currentColor" />
                                        <circle cx="13.5" cy="13" r="1" fill="currentColor" />
                                        <circle cx="19.5" cy="13" r="1" fill="currentColor" />
                                        <circle cx="25.5" cy="1" r="1" fill="currentColor" />
                                        <circle cx="31.5" cy="1" r="1" fill="currentColor" />
                                        <circle cx="37.5" cy="1" r="1" fill="currentColor" />
                                        <circle cx="43.5" cy="1" r="1" fill="currentColor" />
                                        <circle cx="25.5" cy="7" r="1" fill="currentColor" />
                                        <circle cx="31.5" cy="7" r="1" fill="currentColor" />
                                        <circle cx="37.5" cy="7" r="1" fill="currentColor" />
                                        <circle cx="43.5" cy="7" r="1" fill="currentColor" />
                                        <circle cx="25.5" cy="13" r="1" fill="currentColor" />
                                        <circle cx="31.5" cy="13" r="1" fill="currentColor" />
                                        <circle cx="37.5" cy="13" r="1" fill="currentColor" />
                                        <circle cx="43.5" cy="13" r="1" fill="currentColor" />
                                    </svg>
                                </div>

                                <div
                                    className="d-flex justify-content-center col-12"
                                    data-aos="fade-up"
                                    data-aos-delay="150"
                                >
                                    <Link href="#!" className="btn btn-info btn-lg btn-hover-scale">
                                        <span className="mb-0">View All</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <!--divider--> */}
                        <svg
                            className="position-absolute start-0 bottom-0"
                            preserveAspectRatio="none"
                            width="100%"
                            height="64"
                            viewBox="0 0 1200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g className="text-primary">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0 200L422.667 100L845.333 0L1268 125V200H845.333H422.667H0Z"
                                    fill="currentColor"
                                />
                            </g>
                            <g className="text-dark">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0 200L450.667 108L901.333 16L1352 131V200H901.333H450.667H0Z"
                                    fill="currentColor"
                                />
                            </g>
                        </svg>
                    </section>
                </main>

                <script src="assets/js/theme.bundle.js"></script>
            </body>
        </div>
    )
}

export default Home
