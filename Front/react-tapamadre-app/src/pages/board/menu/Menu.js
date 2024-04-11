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
        <>
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
                    {/* Title */}
                    <title>Resto</title>
                </Helmet>
                <body>
                    <Header />

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
                            <MenuFood />
                            <hr></hr>
                            <MenuDrink />
                            <hr></hr>
                            <MenuSet />

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

                    <Footer />
                </body>
            </div>
        </>
    )
}

export default Menu
