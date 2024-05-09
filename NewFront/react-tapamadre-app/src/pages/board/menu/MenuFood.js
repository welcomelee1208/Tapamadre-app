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

const categories = [
    { to: 'lunchmenu', label: 'LUNCH MENU 점심메뉴' },
    { to: 'pintxos', label: 'PINTXOS 핀초스' },
    { to: 'tapas', label: 'TAPAS 따빠스' },
    { to: 'pasta', label: 'PASTA 파스타' },
    { to: 'parrillada', label: 'PARRILLADA 그릴' },
    { to: 'postre', label: 'POSTRE 디저트' },
    { to: 'paella', label: 'PAELLA 빠에야' },
]
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
const MenuFood = () => {
    const [modal, setModal] = useState(false)
    const [selectedMenuItem, setSelectedMenuItem] = useState(null)
    const toggle = () => setModal(!modal)

    const handleOpenModal = (menuItem) => {
        setSelectedMenuItem(menuItem)
        toggle()
    }
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
                    image: 'assets/img/menu/pintxo.jpg',
                },
                // 다른 메뉴 항목들 추가
                {
                    id: 2,
                    name: '토마토 부라타 샐러드',
                    translation: 'Ensalada de queso burrata y tomate',
                    price: '20,-',
                    description: '파프리카퓌레와 스모크한 토마토, 제철 허브를 올린 부라타 샐러드',
                    image: 'assets/img/menu/pintxo.jpg',
                },
            ],
        },
        {
            id: 'pintxos',
            title: 'PINTXOS',

            items: [
                {
                    id: 3,
                    name: '만체고 치즈 핀초',
                    translation: 'Pintxo de queso Manchego',
                    price: '8,-',
                    description: '감자크림과 만체고 치즈를 조합한 핀초',
                    image: 'assets/img/menu/pintxo.jpg',
                },
                // 다른 메뉴 항목들 추가
                {
                    id: 4,
                    name: '이베리코하몽베요따 핀초',
                    translation: 'Pintxo de jamon iberico',
                    price: '8,-',
                    description: '5J의 베요타 하몽을 카빙하여 얹은 핀초',
                    image: 'assets/img/menu/steak.jpg',
                },
            ],
        },
        {
            id: 'tapas',
            title: 'TAPAS',

            items: [
                {
                    id: 5,
                    name: '올리브 절임',
                    translation: 'olivas',
                    price: '12,-',
                    description: '따빠 마드레 방식으로 특별하게 절인 올리브 타파스',
                    image: 'assets/img/menu/olive.jpg',
                },
                {
                    id: 6,
                    name: '살피콘 뽈뽀',
                    translation: 'Salpcon de Pulpo',
                    price: '26,-',
                    description: '한입 크기로 자른 문어에 제철 야채와 올리브오일,비네거를 넣어 버무린 콜드 타파스',
                    image: 'assets/img/menu/olive.jpg',
                },
                // 다른 메뉴 항목들 추가
            ],
        },
        {
            id: 'pasta',
            title: 'PASTA',

            items: [
                {
                    id: 7,
                    name: '하몬 크림파스타',
                    translation: 'Pasta de jamon serrano',
                    price: '24,-',
                    description: '하몽과 양송이 버섯의 조화가 일품인 크림파스타',
                    image: 'assets/img/menu/pasta.jpg',
                },
                {
                    id: 8,
                    name: '새우오일 파스타',
                    translation: 'Pasta de gambas',
                    price: '22,-',
                    description: '새우와 마늘 올리브오일로 만든 건강한맛 파스타',
                    image: 'assets/img/menu/pasta.jpg',
                },
                // 다른 메뉴 항목들 추가
            ],
        },
        {
            id: 'parrillada',
            title: 'PARRILLADA',

            items: [
                {
                    id: 9,
                    name: '이베리코 스테이크(200g)',
                    translation: 'cuello de cerdo iberico(200g)',
                    price: '42,-',
                    description: '이베리코 베요타 스테이크와 시즌 가니쉬/ 100g 추가주문시 20000추가됩니다.',
                    image: 'assets/img/menu/steak.jpg',
                },
                {
                    id: 10,
                    name: '피쉬 그릴',
                    translation: 'Pescado',
                    price: '48-',
                    description: '꿀대구에 토마토 소스를 뎥들인 생선 스테이크',
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
                    id: 11,
                    name: '크레마 까탈라나',
                    translation: 'Crema catalana',
                    price: '8,-',
                    description:
                        '스페인 까탈루냐 지역의 달달한 전통 디저트로 캬라멜의 바삭함과 크림의 부드러움을 맛볼 수 있는 디저트',
                    image: 'assets/img/menu/food1.jpg',
                },
                {
                    id: 12,
                    name: '바스크 치즈케이크',
                    translation: 'Vasco Cheese cake',
                    price: '12,-',
                    description:
                        '치즈 본연의 고소한 풍미와 그윽한 향을 품은 스페인 북부 바스크 지방에서 유래한 치즈케이크',
                    image: 'assets/img/menu/food1.jpg',
                },
                // 다른 메뉴 항목들 추가
            ],
        },
        {
            id: 'paella',
            title: 'PAELLA',

            items: [
                {
                    id: 13,
                    name: '해산물 빠에야',
                    translation: 'Paella de marisco',
                    price: '36,-',
                    description: '해산물로 육수를 내려 각종 해산물의 짭조름한 바다의 맛이 일품인 스페인 전통 쌀 요리',
                    image: 'assets/img/menu/paella.jpg',
                },
                {
                    id: 14,
                    name: '먹물 빠에야',
                    translation: 'Arroz negro',
                    price: '36,-',
                    description:
                        '해산물로 육수를 내려 각종 해산물육수 베이스에 오징어 먹물을 넣어 검게만든 스페인 전통 쌀 요리',
                    image: 'assets/img/menu/paella.jpg',
                },
                // 다른 메뉴 항목들 추가e
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
                                            <li
                                                key={menuItem.id}
                                                className="mb-4 mb-lg-5"
                                                onClick={() => handleOpenModal(menuItem)}
                                            >
                                                {/* 이하 내용은 동일 */}

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
            <Modal isOpen={modal} toggle={toggle} className="modal-xl">
                <ModalHeader toggle={toggle}>{selectedMenuItem && selectedMenuItem.name}</ModalHeader>
                <ModalBody>
                    {selectedMenuItem && (
                        <>
                            <img
                                src={selectedMenuItem.image}
                                alt=""
                                className="img mb-3"
                                style={{ width: '50%', height: '50%' }}
                            />
                            <p>{selectedMenuItem.description}</p>
                        </>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        닫기
                    </Button>
                </ModalFooter>
            </Modal>
            <Footer />
        </>
    )
}

export default MenuFood
