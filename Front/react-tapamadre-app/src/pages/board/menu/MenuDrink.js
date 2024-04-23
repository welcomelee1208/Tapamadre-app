import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Link, Element } from 'react-scroll'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import 'aos/dist/aos.css'

// 더미데이터
const menuItems = [
    {
        category: 'SANGRIA 상그리아',
        items: [
            {
                image: 'assets/img/menu/drink1.jpg',
                title: 'Sangria',
                price: '36,-',
                description: '1000ml',
            },
            {
                image: 'assets/img/menu/drink1.jpg',
                title: 'Sangria Glass',
                price: '10,9,-',
                description: '250ml / white, Red',
            },
        ],
    },
    {
        category: 'VINO 글라스와인',
        items: [
            {
                image: 'assets/img/menu/drink1.jpg',
                title: 'Vino1',
                price: '20,-',
                description: '200ml / white, Red',
            },
            {
                image: 'assets/img/menu/drink1.jpg',
                title: 'Vino2',
                price: '15,-',
                description: '150ml / white, Red',
            },
        ],
    },
    // 추가 카테고리와 메뉴 항목...
]

const MenuDrink = () => {
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    return (
        <>
            {/* 헤드 태그 설정 */}
            <Helmet>
                <link rel="stylesheet" href="../../../assets/vendor/css/aos.css" />
                <link rel="stylesheet" href="../../../assets/js/theme.bundle" />
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            </Helmet>

            <Header />

            {/* 섹션 시작 */}
            <section className="position-relative overflow-hidden bg-dark jarallax" data-speed=".3">
                <img src="assets/img/1920x1000/5.jpg" alt="" className="jarallax-img opacity-25" />
                {/* 컨테이너 시작 */}
                <div className="container pt-8 pb-6 text-center position-relative text-white">
                    <div className="row pt-4 pt-lg-6 justify-content-center text-center">
                        <div className="col-lg-8 col-md-10">
                            <h1 className="display-2 mb-2 mx-auto">MENU</h1>
                            <p className="lead mb-0">The best food in town at one of the best locations</p>
                        </div>
                    </div>
                </div>
                {/* 컨테이너 끝 */}
            </section>
            {/* 섹션 끝 */}

            {/* 컨테이너 시작 */}
            <div className="container py-7 py-lg-10 position-relative z-index-1">
                <div className="row">
                    {/* 카테고리 영역 */}
                    <div className="col-md-3 col-lg-3">
                        <div className="position-relative mb-5 order-md-1">
                            <h5 className="mb-3">Categories</h5>
                            <ul className="list-unstyled">
                                {/* 카테고리 리스트 */}
                                {menuItems.map((menuItem, index) => (
                                    <li key={index}>
                                        <Link
                                            activeClass="active"
                                            to={`menu-${index}`}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            className="text-secondary d-block py-1r my-2"
                                        >
                                            {menuItem.category}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* 메뉴 카드 영역 */}
                    <div className="col-md-9">
                        {/* 각 섹션별 메뉴 항목 및 클릭 시 모달 */}
                        {menuItems.map((menuItem, index) => (
                            <div key={index}>
                                <h4 className="mb-1" id={`menu-${index}`}>
                                    {menuItem.category}
                                </h4>
                                <ul className="list-unstyled mb-0 px-3 py-5">
                                    {menuItem.items.map((item, itemIndex) => (
                                        <li className="d-flex flex-row mb-4 mb-lg-5" key={itemIndex} onClick={toggle}>
                                            <div>
                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    className="width-60 rounded-circle shadow me-2 me-lg-4"
                                                />
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="d-flex w-100 justify-content-between align-items-center">
                                                    <h5 className="mb-2 fs-5 fw-semibold fst-italic font-serif">
                                                        {item.title}
                                                    </h5>
                                                    <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                    <span className="fw-bold">{item.price}</span>
                                                </div>
                                                <p className="mb-0">{item.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* 컨테이너 끝 */}
            <Footer />

            {/* 모달 */}
            <Modal isOpen={modal} toggle={toggle} className="modal-xl">
                <ModalHeader toggle={toggle}>음식상세</ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-lg-6">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                autoplay={{ delay: 2500, disableOnInteraction: false }}
                            >
                                <SwiperSlide>
                                    <img src="assets/img/menu/drink2.jpg" alt="" className="img mb-3" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-lg-6">
                            <div className="flex-grow-1">
                                <p>
                                    상그리아는 스페인, 포르투갈을 필두로 주로 뜨거운 태양이 있는 나라에서 즐겨 마시는
                                    국민 음료.
                                </p>
                            </div>
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
