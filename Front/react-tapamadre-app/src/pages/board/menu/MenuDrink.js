import React from 'react'
import { Link, Element } from 'react-scroll'

const MenuDrink = () => {
    return (
        <div className="container py-7 py-lg-10 position-relative z-index-1">
            <div className="row">
                {/* 카테고리 영역 */}
                <div className="col-md-3 col-lg-3">
                    <div className="position-relative mb-5 order-md-1">
                        <h5 className="mb-3">Categories</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link
                                    activeClass="active"
                                    to="sangria"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-secondary d-block py-1r my-2"
                                >
                                    SANGRIA 상그리아
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="vino"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-secondary d-block py-1r my-2"
                                >
                                    VINO 글라스 와인
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="bebidas"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-secondary d-block py-1r my-2"
                                >
                                    BEBIDAS 음료
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="cerveza"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-secondary d-block py-1r my-2"
                                >
                                    CERVEZA 맥주
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 메뉴 카드 영역 */}
                <div className="col-md-9">
                    <div
                        className="position-relative z-index-1 bg-white mb-4 bg-repeat order-md-2"
                        style={{ backgroundImage: "url('assets/img/dust.png')" }}
                    >
                        {/* 메뉴 상단 header 부분 */}
                        {/* <div className="mb-0 px-4 py-5 bg-light position-relative d-flex align-items-center justify-content-center">
                            <svg
                                className="text-primary"
                                width="60"
                                height="60"
                                viewBox="0 0 236 236"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M50.6133 89.0898H41.8242V97.8789H50.6133V89.0898Z" fill="currentColor" />
                                <path d="M50.6133 67.1172H41.8242V75.9062H50.6133V67.1172Z" fill="currentColor" />
                                <path d="M61.5703 78.0742H52.7812V86.8633H61.5703V78.0742Z" fill="currentColor" />
                                <path d="M39.5977 78.0742H30.8086V86.8633H39.5977V78.0742Z" fill="currentColor" />
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

                            <h3 className="mb-0 px-3 display-3 fst-italic font-serif">Drink</h3>

                            <svg
                                className="text-primary flip-x"
                                width="60"
                                height="60"
                                viewBox="0 0 236 236"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M50.6133 89.0898H41.8242V97.8789H50.6133V89.0898Z" fill="currentColor" />
                                <path d="M50.6133 67.1172H41.8242V75.9062H50.6133V67.1172Z" fill="currentColor" />
                                <path d="M61.5703 78.0742H52.7812V86.8633H61.5703V78.0742Z" fill="currentColor" />
                                <path d="M39.5977 78.0742H30.8086V86.8633H39.5977V78.0742Z" fill="currentColor" />
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
                        </div> */}

                        {/* 메뉴 LIST 영역 */}
                        <h4 className="mb-1" id="sangria">
                            SANGRIA 상그리아
                        </h4>
                        <ul className="list-unstyled mb-0 px-3 py-5">
                            {/* 메뉴항목1 */}
                            <li className="d-flex flex-row mb-4 mb-lg-5">
                                <div>
                                    <img
                                        src="assets/img/menu/drink2.jpg"
                                        alt=""
                                        className="width-60 rounded-circle shadow me-2 me-lg-4"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">Sangria</h5>
                                        <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                        <span className="fw-bold">36,-</span>
                                    </div>
                                    <p className="mb-0">1000ml</p>
                                </div>
                            </li>
                            {/* 메뉴항목2 */}
                            <li className="d-flex flex-row mb-4 mb-lg-5">
                                <div>
                                    <img
                                        src="assets/img/menu/drink5.jpg"
                                        alt=""
                                        className="width-60 rounded-circle shadow me-2 me-lg-4"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">Sangria Glass</h5>
                                        <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                        <span className="fw-bold">10,9-</span>
                                    </div>
                                    <p className="mb-0">250ml / white, Red</p>
                                </div>
                            </li>
                            {/* 메뉴항목3 */}
                            <li className="d-flex flex-row mb-4 mb-lg-5">
                                <div>
                                    <img
                                        src="assets/img/menu/drink4.jpg"
                                        alt=""
                                        className="width-60 rounded-circle shadow me-2 me-lg-4"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">
                                            NonAlcolhol Sangria
                                        </h5>
                                        <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                        <span className="fw-bold">10,9-</span>
                                    </div>
                                    <p className="mb-0">250ml</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuDrink
