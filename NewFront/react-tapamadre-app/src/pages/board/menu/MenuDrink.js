import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Link as ScrollLink } from 'react-scroll'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
import { Helmet } from 'react-helmet'

const MenuData = [
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
            <Helmet>
                <link rel="stylesheet" href="../../../assets/vendor/css/aos.css" />
                <link rel="stylesheet" href="../../../assets/js/theme.bundle" />
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
                                {MenuData.map((menuItem, index) => (
                                    <li key={index}>
                                        <ScrollLink
                                            activeClass="active"
                                            to={`menu-${index}`}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            className="text-secondary d-block py-1r my-2"
                                        >
                                            {menuItem.category}
                                        </ScrollLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        {MenuData.map((menuItem, index) => (
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
            <Footer />
            <Modal isOpen={modal} toggle={toggle} className="modal-xl">
                <ModalHeader toggle={toggle}>음식상세</ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-lg-6">{/* Swiper 추가 */}</div>
                        <div className="col-lg-6">
                            <div className="flex-grow-1">{/* 모달 내용 추가 */}</div>
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
