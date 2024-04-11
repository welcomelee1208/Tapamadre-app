// 메뉴화면 컴포넌트
import React from 'react'
import { Helmet } from 'react-helmet'

//하위 화면 컴포넌트 참조
import MenuFood from './MenuFood'
import MenuDrink from './MenuDrink'
import MenuSet from './MenuSet'

import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'

const Menu = () => {
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
                <Header />
                {/* <!--Preloader Begins--> */}
                <div className="preloader"></div>
                {/* <!--Preloader Ends--> */}

                {/* 카트 모달 코드 삭제처리했습니다  */}

                {/* 상단 header 디자인 부분 */}
                {/* <section className="position-relative overflow-hidden bg-light">
                    <div className="container pt-8 pb-6 text-center position-relative">
                        <div className="row pt-4 pt-lg-6 justify-content-center text-center">
                            <div className="col-lg-8 col-md-10">
                                <h1 className="display-3 mb-3 mx-auto">Extended Tiles</h1>
                                <p className="lead mb-0">The best food in town at one of the best locations</p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <!--Main content--> */}
                <main id="main">
                    <div class="container py-7 py-lg-5 position-relative z-index-1">
                        <MenuFood></MenuFood>
                        <hr></hr>
                        <MenuDrink></MenuDrink>
                        <hr></hr>
                        <MenuSet></MenuSet>

                        {/* 메뉴판 pdf 다운로드 버튼
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
                                    </div> */}
                    </div>
                </main>

                {/* 하단 footer 디자인 부분 */}
                {/* <svg
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
                </svg> */}
            </body>
            <Footer />
        </div>
    )
}

export default Menu
