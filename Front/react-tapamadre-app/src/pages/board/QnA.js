import React, { useState, useEffect, useRef } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

// AOS 라이브러리
import AOS from 'aos'
import 'aos/dist/aos.css'

const QnA = () => {
    // aos 초기화
    useEffect(() => {
        AOS.init()
    }, [])

    // 문의하기 모달
    const [sendModal, setSendModal] = useState(false)
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
    const modalRef = useRef()

    const sendClick = (e) => {
        e.preventDefault()
        setSendModal(true)
    }

    const handleConfirm = () => {
        // 발송 로직 추가
        setSendModal(false)
        alert('문의가 발송되었습니다.')
    }

    const handleCancel = () => {
        setSendModal(false)
    }

    const handleMouseDown = (e) => {
        setIsDragging(true)
        const { left, top } = modalRef.current.getBoundingClientRect()
        const offsetX = e.clientX - left
        const offsetY = e.clientY - top
        setModalPosition({ x: offsetX, y: offsetY })
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return
        const { clientX, clientY } = e
        const newX = clientX - modalPosition.x
        const newY = clientY - modalPosition.y
        setModalPosition({ x: newX, y: newY })
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
        } else {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isDragging])

    return (
        <div>
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

                <title>Resto</title>
            </Helmet>
            {/* <!--Main content--> */}
            {/* 상단 header 디자인 부분 */}
            <section className="position-relative overflow-hidden bg-dark jarallax" data-speed=".3">
                <img src="assets/img/1920x1000/5.jpg" alt="" className="jarallax-img opacity-25" />

                <div className="container pt-8 pb-6 text-center position-relative text-white">
                    <div className="row pt-4 pt-lg-6 justify-content-center text-center">
                        <div className="col-lg-8 col-md-10">
                            <h1 className="display-2 mb-2 mx-auto">Q & A</h1>
                            <p className="lead mb-0">The best food in town at one of the best locations</p>
                        </div>
                    </div>
                </div>
            </section>
            <main id="main">
                <section className="position-relative">
                    <div className="container py-7 py-lg-10">
                        <div className="row">
                            <div className="col-md-10 col-lg-7 mx-auto">
                                <div className="mb-5" data-aos="fade-up" data-aos-duration="400">
                                    <h4 className="mb-3">Call us</h4>
                                    <h2 className="mb-0 display-5 fw-lighter">
                                        <a href="#"> 02-722-4199</a>
                                    </h2>
                                </div>
                                <hr className="my-0" />
                                <div className="mb-5 pt-5" data-aos="fade-up" data-aos-duration="400">
                                    <h4 className="mb-3">Send Email</h4>
                                    <h2 className="mb-0 display-5 fw-lighter">
                                        <a href="mailto:madre@gmail.com" className="d-inline-block">
                                            <span>madre@gmail.com</span>
                                        </a>
                                    </h2>
                                </div>
                                <hr className="my-0" />
                                <div className="mb-5 pt-5" data-aos="fade-up" data-aos-duration="400">
                                    <h4 className="mb-3">Opening house</h4>
                                    <h2 className="mb-0 display-5 fw-lighter"></h2>
                                    <div style={{ display: 'flex' }}>
                                        <div className="mb-2 col-4" style={{ color: '#ff3d00', fontWeight: 'bold' }}>
                                            주중(월-금)
                                        </div>
                                        <div className="col-8">
                                            11:30 - 22:00 (BreakTime : 15:00 - 17:30) <br />
                                            Last Order : 런치2시, 디너9시
                                        </div>
                                    </div>
                                    <hr />
                                    <div style={{ display: 'flex' }}>
                                        <div
                                            className="mb-2 py-2 mb-0 col-4"
                                            style={{ color: '#ff3d00', fontWeight: 'bold' }}
                                        >
                                            주말(토,일,공휴일)
                                        </div>
                                        <div className="col-8">
                                            12:00 - 17:00 (BreakTime : 16:00 - 17:00) <br />
                                            Last Order : 런치3시, 디너8시
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-5" />

                                <div class="mx-auto">
                                    <form>
                                        <div class="mb-3">
                                            <div class="row">
                                                <div class="col-sm-6 col-12 mb-2 mb-sm-0">
                                                    <div class="mb-2 ">
                                                        <label class="mb-2">카테고리</label>
                                                        <select class="form-control" data-choices>
                                                            <option>예약문의</option>
                                                            <option>기타</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-sm-6 col-12">
                                                    <div class="mb-2">
                                                        <label class="mb-2">이름</label>
                                                        <input
                                                            type="text"
                                                            id="contactPhone"
                                                            class="form-control"
                                                            placeholder="이보람"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="row">
                                                <div class="col-sm-6 col-12 mb-2 mb-sm-0">
                                                    <div class="mb-2">
                                                        <label class="mb-2">이메일</label>
                                                        <input
                                                            type="email"
                                                            id="contactMail"
                                                            class="form-control"
                                                            placeholder="test@test.com"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 col-12">
                                                    <div class="mb-2">
                                                        <label class="mb-2">연락처</label>
                                                        <input
                                                            type="text"
                                                            id="contactPhone"
                                                            class="form-control"
                                                            placeholder="010-0000-0000"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <span style={{ color: 'red', fontSize: '12' }}>
                                                문의한 내용이 이메일과 문자로 발송되오니, 정확히 입력하시기 바랍니다.
                                            </span>
                                        </div>

                                        <div class="mb-3">
                                            <label class="mb-2">문의하기</label>
                                            <textarea
                                                rows="6"
                                                id="contactMsg"
                                                class="form-control"
                                                // placeholder="Enter your Message"
                                                required=""
                                            ></textarea>
                                        </div>
                                        <div class="text-end">
                                            <button
                                                type="submit"
                                                class="btn btn-lg btn-outline-primary btn-hover-scale"
                                                onClick={sendClick}
                                            >
                                                <span>발송</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Modal */}
            {sendModal && (
                <div
                    className="modal d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{ top: modalPosition.y, left: modalPosition.x }}
                    ref={modalRef}
                    onMouseDown={handleMouseDown}
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">문의 발송</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCancel}
                                ></button>
                            </div>
                            <div className="modal-body">문의를 발송하시겠습니까?</div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                                    취소
                                </button>
                                <button type="button" className="btn btn-primary" onClick={handleConfirm}>
                                    확인
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default QnA
