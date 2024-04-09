import React from 'react'

const Footer = () => {
    return (
        <React.Fragment>
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
                <div className="container py-8 pt-lg-9 position-relative">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5 me-auto mb-5">
                            <h4 className="mb-3 text-primary">Subscribe to Newsletter</h4>
                            <p className="mb-4 text-muted">And stay in the know</p>
                            <form>
                                <div className="d-md-flex">
                                    <div className="mb-2 mb-md-0 me-md-2 flex-grow-1">
                                        <input
                                            type="email"
                                            className="form-control border-0 w-100 form-control-lg"
                                            placeholder="Enter your Email"
                                        />
                                    </div>
                                    <div className="d-grid d-md-block">
                                        <button type="button" className="btn btn-lg btn-primary btn-hover-scale">
                                            <span>I'm In</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3 mb-5">
                            <h5 className="mb-4">Our location</h5>
                            <p className="text-muted">
                                <strong className="d-table">Resto</strong>
                                Rancho Bernardo Rd
                                <br />
                                San Diego <br />
                                CA 92127 <br />
                                United States
                            </p>
                            <p className="mb-1">
                                <a href="tel:+1123-456-7890">+01 123-456-7890</a>
                            </p>
                            <p>
                                <a href="mailto:support@uigator.com">
                                    <span>youremail@domain.com</span>
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-3 col-xl-2 mb-5">
                            <h5 className="mb-4">Company</h5>
                            <ul className="nav flex-column mb-0">
                                <li className="nav-item mb-3">
                                    <a href="#!" className="nav-link p-0">
                                        Food
                                    </a>
                                </li>
                                <li className="nav-item mb-3">
                                    <a href="#!" className="nav-link p-0">
                                        Wine
                                    </a>
                                </li>
                                <li className="nav-item mb-3">
                                    <a href="#!" className="nav-link p-0">
                                        Beer
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#!" className="nav-link p-0">
                                        Shop
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="opacity-25 mb-5" />
                    <div className="d-sm-flex justify-content-sm-between justify-content-center">
                        <ul className="d-flex flex-wrap list-unstyled mb-4 mb-sm-0">
                            <li className="me-4">
                                <a href="#!" className="hover-lift d-block">
                                    <i className="bi bi-facebook fs-5"></i>
                                </a>
                            </li>
                            <li className="me-4">
                                <a href="#!" className="hover-lift d-block">
                                    <i className="bi bi-twitter fs-5"></i>
                                </a>
                            </li>
                            <li className="">
                                <a href="#!" className="hover-lift d-block">
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
