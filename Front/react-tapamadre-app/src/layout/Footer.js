import React from 'react'

const Footer = () => {
    return (
        <React.Fragment>
            <svg
                class=" start-0 bottom-0"
                preserveAspectRatio="none"
                width="100%"
                height="64"
                viewBox="0 0 1200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g class="text-primary">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 200L422.667 100L845.333 0L1268 125V200H845.333H422.667H0Z"
                        fill="currentColor"
                    />
                </g>
                <g class="text-dark">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 200L450.667 108L901.333 16L1352 131V200H901.333H450.667H0Z"
                        fill="currentColor"
                    />
                </g>
            </svg>
            <footer className="footer bg-dark text-white position-relative overflow-hidden">
                <a href="#top" data-scroll className="d-flex position-absolute end-0 bottom-0 mb-4 me-4 z-index-1">
                    <svg
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 16 16"
                        className="bi bi-arrow-up"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                        />
                    </svg>
                </a>
                <div className="container py-5 pt-lg-6 position-relative">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5 me-auto mb-5">
                            <h5 className="mb-3">영업시간</h5>
                            <div style={{ display: 'flex' }}>
                                <p className="mb-2 col-4">주중(월-금)</p>
                                <p className="col-8">
                                    11:30 - 22:00 (BreakTime : 15:00 - 17:30) <br />
                                    Last Order : 런치2시, 디너9시
                                </p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p className="mb-2 py-2 mb-0 col-4">주말(토,일,공휴일)</p>
                                <p className="col-8">
                                    12:00 - 17:00 (BreakTime : 16:00 - 17:00) <br />
                                    Last Order : 런치3시, 디너8시
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-5">
                            <h5 className="mb-4">주소</h5>
                            {/* <p className="text-muted">
                                <strong className="d-table"></strong>
                            </p> */}
                            {/* Rancho Bernardo Rd */}
                            서울특별시 종로구
                            <br />
                            경희궁길 43, <br />
                            따빠마드레 <br />
                            <br />
                            구: 신문로2가 1-251
                        </div>
                        <div className="col-lg-3 col-xl-2 mb-5">
                            <h5 className="mb-4">연락처</h5>
                            <p className="mb-1">
                                <a href="tel:+02-722-4199">02-722-4199</a>
                            </p>
                            <p>
                                <a href="madre@gmail.com">
                                    <span>madre@gmail.com</span>
                                </a>
                            </p>
                        </div>
                    </div>
                    <hr className="opacity-25 mb-5" />
                    <div className="d-sm-flex justify-content-sm-between justify-content-center">
                        <ul className="d-flex flex-wrap list-unstyled mb-4 mb-sm-0">
                            <li className="me-4">
                                <a
                                    href="https://www.facebook.com/watch/tapamadre/"
                                    className="hover-lift d-block"
                                    target="_blank"
                                >
                                    <i className="bi bi-facebook fs-5"></i>
                                </a>
                            </li>
                            <li className="">
                                <a
                                    href="https://www.instagram.com/tapamadre2016/"
                                    className="hover-lift d-block"
                                    target="_blank"
                                >
                                    <i className="bi bi-instagram fs-5"></i>
                                </a>
                            </li>
                        </ul>
                        <small className="d-block text-muted">
                            © Copyright
                            <script>document.write(new Date().getFullYear())</script>. All right reserved. Resto
                        </small>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer
