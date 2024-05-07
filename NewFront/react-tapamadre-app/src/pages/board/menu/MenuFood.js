import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Link as ScrollLink, Element } from 'react-scroll'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css/navigation'

import { Helmet } from 'react-helmet'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MenuData = {
    menu_name: '갑오징어 튀김',
    menu_price: '20,-',
    menu_desc: '밀가루를 입혀 얇게 튀겨 낸 갑오징어에 아이올리 소스를 곁들인 안달루시아식 튀김 요리',
    menu_caution: '',
    menu_type_code: 1,
    main_img_state_code: 0,
    set_menu_state_code: 0,
    categorized_menu_code: 1,
    file: [{ file_path: 'assets/img/menu/food1.jpg' }],
}

const categories = [
    { to: 'lunchmenu', label: 'LUNCH MENU 점심메뉴' },
    { to: 'pintxos', label: 'PINTXOS 핀초스' },
    { to: 'tapas', label: 'TAPAS 따빠스' },
    { to: 'pasta', label: 'PASTA 파스타' },
    { to: 'parrillada', label: 'PARRILLADA 그릴' },
    { to: 'postre', label: 'POSTRE 디저트' },
]

const MenuFood = () => {
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    const menuSections = [
        {
            id: 'lunchmenu',
            title: 'LUNCH MENU',

            items: [
                {
                    id: 1,
                    name: '모둠 핀초 (6pieces)',
                    translation: 'Assorted pintxo piatter (6picese)',
                    price: '20,-',
                    description: '다양한 재료의 핀초 요리를 한번에 맛볼 수 있는 핀초모둠요리',
                    image: 'assets/img/menu/food1.jpg',
                },
                // 다른 메뉴 항목들 추가
            ],
        },
        {
            id: 'pintxos',
            title: 'PINTXOS',

            items: [
                {
                    id: 1,
                    name: '모둠 핀초 (6pieces)',
                    translation: 'Assorted pintxo piatter (6picese)',
                    price: '20,-',
                    description: '다양한 재료의 핀초 요리를 한번에 맛볼 수 있는 핀초모둠요리',
                    image: 'assets/img/menu/food1.jpg',
                },
                // 다른 메뉴 항목들 추가
            ],
        },
        {
            id: 'tapas',
            title: 'TAPAS',

            items: [
                {
                    id: 1,
                    name: '모둠 핀초 (6pieces)',
                    translation: 'Assorted pintxo piatter (6picese)',
                    price: '20,-',
                    description: '다양한 재료의 핀초 요리를 한번에 맛볼 수 있는 핀초모둠요리',
                    image: 'assets/img/menu/food1.jpg',
                },
                // 다른 메뉴 항목들 추가
            ],
        },
        {
            id: 'pasta',
            title: 'PASTA',

            items: [
                {
                    id: 1,
                    name: '모둠 핀초 (6pieces)',
                    translation: 'Assorted pintxo piatter (6picese)',
                    price: '20,-',
                    description: '다양한 재료의 핀초 요리를 한번에 맛볼 수 있는 핀초모둠요리',
                    image: 'assets/img/menu/food1.jpg',
                },
                // 다른 메뉴 항목들 추가
            ],
        },
        {
            id: 'parrillada',
            title: 'PARRILLADA',

            items: [
                {
                    id: 1,
                    name: '모둠 핀초 (6pieces)',
                    translation: 'Assorted pintxo piatter (6picese)',
                    price: '20,-',
                    description: '다양한 재료의 핀초 요리를 한번에 맛볼 수 있는 핀초모둠요리',
                    image: 'assets/img/menu/food1.jpg',
                },
                // 다른 메뉴 항목들 추가
            ],
        },
        {
            id: 'postre',
            title: 'POSTRE',

            items: [
                {
                    id: 1,
                    name: '모둠 핀초 (6pieces)',
                    translation: 'Assorted pintxo piatter (6picese)',
                    price: '20,-',
                    description: '다양한 재료의 핀초 요리를 한번에 맛볼 수 있는 핀초모둠요리',
                    image: 'assets/img/menu/food1.jpg',
                },
                // 다른 메뉴 항목들 추가
            ],
        },
        // 다른 섹션들 추가
    ]

    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="../../../assets/vendor/css/aos.css" />
                <link rel="stylesheet" href="../../../assets/js/theme.bundle"></link>
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            </Helmet>
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
                    <div className="col-md-3 col-lg-3">
                        <div className="position-relative mb-5 order-md-1">
                            <h5 className="mb-3">Categories</h5>
                            <ul className="list-unstyled">
                                {categories.map((category) => (
                                    <li key={category.to}>
                                        <ScrollLink
                                            activeClass="active"
                                            to={category.to}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            className="text-secondary d-block py-1r my-2"
                                        >
                                            {category.label}
                                        </ScrollLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div
                            className="position-relative z-index-1 bg-white mb-4 bg-repeat"
                            style={{ backgroundImage: "url('assets/img/dust.png')" }}
                        >
                            {menuSections.map((section) => (
                                <div key={section.id}>
                                    <h4 className="mb-1 mt-4" id={section.id}>
                                        {section.title}
                                    </h4>

                                    <ul className="list-unstyled mb-0 px-3 py-5">
                                        {section.items.map((menuItem) => (
                                            <li key={menuItem.id} className="mb-4 mb-lg-5" onClick={toggle}>
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <img
                                                            src={menuItem.image}
                                                            alt=""
                                                            className="width-60 rounded-circle shadow me-2 me-lg-4"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex w-100 justify-content-between align-items-center">
                                                            <h5 className="mb-2 fs-5 fw-semibold font-serif">
                                                                {menuItem.name}{' '}
                                                                <a className="small text-dark">
                                                                    {menuItem.translation}
                                                                </a>
                                                            </h5>
                                                            <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                            <span className="fw-bold">{menuItem.price}</span>
                                                        </div>
                                                        <p className="mb-0">{menuItem.description}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
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

export default MenuFood
