import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import 'swiper/css/navigation'
import '../../../assets/css/style.min.css'
import '../../../assets/vendor/css/swiper-bundle.min.css'
import '../../../assets/vendor/css/aos.css'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'

// AOS 라이브러리
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import moment from 'moment'

function BlogDetail() {
    // 게시글 상태
    const [blog, setBlog] = useState(null)

    // aos 초기화
    useEffect(() => {
        AOS.init()
    }, [])

    // 게시글 단일 조회 함수
    const fetchBlogDetail = async () => {
        try {
            // 페이지에서 불러오는 게시글의 ID 값을 동적으로 가져오도록 수정
            const pathname = window.location.pathname
            const id = pathname.substring(pathname.lastIndexOf('/') + 1)

            const response = await axios.get(`http://localhost:3001/blog/${id}`)
            if (response.data.code === '200') {
                // moment를 사용하여 날짜 포맷팅
                response.data.data.reg_date = moment(response.data.data.reg_date).format('MMMM Do YYYY, h:mm:ss a')
                // article_type_code가 1이면 "News", 0이면 "Event"로 설정
                response.data.data.article_type_code = response.data.data.article_type_code === 1 ? 'News' : 'Event'
                setBlog(response.data.data)
            } else {
                console.error('게시글을 가져오는데 실패했습니다.')
            }
        } catch (error) {
            console.error('게시글을 가져오는데 실패했습니다.', error)
        }
    }

    // 컴포넌트가 처음으로 렌더링될 때 게시글을 가져옴
    useEffect(() => {
        fetchBlogDetail()
    }, [])

    return (
        <>
            <Helmet>
                {/* Google Fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100..900&display=swap"
                    rel="stylesheet"
                />

                {/* <!--aos animation--> */}
                <link rel="stylesheet" href="../../../assets/vendor/css/aos.css" />
                <link rel="stylesheet" href="../../../assets/js/theme.bundle"></link>
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            </Helmet>
            <Header />
            {/* 게시글 정보가 로드되었을 때 렌더링 */}
            {blog && (
                <section className="position-relative overflow-hidden bg-dark jarallax" data-speed=".3">
                    <img src="assets/img/1920x1000/5.jpg" alt="" className="jarallax-img opacity-25" />

                    <div className="container pt-8 pb-6 text-center position-relative text-white">
                        <div className="row pt-4 pt-lg-6 justify-content-center text-center">
                            <div className="col-lg-8 col-md-10">
                                <h1 className="display-2 mb-2 mx-auto">News & Event</h1>
                                <p className="lead mb-0">The best food in town at one of the best locations</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <div className="preloader"></div>
            <main id="main" className="position-relative" style={{ marginBottom: '150px' }}>
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
                            {/* 게시글 정보가 로드되었을 때 렌더링 */}
                            {blog && (
                                <article className="border-bottom pb-5 mb-5">
                                    <h1 className="mb-4 display-6">{blog.article_type_code}</h1>
                                    <h1 className="mb-4 display-5">{blog.title}</h1>
                                    <div className="post-meta">
                                        <ul className="list-unstyled small d-flex align-items-center mb-4 small">
                                            <li className="mx-3">
                                                On
                                                <p className="text-secondary d-inline-flex align-items-center">
                                                    <span> {blog.reg_date}</span>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        onSwiper={(swiper) => console.log(swiper, blog.main_img_path)}
                                        onSlideChange={() => console.log('slide change')}
                                        style={{ maxWidth: '100%', maxHeight: '80%' }}
                                    >
                                        <SwiperSlide>
                                            <img
                                                src={`http://localhost:3001/${blog.main_img_path}`}
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                    {/* 게시글 내용 표시 */}
                                    <div className="post-content">
                                        <p className="mb-5">{blog.context}</p>
                                    </div>
                                </article>
                            )}
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
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default BlogDetail
