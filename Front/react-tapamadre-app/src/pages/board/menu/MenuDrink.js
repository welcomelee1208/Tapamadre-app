import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Link, Element } from 'react-scroll'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
const MenuDrink = () => {
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
                        {/* 메뉴 항목 및 클릭 시 모달 */}
                        <h4 className="mb-1" id="sangria">
                            SANGRIA 상그리아
                        </h4>
                        <ul className="list-unstyled mb-0 px-3 py-5">
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
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
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
                                        alt=""
                                        className="width-60 rounded-circle shadow me-2 me-lg-4"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">Sangria Glass</h5>
                                        <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                        <span className="fw-bold">10,9,-</span>
                                    </div>
                                    <p className="mb-0">250ml / white, Red</p>
                                </div>
                            </li>
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
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
                                        <span className="fw-bold">10,9,-</span>
                                    </div>
                                    <p className="mb-0">250ml</p>
                                </div>
                            </li>
                        </ul>
                        <h4 className="mb-1" id="vino">
                            VINO 글라스와인
                        </h4>
                        <ul className="list-unstyled mb-0 px-3 py-5">
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
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
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
                                        alt=""
                                        className="width-60 rounded-circle shadow me-2 me-lg-4"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">Sangria Glass</h5>
                                        <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                        <span className="fw-bold">10,9,-</span>
                                    </div>
                                    <p className="mb-0">250ml / white, Red</p>
                                </div>
                            </li>
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
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
                                        <span className="fw-bold">10,9,-</span>
                                    </div>
                                    <p className="mb-0">250ml</p>
                                </div>
                            </li>
                        </ul>
                        <h4 className="mb-1" id="bebidas">
                            BEBIDAS음료
                        </h4>
                        <ul className="list-unstyled mb-0 px-3 py-5">
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
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
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
                                        alt=""
                                        className="width-60 rounded-circle shadow me-2 me-lg-4"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">Sangria Glass</h5>
                                        <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                        <span className="fw-bold">10,9,-</span>
                                    </div>
                                    <p className="mb-0">250ml / white, Red</p>
                                </div>
                            </li>
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
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
                                        <span className="fw-bold">10,9,-</span>
                                    </div>
                                    <p className="mb-0">250ml</p>
                                </div>
                            </li>
                        </ul>
                        <h4 className="mb-1" id="bebidas">
                            BEBIDAS음료
                        </h4>
                        <ul className="list-unstyled mb-0 px-3 py-5">
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
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
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
                                        alt=""
                                        className="width-60 rounded-circle shadow me-2 me-lg-4"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">Sangria Glass</h5>
                                        <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                        <span className="fw-bold">10,9,-</span>
                                    </div>
                                    <p className="mb-0">250ml / white, Red</p>
                                </div>
                            </li>
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
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
                                        <span className="fw-bold">10,9,-</span>
                                    </div>
                                    <p className="mb-0">250ml</p>
                                </div>
                            </li>
                        </ul>
                        <h4 className="mb-1" id="cerveza">
                            CERVEZA맥주
                        </h4>
                        <ul className="list-unstyled mb-0 px-3 py-5">
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
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
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
                                        alt=""
                                        className="width-60 rounded-circle shadow me-2 me-lg-4"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">Sangria Glass</h5>
                                        <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                        <span className="fw-bold">10,9,-</span>
                                    </div>
                                    <p className="mb-0">250ml / white, Red</p>
                                </div>
                            </li>
                            <li className="d-flex flex-row mb-4 mb-lg-5" onClick={toggle}>
                                <div>
                                    <img
                                        src="assets/img/menu/drink1.jpg"
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
                                        <span className="fw-bold">10,9,-</span>
                                    </div>
                                    <p className="mb-0">250ml</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />

            {/* Bootstrap Modal */}
            <Modal isOpen={modal} toggle={toggle} size="xl">
                <ModalHeader toggle={toggle}>음식상세</ModalHeader>
                <ModalBody>
                    <div className="d-flex">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide>
                                <img src="assets/img/menu/drink2.jpg" alt="" className="img mb-3" />
                            </SwiperSlide>
                        </Swiper>
                        <div className="flex-grow-1">
                            <p>
                                상그리아는 스페인, 포르투갈을 필두로 주로 뜨거운 태양이 있는 나라에서 즐겨 마시는 국민
                                음료.
                            </p>
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        닫기
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default MenuDrink
