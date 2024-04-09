
import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import flatpickr from 'flatpickr'
import Choices from 'choices.js'
import 'flatpickr/dist/flatpickr.min.css'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const Reservation = (args) => {
    useEffect(() => {
        initializeFlatpickr()
        initializeChoices()
    }, [])

    const initializeFlatpickr = () => {
        const fp = document.querySelectorAll('[data-flatpicker]')
        for (let i = 0; i < fp.length; ++i) {
            new flatpickr(fp[i], {
                minDate: 'today',
                maxDate: new Date().fp_incr(29),
            })
        }
    }

    const initializeChoices = () => {
        const elementChoices = document.querySelectorAll('[data-choices]')
        for (let i = 0; i < elementChoices.length; ++i) {
            new Choices(elementChoices[i], {
                classNames: {
                    containerInner: elementChoices[i].className,
                    input: 'form-control',
                    inputCloned: 'form-control-xs',
                    listDropdown: 'dropdown-menu',
                    itemChoice: 'dropdown-item',
                    activeState: 'show',
                    selectedState: 'active',
                },
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault() // Prevents the default form submission behavior
        // Handle form submission logic here
        // You can access form field values using event.target.<fieldName>.value
    }
    const [modal, setModal] = useState(false)
    const [nestedModal, setNestedModal] = useState(false)
    const [closeAll, setCloseAll] = useState(false)

    const toggle = () => setModal(!modal)
    const toggleNested = () => {
        setNestedModal(!nestedModal)
        setCloseAll(false)
    }
    const toggleAll = () => {
        setNestedModal(!nestedModal)
        setCloseAll(true)
    }

    return (
        <>
            <Header />
            {/* Reservation Section */}
            <section className="position-relative overflow-hidden bg-dark jarallax" data-speed=".3">
                <img src="assets/img/1920x1000/5.jpg" alt="" className="jarallax-img opacity-25" />

                <div className="container pt-8 pb-6 text-center position-relative text-white">
                    <div className="row pt-4 pt-lg-6 justify-content-center text-center">
                        <div className="col-lg-8 col-md-10">
                            <h1 className="display-2 mb-2 mx-auto">Reservation</h1>
                            <p className="lead mb-0">The best food in town at one of the best locations</p>
                        </div>
                    </div>
                </div>
            </section>

            <main id="main">
                <section className="position-relative">
                    <div className="container">
                        <div className="pt-5" data-aos="fade-up" data-aos-duration="400">
                            <h4 className="mb-3">Book Online</h4>
                            <form onSubmit={handleSubmit}>
                                {/* 예약 날짜 시간 */}
                                <div className="mb-3">
                                    <label className="mb-2">When do you want to reserve a table?</label>
                                    <div className="row">
                                        <div className="col-sm-6 col-12 mb-2 mb-sm-0">
                                            <input
                                                required
                                                type="text"
                                                className="form-control bg-white"
                                                data-flatpicker
                                                placeholder="Select Date"
                                            />
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <select required className="form-control" data-choices>
                                                <option value="">- Select Time - </option>
                                                <option value="7:00 p.m.">7:00 p.m. </option>
                                                <option value="7:30 p.m.">7:30 p.m. </option>
                                                <option value="8:00 p.m.">8:00 p.m. </option>
                                                <option value="8:30 p.m.">8:30 p.m. </option>
                                                <option value="9:00 p.m.">9:00 p.m. </option>
                                                <option value="9:30 p.m.">9:30 p.m. </option>
                                                <option value="10:00 p.m.">10:00 p.m. </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* 이름, 예약인원 */}
                                <div className="row mb-3">
                                    <div className="col-sm-6 col-12">
                                        <label className="mb-2">예약자명</label>
                                        <input
                                            type="text"
                                            id="reservationName"
                                            className="form-control"
                                            placeholder="예약자명"
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <label className="mb-2">예약인원</label>
                                        <input
                                            type="text"
                                            id="reservationName"
                                            className="form-control"
                                            placeholder="예약인원"
                                            required
                                        />
                                    </div>
                                </div>
                                {/* 전화번호, 이메일 */}
                                <div className="row mb-3">
                                    <div className="col-sm-6 col-12">
                                        <label className="mb-2">전화번호</label>
                                        <input
                                            type="text"
                                            id="reservationName"
                                            className="form-control"
                                            placeholder="전화번호"
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <label className="mb-2">이메일</label>
                                        <input
                                            type="text"
                                            id="reservationName"
                                            className="form-control"
                                            placeholder="이메일"
                                            required
                                        />
                                    </div>
                                </div>
                                {/* 코멘트 */}
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <label className="mb-2" htmlFor="reservationName">
                                            예약자 코멘트
                                        </label>
                                        <textarea id="reservationName" className="form-control" rows="4"></textarea>
                                    </div>
                                </div>

                                <div className="text-end">
                                    <button
                                        type="submit"
                                        className="btn btn-info btn-hover-scale btn-lg w-100"
                                        onClick={toggle}
                                    >
                                        <span>Submit</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            {/* SVG Divider Pattern */}
            <svg
                preserveAspectRatio="none"
                width="100%"
                height="64"
                viewBox="0 0 1200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* SVG Paths */}
            </svg>

            {/* Footer Scripts */}
            <script src="assets/vendor/flatpickr.min.js"></script>
            <script src="assets/vendor/choices.min.js"></script>
            <script>{/* Script to initialize flatpickr and Choices */}</script>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    밑에버튼을 눌러서 예약정보를 확인해주세요.
                    <br />
                    <Button color="success" onClick={toggleNested}>
                        예약 정보 확인
                    </Button>
                    <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
                        <ModalHeader>사용자 예약 확인</ModalHeader>
                        <ModalBody>일자: 시간: 인원수: 예약</ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggleNested}>
                                수정
                            </Button>{' '}
                            <Button color="secondary" onClick={toggleAll}>
                                예약신청 확정하기
                            </Button>
                        </ModalFooter>
                    </Modal>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        수정
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        신청
                    </Button>
                </ModalFooter>
            </Modal>
            <Footer />
        </>

    )
}

export default Reservation
