import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import flatpickr from 'flatpickr'
import Choices from 'choices.js'
import 'flatpickr/dist/flatpickr.min.css'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

import { Helmet } from 'react-helmet'
// AOS 라이브러리
import AOS from 'aos'
import 'aos/dist/aos.css'

const Reservation = () => {
    // aos 초기화
    useEffect(() => {
        AOS.init()
    }, [])

    const navigate = useNavigate()
    const location = useLocation()

    // URL에서 search params를 파싱
    const searchParams = new URLSearchParams(location.search)
    const reservationType = searchParams.get('type') // 'type' 파라미터 값을 가져옴
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

    const [formData, setFormData] = useState({
        reservationDate: '',
        reservationTime: '',
        reservationName: '',
        reservationPeople: '',
        reservationPhone: '',
        reservationEmail: '',
    })

    // 입력 필드의 값을 업데이트하는 함수
    const handleInputChange = (event) => {
        const { name, value } = event.target
        console.log(`Input changed: ${name} - ${value}`) // 선택한 날짜 확인
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    // 모든 입력 필드가 채워져 있는지 확인하는 함수
    const isFormEmpty = () => {
        for (const key in formData) {
            if (formData[key].trim() === '') {
                console.log(`${key} is empty`)
                return true // 입력 필드 중 하나라도 비어 있으면 true 반환
            }
        }
        console.log('Form is not empty')
        return false // 모든 입력 필드가 채워져 있으면 false 반환
    }
    useEffect(() => {
        const fp = flatpickr('[data-flatpicker]', {
            minDate: 'today',
            maxDate: new Date().fp_incr(29),
            dateFormat: 'Y-m-d', // 선택한 날짜의 형식 설정
            onChange: function (selectedDates, dateStr, instance) {
                setFormData({
                    ...formData,
                    reservationDate: dateStr, // 선택한 날짜를 reservationDate에 업데이트
                })
            },
        })
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault() // Prevents the default form submission behavior
        // Handle form submission logic here
        // You can access form field values using event.target.<fieldName>.value
    }
    // 예약 유형에 따라 URL을 변경하는 함수
    const handleReservationTypeClick = (type) => {
        navigate(`?type=${type}`)
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
            <Helmet>
                {/* <!--Flatpickr and choices select css--> */}
                <link rel="stylesheet" href="../../assets/vendor/css/flatpickr.min.css" />

                {/* <!--Google fonts--> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                {/* <!--aos animation--> */}
                <link rel="stylesheet" href="../../assets/vendor/css/aos.css" />
                <link rel="stylesheet" href="../../assets/js/theme.bundle"></link>
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                {/* <!--Bootstrap icons--> */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                />
                {/* <!--Main style--> */}
                <link rel="stylesheet" href="../../assets/css/style.min.css" id="switchThemeStyle" />

                {/* <!--Add custom style here--> */}
                {/* <!-- <link rel="stylesheet" href="assets/css/custom.css"> --> */}

                <title>Resto</title>
            </Helmet>
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
                <nav class="nav nav-pill filter-nav mb-5 d-flex justify-content-center">
                    <div className="container text-center mt-4">
                        <button
                            className="btn btn-outline-secondary rounded-pill btn-sm me-2"
                            onClick={() => handleReservationTypeClick('individual')}
                        >
                            개인
                        </button>
                        <button
                            className="btn btn-outline-secondary rounded-pill btn-sm me-2"
                            onClick={() => handleReservationTypeClick('group')}
                        >
                            단체
                        </button>
                        <button
                            className="btn btn-outline-secondary rounded-pill btn-sm me-2"
                            onClick={() => handleReservationTypeClick('exclusive')}
                        >
                            대관
                        </button>
                    </div>
                </nav>
                <section className="position-relative">
                    <div className="container">
                        <div className="pt-5" data-aos="fade-up" data-aos-duration="400">
                            {/* Book Online 위에 박스 추가 */}
                            <div className="book-online-box">
                                <h4 className="mb-3">룸 이용 안내 </h4>
                                <p>
                                    6인 이하 단독 룸(최대 수용 인원 10명) 이용 시 1인당 코스메뉴 또는 이에 준하는
                                    단품메뉴 주문 바라며 별도로 룸차지 발생됩니다. (최소 주문 금액
                                    런치30만원/디너60만원)
                                </p>
                            </div>
                            <div className="book-online-box">
                                <h4 className="mb-3">콜키지 이용안내 </h4>
                                <p>
                                    예약기준 2병 반입가능하며 1병당 콜키지는 3만원입니다. 와인을 제외한 주류반입은
                                    어려운점 양해 부탁드립니다.
                                </p>
                            </div>
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
                                                    name="reservationDate"
                                                    value={formData.reservationDate}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="col-sm-6 col-12">
                                                <select
                                                    required
                                                    className="form-control"
                                                    data-choices
                                                    name="reservationTime"
                                                    value={formData.reservationTime}
                                                    onChange={handleInputChange}
                                                >
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
                                                className="form-control"
                                                placeholder="예약자명"
                                                required
                                                name="reservationName"
                                                value={formData.reservationName}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <label className="mb-2">예약인원</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="예약인원"
                                                required
                                                name="reservationPeople"
                                                value={formData.reservationPeople}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    {/* 전화번호, 이메일 */}
                                    <div className="row mb-3">
                                        <div className="col-sm-6 col-12">
                                            <label className="mb-2">전화번호</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="전화번호"
                                                required
                                                name="reservationPhone"
                                                value={formData.reservationPhone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <label className="mb-2">이메일</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="이메일"
                                                required
                                                name="reservationEmail"
                                                value={formData.reservationEmail}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    {/* 코멘트 */}
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <label className="mb-2" htmlFor="reservationComment">
                                                예약자 코멘트
                                            </label>
                                            <textarea
                                                id="reservationComment"
                                                className="form-control"
                                                rows="4"
                                                name="reservationComment"
                                                onChange={handleInputChange}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="text-end">
                                        <button
                                            type="submit"
                                            className="btn btn-info btn-hover-scale btn-lg w-100"
                                            onClick={toggle}
                                            disabled={isFormEmpty(false)} // 모든 입력 필드가 비어 있을 때만 버튼 비활성화
                                        >
                                            <span>Submit</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
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
                <ModalHeader toggle={toggle}>예약하기</ModalHeader>
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
                            </Button>
                            <Button color="secondary" onClick={toggleAll}>
                                예약신청 확정하기
                            </Button>
                        </ModalFooter>
                    </Modal>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        수정
                    </Button>
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
