import React, { useState } from 'react'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css/navigation'
const MenuSet = () => {
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)
    return (
        <>
            <Header />
            <section className="position-relative overflow-hidden bg-dark jarallax" data-speed=".3">
                <img src="assets/img/1920x1000/5.jpg" alt="" className="jarallax-img opacity-25" />

                <div className="container pt-8 pb-6 text-center position-relative text-white">
                    <div className="row pt-4 pt-lg-6 justify-content-center text-center">
                        <div className="col-lg-8 col-md-10">
                            <h1 className="display-2 mb-2 mx-auto">MENU</h1>
                            <p className="lead mb-0">The best food in town at one of the best locations</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container py-7 py-lg-10 position-relative z-index-1">
                <div className="row">
                    {/* 메뉴 카드 영역 */}
                    <div className="col-md-12">
                        <div
                            className="position-relative z-index-1 bg-white mb-4 bg-repeat"
                            style={{ backgroundImage: "url('assets/img/dust.png')" }}
                        >
                            {/* 메뉴 상단 header 부분 */}
                            {/* <div className="mb-0 px-4 py-5 bg-light position-relative d-flex align-items-end justify-content-center">
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
                            <h3 className="mb-0 px-3 display-3">SET</h3>

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
                        </div> */}

                            <h4 className="mb-1 mt-4" id="lunchset">
                                LUNCH SET
                            </h4>
                            <ul className="list-unstyled mb-0 px-3 py-5">
                                <li className="mb-4 mb-lg-5" onClick={toggle}>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">A.</h5>
                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                <span className="fw-bold">38, /1인</span>
                                            </div>
                                            <p className="mb-1">
                                                오늘의 핀초{'  '}
                                                <a className="small text-dark">Pintxo de ‘TapaMadre’</a>
                                            </p>
                                            <p className="mb-1">
                                                하몽 샐러드{'  '}
                                                <a className="small text-dark">Ensalade de jamon serrano</a>
                                            </p>
                                            <p className="mb-1">
                                                크로케타{'  '}
                                                <a className="small text-dark">Crozueras de jamon</a>
                                            </p>
                                            <p className="mb-1">
                                                감바스 알 하이요 + 빵{'  '}
                                                <a className="small text-dark">Gambas al aijllo + Pan</a>
                                            </p>
                                            <p className="mb-1">
                                                세라노하몽을 채운 양송이 버섯요리{'  '}
                                                <a className="small text-dark">Chamoinones rellenos</a>
                                            </p>
                                            <p className="mb-1">
                                                해산물 빠에야{'  '}
                                                <a className="small text-dark">Paella de marisco</a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--end menu box--> */}
                                <li className="mb-4 mb-lg-5" onClick={toggle}>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">B.</h5>
                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                <span className="fw-bold">46, /1인</span>
                                            </div>
                                            <p className="mb-1">
                                                오늘의 핀초{'  '}
                                                <a className="small text-dark">Pintxo de ‘TapaMadre’</a>
                                            </p>
                                            <p className="mb-1">
                                                하몽 샐러드{'  '}
                                                <a className="small text-dark">Ensalade de jamon serrano</a>
                                            </p>
                                            <p className="mb-1">
                                                크로케타{'  '}
                                                <a className="small text-dark">Crozueras de jamon</a>
                                            </p>
                                            <p className="mb-1">
                                                감바스 알 하이요 + 빵{'  '}
                                                <a className="small text-dark">Gambas al aijllo + Pan</a>
                                            </p>
                                            <p className="mb-1">
                                                세라노하몽을 채운 양송이 버섯요리{'  '}
                                                <a className="small text-dark">Chamoinones rellenos</a>
                                            </p>
                                            <p className="mb-1">
                                                이베리코 스테이크{'  '}
                                                <a className="small text-dark">Cuello de cerdo iberico</a>
                                            </p>
                                            <p className="mb-1">
                                                해산물 빠에야{'  '}
                                                <a className="small text-dark">Paella de marisco</a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--end menu box--> */}
                            </ul>

                            <h4 className="mb-1 mt-4" id="dinnerset">
                                DINNER SET
                            </h4>
                            <ul className="list-unstyled mb-0 px-3 py-5">
                                {/* dinner A세트 */}
                                <li className="mb-4 mb-lg-5" onClick={toggle}>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">A.</h5>
                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                <span className="fw-bold">60, /1인</span>
                                            </div>
                                            <p className="mb-1">
                                                토마토 부라타 샐러드{'  '}
                                                <a className="small text-dark">Ensalada de queso burrata y tomate</a>
                                            </p>
                                            <p className="mb-1">
                                                오늘의 핀초{'  '}
                                                <a className="small text-dark">Pintxo de ‘TapaMadre’</a>
                                            </p>
                                            <p className="mb-1">
                                                핸드카빙 5J 이베리코 하몽 플레터{'  '}
                                                <a className="small text-dark">Plato de iberico jamon bellota 5J</a>
                                            </p>
                                            <p className="mb-1">
                                                감바스 알 하이요 + 빵{'  '}
                                                <a className="small text-dark">Gambas al aijllo + Pan</a>
                                            </p>
                                            <p className="mb-1">
                                                양송이 버섯요리{'  '}
                                                <a className="small text-dark">Chamoinones rellenos</a>
                                            </p>
                                            <p className="mb-1">
                                                이베리코 베요타 스테이크{'  '}
                                                <a className="small text-dark">Cuello de cerdo iberico</a>
                                            </p>
                                            <p className="mb-1">
                                                해산물 빠에야{'  '}
                                                <a className="small text-dark">Paella de marisco</a>
                                            </p>
                                            <p className="mb-1">
                                                디저트{'  '}
                                                <a className="small text-dark">Poster</a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                {/* dinner B세트 */}
                                <li className="mb-4 mb-lg-5" onClick={toggle}>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">B.</h5>
                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                <span className="fw-bold">100, /1인</span>
                                            </div>
                                            <p className="mb-1">
                                                핸드카빙 5J 이베리코 하몽 플레터{'  '}
                                                <a className="small text-dark">Plato de iberico jamon bellota 5J</a>
                                            </p>
                                            <p className="mb-1">
                                                시즌 세비체 <a className="small text-dark">Season Ceviche</a>
                                            </p>
                                            <p className="mb-1">
                                                감바스 알 하이요 + 빵{'  '}
                                                <a className="small text-dark">Gambas al aijllo + Pan</a>
                                            </p>
                                            <p className="mb-1">
                                                양송이 버섯요리{'  '}
                                                <a className="small text-dark">Chamoinones rellenos</a>
                                            </p>
                                            <p className="mb-1">
                                                뽈뽀 아 라 가예가{'  '}
                                                <a className="small text-dark">Pulpo a la gallerga</a>
                                            </p>
                                            <p className="mb-1">
                                                피쉬 그릴{'  '}
                                                <a className="small text-dark">Pescado</a>
                                            </p>
                                            <p className="mb-1">
                                                이베리코 베요타 스테이크{'  '}
                                                <a className="small text-dark">Cuello de cerdo iberico</a>
                                            </p>
                                            <p className="mb-1">
                                                해산물 빠에야{'  '}
                                                <a className="small text-dark">Paella de marisco</a>
                                            </p>
                                            <p className="mb-1">
                                                디저트{'  '}
                                                <a className="small text-dark">Poster</a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--end menu box--> */}
                                <li className="mb-4 mb-lg-5">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">C.</h5>
                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                <span className="fw-bold">120, /1인</span>
                                            </div>
                                            <p className="mb-1">
                                                셰프 특선 메뉴
                                                <a className="small text-dark">Chef’s special menu</a>
                                            </p>
                                            <p className="mb-1 small"> * 4인 이상 사전 주문 시 준비됩니다.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Modal isOpen={modal} toggle={toggle} size="xl">
                <ModalHeader toggle={toggle}>음식상세</ModalHeader>
                <ModalBody>
                    <div className="d-flex justify-content-end">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            style={{ maxWidth: '40%', maxHeight: '60vh' }} // 스와이퍼 크기 조절
                        >
                            <SwiperSlide>
                                <img src="assets/img/menu/drink2.jpg" alt="" className="img-fluid mb-3" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="assets/img/menu/drink2.jpg" alt="" className="img-fluid mb-3" />
                            </SwiperSlide>
                        </Swiper>
                        <div className="d-flex justify-content-end">
                            <div className="mr-3">
                                <p>
                                    상그리아는 스페인, 포르투갈을 필두로 주로 뜨거운 태양이 있는 나라에서 즐겨 마시는
                                    국민 음료. 보통은 레드 와인에 오렌지나 레몬, 라임 등을 슬라이스 해서 넣고,
                                    파인애플이나 딸기, 포도
                                </p>
                            </div>
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        닫기
                    </Button>{' '}
                </ModalFooter>
            </Modal>
        </>
    )
}

export default MenuSet
