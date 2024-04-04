import React, { useEffect } from 'react'
import flatpickr from 'flatpickr'
import Choices from 'choices.js'
import 'flatpickr/dist/flatpickr.min.css'
import Header from '../'
const Reservation = () => {
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

    return (
        <div>
            {/* Header */}
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Resto</title>
            </head>

            {/* Preloader */}
            <div id="preloader"></div>

            {/* Sticky Header */}
            <header id="header" className="sticky-top"></header>

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

            {/* Main Content */}
            <main id="main">
                <section className="position-relative">
                    <div className="pt-5" data-aos="fade-up" data-aos-duration="400">
                        <h4 className="mb-3">Book Online</h4>
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
                        {/* 이름 */}
                        <form className="needs-validation" noValidate>
                            <div className="col-sm-6 col-12 mb-2 mb-sm-0">
                                <label className="mb-2">What's your name?</label>
                                <input
                                    type="text"
                                    id="reservationName"
                                    className="form-control"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            {/* 인원수 */}
                            <div className="col-sm-6 col-12">
                                <label className="mb-2">What's your name?</label>
                                <input
                                    type="text"
                                    id="reservationName"
                                    className="form-control"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            {/* 전화번호 */}
                            <div className="col-sm-6 col-12">
                                <label className="mb-2">What's your name?</label>
                                <input
                                    type="text"
                                    id="reservationName"
                                    className="form-control"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            {/* 이메일 */}
                            <div className="col-sm-6 col-12">
                                <label className="mb-2">What's your name?</label>
                                <input
                                    type="text"
                                    id="reservationName"
                                    className="form-control"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="text-end">
                                <button type="submit" className="btn btn-info btn-hover-scale btn-lg w-100">
                                    <span>Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
                <div className="container pb-8 pb-lg-9 position-relative z-index-1">
                    <div className="row">
                        <div className="col-lg-9 col-xl-9 mx-auto text-center">
                            {/* Content and SVG pattern */}
                            <p className="display-6 mb-0" data-aos="fade-up" data-aos-delay="100">
                                Open from <span className="text-highlight text-info">9:30 a.m.</span> for lunch and from{' '}
                                <span className="text-highlight text-info">19:30 p.m.</span> for dinner. Closing days:
                                Sunday evening and Monday all day.
                            </p>
                        </div>
                    </div>
                </div>
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
        </div>
    )
}

export default Reservation
