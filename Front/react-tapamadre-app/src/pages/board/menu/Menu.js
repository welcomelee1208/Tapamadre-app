// 메뉴화면 컴포넌트
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
const Menu = () => {
    return (
        <>
            <Header />
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
                    {/* <!--Preloader Begins--> */}
                    <div className="preloader"></div>
                    {/* <!--Preloader Ends--> */}

                    {/* <!--Shopping cart offcanvas--> */}
                    {/* <!--Cart-modal-start--> */}
                    <div
                        className="offcanvas offcanvas-end fade"
                        id="offcanvasCart"
                        tabindex="-1"
                        aria-labelledby="offcanvasCart"
                        aria-hidden="true"
                    >
                        {/* <!--Cart-header--> */}
                        <div className="offcanvas-header">
                            <h5 className="mb-0">Your cart</h5>
                            <button
                                className="btn-close z-index-1"
                                type="button"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>

                        {/* <!--cart-content--> */}
                        <div className="offcanvas-body">
                            {/* <!--Item card--> */}
                            <div className="card px-1 py-3 card-body flex-row border-0">
                                <div className="me-3">
                                    <img
                                        src="assets/img/menu/dessert1.jpg"
                                        alt=""
                                        className="width-70 rounded-3 shadow"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-0">Sweet dessert</h6>
                                    <span className="d-inline-flex align-items-center my-1">Qty: 1</span>
                                    <div>
                                        <span>$6.00</span>
                                    </div>
                                </div>
                                <div>
                                    <Link href="#!" className="text-muted">
                                        <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            className="bi bi-x"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            {/* <!--Item card--> */}
                            <div className="card px-1 py-3 card-body flex-row border-0">
                                <div className="me-3">
                                    <img
                                        src="assets/img/menu/dessert2.jpg"
                                        alt=""
                                        className="width-70 rounded-3 shadow"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-0">Strawberry cake</h6>
                                    <span className="d-inline-flex align-items-center my-1">Qty: 1</span>
                                    <div>
                                        <span>$7.50</span>
                                    </div>
                                </div>
                                <div>
                                    <Link href="#!" className="text-muted">
                                        <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            className="bi bi-x"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--cart-footer--> */}
                        <div className="offcanvas-footer p-4 border-0 flex-column">
                            <div className="mb-3 d-flex justify-content-between w-100">
                                <p className="mb-0 flex-grow-1">Subtotal</p>
                                <h5 className="mb-0">$11.00</h5>
                            </div>
                            <div className="w-100">
                                <Link href="#" className="btn btn-primary w-100">
                                    continue to Checkout
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <!--Page hero--> */}
                    <section className="position-relative overflow-hidden bg-light">
                        <div className="container pt-8 pb-6 text-center position-relative">
                            <div className="row pt-4 pt-lg-6 justify-content-center text-center">
                                <div className="col-lg-8 col-md-10">
                                    <h1 className="display-3 mb-3 mx-auto">Extended Tiles</h1>
                                    <p className="lead mb-0">The best food in town at one of the best locations</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--Main content--> */}
                    <main id="main">
                        <section className="position-relative">
                            <div className="container py-7 py-lg-10">
                                <div className="row">
                                    <div className="col-md-10 col-lg-8 mx-auto">
                                        {/* <!--Menu Card--> */}
                                        <div
                                            className="position-relative z-index-1 bg-white mb-4 bg-repeat"
                                            style={{ backgroundImage: "url('assets/img/dust.png')" }}
                                        >
                                            <div className="mb-0 px-4 py-5 bg-light position-relative d-flex align-items-end justify-content-center">
                                                <svg
                                                    className="flip-x text-primary"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="60"
                                                    width="60"
                                                    fill="currentColor"
                                                    viewBox="0 0 5 5"
                                                >
                                                    <path d="M2.53229,2.50962a.08033.08033,0,0,0-.06026.03386c-.08988.111-.18242.22012-.26731.33484a2.19621,2.19621,0,0,0-.18855.3684,1.55123,1.55123,0,0,0-.11406.30783c-.009.03683-.0157.07436-.02328.11159a.42714.42714,0,0,1-.01434.06967c-.037.09462-.05317.13421-.16642.07409-.084-.04468-.16367-.09756-.24379-.14908a.15785.15785,0,0,1-.0484-.05116.78555.78555,0,0,1-.12763-.53026,1.64384,1.64384,0,0,1,.18523-.56756,1.55567,1.55567,0,0,1,.2582-.32213,2.19181,2.19181,0,0,1,.32044-.26236c.08271-.05593.16014-.11971.24216-.17673a1.16809,1.16809,0,0,1,.14767-.087q.2625-.13028.53685-.23439c.25814-.09842.51628-.19713.77254-.30057a2.928,2.928,0,0,1,.30688-.11559l.01209.00565.002.01141a.07664.07664,0,0,1-.01616.02231,3.21947,3.21947,0,0,0-.42484.44183,1.521,1.521,0,0,0-.32711.72084c-.02169.12687-.044.25346-.05338.38211a1.45047,1.45047,0,0,1-.024.155,2.38193,2.38193,0,0,1-.0669.30664,1.36513,1.36513,0,0,1-.35979.59176,1.34157,1.34157,0,0,1-.44527.27926.49875.49875,0,0,1-.25255.03219.04333.04333,0,0,1-.03553-.03858.64114.64114,0,0,1,.045-.32155,1.67711,1.67711,0,0,1,.29445-.4704c.02178-.02517.0442-.04987.0649-.076a.04679.04679,0,0,0,.00558-.02607c.00023-.0096-.02284-.0121-.039-.00272-.037.02152-.07281.04508-.11047.06529a.06715.06715,0,0,1-.03979.00328c-.01317-.00219-.01892-.03155-.01126-.05123.00525-.01333.01149-.02616.01711-.03927a3.58675,3.58675,0,0,1,.22921-.44417.23094.23094,0,0,0,.017-.05328l.017-.0199-.01-.00432Z" />
                                                </svg>
                                                <h3 className="mb-0 px-3 display-3">Food</h3>

                                                <svg
                                                    className="text-primary"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="60"
                                                    width="60"
                                                    fill="currentColor"
                                                    viewBox="0 0 5 5"
                                                >
                                                    <path d="M2.53229,2.50962a.08033.08033,0,0,0-.06026.03386c-.08988.111-.18242.22012-.26731.33484a2.19621,2.19621,0,0,0-.18855.3684,1.55123,1.55123,0,0,0-.11406.30783c-.009.03683-.0157.07436-.02328.11159a.42714.42714,0,0,1-.01434.06967c-.037.09462-.05317.13421-.16642.07409-.084-.04468-.16367-.09756-.24379-.14908a.15785.15785,0,0,1-.0484-.05116.78555.78555,0,0,1-.12763-.53026,1.64384,1.64384,0,0,1,.18523-.56756,1.55567,1.55567,0,0,1,.2582-.32213,2.19181,2.19181,0,0,1,.32044-.26236c.08271-.05593.16014-.11971.24216-.17673a1.16809,1.16809,0,0,1,.14767-.087q.2625-.13028.53685-.23439c.25814-.09842.51628-.19713.77254-.30057a2.928,2.928,0,0,1,.30688-.11559l.01209.00565.002.01141a.07664.07664,0,0,1-.01616.02231,3.21947,3.21947,0,0,0-.42484.44183,1.521,1.521,0,0,0-.32711.72084c-.02169.12687-.044.25346-.05338.38211a1.45047,1.45047,0,0,1-.024.155,2.38193,2.38193,0,0,1-.0669.30664,1.36513,1.36513,0,0,1-.35979.59176,1.34157,1.34157,0,0,1-.44527.27926.49875.49875,0,0,1-.25255.03219.04333.04333,0,0,1-.03553-.03858.64114.64114,0,0,1,.045-.32155,1.67711,1.67711,0,0,1,.29445-.4704c.02178-.02517.0442-.04987.0649-.076a.04679.04679,0,0,0,.00558-.02607c.00023-.0096-.02284-.0121-.039-.00272-.037.02152-.07281.04508-.11047.06529a.06715.06715,0,0,1-.03979.00328c-.01317-.00219-.01892-.03155-.01126-.05123.00525-.01333.01149-.02616.01711-.03927a3.58675,3.58675,0,0,1,.22921-.44417.23094.23094,0,0,0,.017-.05328l.017-.0199-.01-.00432Z" />
                                                </svg>
                                            </div>
                                            <ul className="list-unstyled mb-0 px-3 py-5">
                                                <li className="mb-4 mb-lg-5">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <img
                                                                src="assets/img/menu/food1.jpg"
                                                                alt=""
                                                                className="width-60 rounded-circle shadow me-2 me-lg-3"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                                <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">
                                                                    Egg & spinach
                                                                </h5>
                                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                                <span className="fw-bold">$4</span>
                                                            </div>

                                                            <p className="mb-0">Pellentesque enim. Aliquam tempor</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!--end menu box--> */}
                                                <li className="d-flex flex-column mb-4 mb-lg-5">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <img
                                                                src="assets/img/menu/food2.jpg"
                                                                alt=""
                                                                className="width-60 rounded-circle shadow me-2 me-lg-3"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                                <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">
                                                                    Miso soups
                                                                </h5>
                                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                                <span className="fw-bold">$5.5</span>
                                                            </div>

                                                            <p className="mb-0">Pellentesque enim. Aliquam tempor</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!--end menu box--> */}
                                                <li className="d-flex flex-column mb-4 mb-lg-5">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <img
                                                                src="assets/img/menu/food3.jpg"
                                                                alt=""
                                                                className="width-60 rounded-circle shadow me-2 me-lg-3"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                                <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">
                                                                    Veg salad
                                                                </h5>
                                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                                <span className="fw-bold">$4.25</span>
                                                            </div>

                                                            <p className="mb-0">Pellentesque enim. Aliquam tempor</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!--end menu box--> */}
                                                <li className="d-flex flex-column mb-4 mb-lg-5">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <img
                                                                src="assets/img/menu/food4.jpg"
                                                                alt=""
                                                                className="width-60 rounded-circle shadow me-2 me-lg-3"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                                <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">
                                                                    Chicken roasted
                                                                </h5>
                                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                                <span className="fw-bold">$6.00</span>
                                                            </div>

                                                            <p className="mb-0">Pellentesque enim. Aliquam tempor</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!--end menu box--> */}
                                                <li className="d-flex flex-column mb-4">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <img
                                                                src="assets/img/menu/food5.jpg"
                                                                alt=""
                                                                className="width-60 rounded-circle shadow me-2 me-lg-3"
                                                            />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                                <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">
                                                                    Golden corn pizza
                                                                </h5>
                                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                                <span className="fw-bold">$7.50</span>
                                                            </div>

                                                            <p className="mb-0">Pellentesque enim. Aliquam tempor</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <!--end menu box--> */}
                                            </ul>
                                        </div>
                                        {/* <!--End Menu Card--> */}
                                        {/* <!--Menu Card--> */}
                                        <div
                                            className="position-relative z-index-1 bg-white mb-4 bg-repeat"
                                            style={{ backgroundImage: "url('assets/img/dust.png')" }}
                                        >
                                            <div className="mb-0 px-4 py-5 bg-light position-relative d-flex align-items-center justify-content-center">
                                                <svg
                                                    className="text-primary"
                                                    width="60"
                                                    height="60"
                                                    viewBox="0 0 236 236"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M50.6133 89.0898H41.8242V97.8789H50.6133V89.0898Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M50.6133 67.1172H41.8242V75.9062H50.6133V67.1172Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M61.5703 78.0742H52.7812V86.8633H61.5703V78.0742Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M39.5977 78.0742H30.8086V86.8633H39.5977V78.0742Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M82.5469 125.125C78.7383 128.934 76.6875 133.914 76.6875 139.305C76.6875 144.695 78.7969 149.676 82.5469 153.484C86.3555 157.293 91.3359 159.344 96.7266 159.344C102.117 159.344 107.098 157.234 110.906 153.484C118.699 145.691 118.699 132.977 110.906 125.125C103.113 117.332 90.3984 117.332 82.5469 125.125ZM104.695 147.273C102.586 149.383 99.7734 150.555 96.7266 150.555C93.6797 150.555 90.8672 149.383 88.7578 147.273C86.6484 145.164 85.4766 142.352 85.4766 139.305C85.4766 136.258 86.6484 133.445 88.7578 131.336C90.9258 129.168 93.8555 128.055 96.7266 128.055C99.5977 128.055 102.469 129.168 104.695 131.336C109.09 135.73 109.09 142.879 104.695 147.273Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M118.891 155.225L112.677 161.44L118.891 167.655L125.106 161.44L118.891 155.225Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M181.922 82.4688L235.887 28.5039L207.527 0.144531L159.715 47.957L165.926 54.168L195.809 24.2852L211.746 40.2227L175.711 76.2578L142.547 43.0937L0.457031 185.066L50.9062 235.516L112.605 173.816L106.395 167.605L83.7188 190.34L45.6914 152.312L109.793 88.2109L147.82 126.238L125.086 148.973L131.297 155.184L192.996 93.4844L181.922 82.4688ZM202.078 18.0742L207.527 12.625L223.465 28.5625L218.016 34.0117L202.078 18.0742ZM77.5078 196.551L50.9648 223.094L12.9375 185.066L39.4805 158.523L77.5078 196.551ZM154.031 120.086L116.004 82.0586L142.547 55.5156L180.574 93.543L154.031 120.086Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>

                                                <h3 className="mb-0 px-3 display-3">Drink</h3>

                                                <svg
                                                    className="text-primary flip-x"
                                                    width="60"
                                                    height="60"
                                                    viewBox="0 0 236 236"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M50.6133 89.0898H41.8242V97.8789H50.6133V89.0898Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M50.6133 67.1172H41.8242V75.9062H50.6133V67.1172Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M61.5703 78.0742H52.7812V86.8633H61.5703V78.0742Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M39.5977 78.0742H30.8086V86.8633H39.5977V78.0742Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M82.5469 125.125C78.7383 128.934 76.6875 133.914 76.6875 139.305C76.6875 144.695 78.7969 149.676 82.5469 153.484C86.3555 157.293 91.3359 159.344 96.7266 159.344C102.117 159.344 107.098 157.234 110.906 153.484C118.699 145.691 118.699 132.977 110.906 125.125C103.113 117.332 90.3984 117.332 82.5469 125.125ZM104.695 147.273C102.586 149.383 99.7734 150.555 96.7266 150.555C93.6797 150.555 90.8672 149.383 88.7578 147.273C86.6484 145.164 85.4766 142.352 85.4766 139.305C85.4766 136.258 86.6484 133.445 88.7578 131.336C90.9258 129.168 93.8555 128.055 96.7266 128.055C99.5977 128.055 102.469 129.168 104.695 131.336C109.09 135.73 109.09 142.879 104.695 147.273Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M118.891 155.225L112.677 161.44L118.891 167.655L125.106 161.44L118.891 155.225Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M181.922 82.4688L235.887 28.5039L207.527 0.144531L159.715 47.957L165.926 54.168L195.809 24.2852L211.746 40.2227L175.711 76.2578L142.547 43.0937L0.457031 185.066L50.9062 235.516L112.605 173.816L106.395 167.605L83.7188 190.34L45.6914 152.312L109.793 88.2109L147.82 126.238L125.086 148.973L131.297 155.184L192.996 93.4844L181.922 82.4688ZM202.078 18.0742L207.527 12.625L223.465 28.5625L218.016 34.0117L202.078 18.0742ZM77.5078 196.551L50.9648 223.094L12.9375 185.066L39.4805 158.523L77.5078 196.551ZM154.031 120.086L116.004 82.0586L142.547 55.5156L180.574 93.543L154.031 120.086Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <ul className="list-unstyled mb-0 px-3 py-5">
                                                <li className="d-flex flex-row mb-4 mb-lg-5">
                                                    <div>
                                                        <img
                                                            src="assets/img/menu/drink1.jpg"
                                                            alt=""
                                                            className="width-60 rounded-circle shadow me-2 me-lg-3"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex w-100 justify-content-between align-items-center">
                                                            <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">
                                                                Berry coffee
                                                            </h5>
                                                            <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                            <span className="fw-bold">$3.75</span>
                                                        </div>

                                                        <p className="mb-0">Pellentesque enim. Aliquam tempor</p>
                                                    </div>
                                                </li>
                                                {/* <!--end menu box--> */}
                                                <li className="d-flex flex-row mb-4 mb-lg-5">
                                                    <div>
                                                        <img
                                                            src="assets/img/menu/drink2.jpg"
                                                            alt=""
                                                            className="width-60 rounded-circle shadow me-2 me-lg-3"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex w-100 justify-content-between align-items-center">
                                                            <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">
                                                                English tea
                                                            </h5>
                                                            <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                            <span className="fw-bold">$1.75</span>
                                                        </div>

                                                        <p className="mb-0">Pellentesque enim. Aliquam tempor</p>
                                                    </div>
                                                </li>
                                                {/* <!--end menu box--> */}
                                                <li className="d-flex flex-row mb-4 mb-lg-5">
                                                    <div>
                                                        <img
                                                            src="assets/img/menu/drink5.jpg"
                                                            alt=""
                                                            className="width-60 rounded-circle shadow me-2 me-lg-3"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex w-100 justify-content-between align-items-center">
                                                            <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">
                                                                Don dulio anejo tequila
                                                            </h5>
                                                            <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                            <span className="fw-bold">$53.50</span>
                                                        </div>

                                                        <p className="mb-0">Pellentesque enim. Aliquam tempor</p>
                                                    </div>
                                                </li>
                                                {/* <!--end menu box--> */}
                                                <li className="d-flex flex-row mb-4 mb-lg-5">
                                                    <div>
                                                        <img
                                                            src="assets/img/menu/drink4.jpg"
                                                            alt=""
                                                            className="width-60 rounded-circle shadow me-2 me-lg-3"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex w-100 justify-content-between align-items-center">
                                                            <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">
                                                                Milagro silver tequila
                                                            </h5>
                                                            <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                            <span className="fw-bold">$27.25</span>
                                                        </div>

                                                        <p className="mb-0">Pellentesque enim. Aliquam tempor</p>
                                                    </div>
                                                </li>
                                                {/* <!--end menu box--> */}
                                                <li className="d-flex flex-row mb-4 mb-lg-5">
                                                    <div>
                                                        <img
                                                            src="assets/img/menu/drink2.jpg"
                                                            alt=""
                                                            className="width-60 rounded-circle shadow me-2 me-lg-3"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex w-100 justify-content-between align-items-center">
                                                            <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">
                                                                Carrot lamongrass
                                                            </h5>
                                                            <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                            <span className="fw-bold">$3.25</span>
                                                        </div>

                                                        <p className="mb-0">Pellentesque enim. Aliquam tempor</p>
                                                    </div>
                                                </li>
                                                {/* <!--end menu box--> */}
                                            </ul>
                                        </div>
                                        {/* <!--End Menu Card--> */}

                                        {/* <!--Download button--> */}
                                        <div className="text-center pt-5">
                                            <Link href="#!" className="btn btn-success px-4 py-3 rounded-pill">
                                                <div className="d-flex align-items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-cloud-arrow-down-fill me-2"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"
                                                        />
                                                    </svg>
                                                    <span>Download menu (pdf)</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="position-relative border-top">
                            <div className="container pt-8 pb-9 pt-lg-9 position-relative z-index-1">
                                <div className="row justify-content-between">
                                    <div
                                        className="col-md-6 col-xl-5 mb-5 mb-md-0"
                                        data-aos="fade-up"
                                        data-aos-delay="50"
                                    >
                                        <h1 className="display-4 mb-3">How may we Serve you?</h1>
                                        <p className="pe-md-5 pe-lg-8 mb-0">
                                            Feel free to request reservation for one table or entire space for a large
                                            party or event
                                        </p>
                                    </div>
                                    <div className="col-md-6 col-lg-5">
                                        <div className="row row-cols-md-2 mb-3">
                                            <div className="col mb-3" data-aos="fade-up" data-aos-delay="50">
                                                <h5 className="mb-3">Phone</h5>
                                                <p className="lead">
                                                    <Link href="tel:+011234567890">(01) 123 456 7890</Link>
                                                </p>
                                            </div>
                                            <div className="col mb-3" data-aos="fade-up" data-aos-delay="100">
                                                <h5 className="mb-3">Email</h5>
                                                <p className="lead">
                                                    <Link href="mailto:yourmail@domain.com">
                                                        <span>yourmail@domain.com</span>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row row-cols-md-2">
                                            <div className="col" data-aos="fade-up" data-aos-delay="150">
                                                <h5 className="mb-3">Opening Hours</h5>
                                                <p className="mb-21">
                                                    Tuesday - <small>10am - 5pm</small>
                                                </p>
                                                <p className="mb-2 border-top border-bottom py-2 mb-0">
                                                    Sunday - <small>5pm - 11pm</small>
                                                </p>
                                                <p className="mb-0">
                                                    Monday - <small>Close</small>
                                                </p>
                                            </div>
                                            <div className="col" data-aos="fade-up" data-aos-delay="200">
                                                <h5 className="mb-3">Reach us</h5>
                                                <p className="mb-0">124, Lorem Street, NY</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* <!--Divider--> */}
                    <svg
                        preserveAspectRatio="none"
                        width="100%"
                        height="64"
                        viewBox="0 0 1015 162"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g className="text-primary">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1061 32.6481L1038.9 39.8343C1016.79 47.0205 972.583 61.393 928.375 54.2067C884.167 47.0205 839.958 18.2756 795.75 29.055C751.542 39.8343 707.333 90.1378 663.125 90.1378C618.917 90.1378 574.708 39.8343 530.5 25.4619C486.292 11.0894 442.083 32.6481 397.875 29.055C353.667 25.4619 309.458 -3.28301 265.25 0.310095C221.042 3.9032 176.833 39.8343 132.625 61.3929C88.4167 82.9516 44.2083 90.1378 22.1041 93.7309L0 97.324V162H22.1041C44.2083 162 88.4167 162 132.625 162C176.833 162 221.042 162 265.25 162C309.458 162 353.667 162 397.875 162C442.083 162 486.292 162 530.5 162C574.708 162 618.917 162 663.125 162C707.333 162 751.542 162 795.75 162C839.958 162 884.167 162 928.375 162C972.583 162 1016.79 162 1038.9 162H1061V32.6481Z"
                                fill="currentColor"
                            ></path>
                        </g>
                        <g className="text-dark">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1015 42.2297L993.854 48.8836C972.708 55.5375 930.417 68.8453 888.125 62.1914C845.833 55.5375 803.542 28.9219 761.25 38.9027C718.958 48.8836 676.667 95.4609 634.375 95.4609C592.083 95.4609 549.792 48.8836 507.5 35.5758C465.208 22.268 422.917 42.2297 380.625 38.9027C338.333 35.5758 296.042 8.96017 253.75 12.2871C211.458 15.6141 169.167 48.8836 126.875 68.8453C84.5833 88.807 42.2916 95.4609 21.1458 98.7879L0 102.115V162H21.1458C42.2916 162 84.5833 162 126.875 162C169.167 162 211.458 162 253.75 162C296.042 162 338.333 162 380.625 162C422.917 162 465.208 162 507.5 162C549.792 162 592.083 162 634.375 162C676.667 162 718.958 162 761.25 162C803.542 162 845.833 162 888.125 162C930.417 162 972.708 162 993.854 162H1015V42.2297Z"
                                fill="currentColor"
                            ></path>
                        </g>
                    </svg>
                </body>
            </div>
            <Footer />
        </>
    )
}

export default Menu
