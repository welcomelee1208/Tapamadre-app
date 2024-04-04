import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import '../../../assets/css/style.min.css'
import '../../../assets/vendor/css/swiper-bundle.min.css'
import '../../../assets/vendor/css/aos.css'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
import image1 from '../../../assets/img/600x800/7.jpg'
import image2 from '../../../assets/img/1140x480/3.jpg'
import image3 from '../../../assets/img/800x600/2.jpg'
function BlogDetail() {
    return (
        <>
            <Header />
            <div className="preloader"></div>
            <main id="main" className="position-relative">
                <svg
                    className="position-absolute start-0 top-0 text-secondary"
                    preserveAspectRatio="none"
                    width="60%"
                    height="800"
                    viewBox="0 0 809 922"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.06"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M-163.596 744.854C-282.872 662.618 -388.295 516.092 -400.375 396.146C-412.6 274.752 -278.92 240.748 -222.993 155.083C-186.778 99.6125 -160.265 41.6845 -129.86 -18.2059C-80.6415 -115.155 -114.031 -305.511 11.0204 -305.868C130.836 -306.21 226.667 -112.082 343.041 -19.5553C436.838 55.0214 548.856 93.8156 627.466 184.259C712.916 282.573 784.321 397.975 799.818 505.986C815.326 614.062 763.448 694.3 711.105 767.176C660.7 837.352 602.933 909.038 504.798 916.734C410.113 924.16 300.623 834.369 196.32 807.547C72.1584 775.618 -46.0491 825.899 -163.596 744.854Z"
                        fill="currentColor"
                    />
                </svg>

                <div className="container py-8 position-relative z-index-1">
                    <div className="row pt-4 pt-lg-9 justify-content-between">
                        <div className="col-lg-7 col-xl-8 mb-7 mb-lg-0">
                            <article className="border-bottom pb-5 mb-5">
                                <h1 className="mb-4 display-5">제목</h1>
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                >
                                    <SwiperSlide>
                                        <img src={image1} alt="" className="img-fluid" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={image2} alt="" className="img-fluid" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={image3} alt="" className="img-fluid" />
                                    </SwiperSlide>
                                </Swiper>
                            </article>
                            <div className="post-meta">
                                <ul className="list-unstyled small d-flex align-items-center mb-4 small">
                                    <li className="mx-3">
                                        On
                                        <a href="#" className="text-secondary d-inline-flex align-items-center">
                                            <span> 13 Oct. 2020</span>
                                        </a>
                                    </li>
                                    <li>
                                        In
                                        <a href="#" className="d-inline-flex align-items-center">
                                            <span> News</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* 내용 */}
                            <div className="post-content">
                                <p>소제목</p>
                                <p className="mb-5">내용입니다.</p>
                            </div>
                        </div>

                        <div className="col-lg-5 col-xl-4">
                            <div className="position-relative mb-5">
                                {/* 우측 카테고리 */}
                                <h5 className="mb-3">Categories</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="/newsevent" className="text-muted d-block py-1">
                                            All
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/newsevent?filter=News" className="text-muted d-block py-1">
                                            News
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/newsevent?filter=Event" className="text-muted d-block py-1">
                                            Event
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* 최근게시물 */}
                            <div className="position-relative mb-5">
                                <h5 className="mb-3">Latest Posts</h5>
                                <ul className="list-unstyled">
                                    <li className="d-flex w-100 mb-4">
                                        <a href="#">
                                            <img src="assets/img/600x800/1.jpg" alt="" className="width-50 me-3" />
                                        </a>
                                        <div className="post-content">
                                            <p className="mb-0 fw-normal lh-sm">
                                                <a href="/newsevent/4" className="text-body">
                                                    공지사항
                                                </a>
                                            </p>
                                            <small className="text-muted">14 April 2016</small>
                                        </div>
                                    </li>
                                    <li className="d-flex w-100">
                                        <a href="#">
                                            <img src="assets/img/600x800/2.jpg" alt="" className="width-50 me-3" />
                                        </a>
                                        <div className="post-content">
                                            <p className="mb-0 fw-normal lh-sm">
                                                <a href="#" className="text-body">
                                                    이벤트
                                                </a>
                                            </p>
                                            <small className="text-muted">14 Oct. 2020</small>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default BlogDetail
