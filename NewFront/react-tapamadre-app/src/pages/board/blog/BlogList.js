import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import moment from 'moment'

// AOS 라이브러리
import AOS from 'aos'
import 'aos/dist/aos.css'

const BlogList = () => {
    // aos 초기화
    useEffect(() => {
        AOS.init()
    }, [])

    const [searchParams, setSearchParams] = useSearchParams()
    const [activeFilter, setActiveFilter] = useState(searchParams.get('filter') || '*')
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        // URL의 변경을 감지하여 상태 업데이트
        const filter = searchParams.get('filter') || '*'
        setActiveFilter(filter)
    }, [searchParams])

    useEffect(() => {
        // 블로그 데이터 로드
        const fetchBlogData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/blog/all')
                if (response.data.code === '200') {
                    // moment를 사용하여 날짜 포맷팅 및 article_type_code 변경
                    const formattedData = response.data.data.map((blog) => ({
                        ...blog,
                        reg_date: moment(blog.reg_date).format('MMMM Do YYYY, h:mm:ss a'),
                        article_type_code: blog.article_type_code === 1 ? 'News' : 'Event',
                    }))
                    setBlogData(formattedData)
                } else {
                    console.error('블로그 데이터를 가져오는데 실패했습니다.')
                }
            } catch (error) {
                console.error('블로그 데이터를 가져오는데 실패했습니다.', error)
            }
        }
        fetchBlogData()
    }, [])

    const handleFilterClick = (filter) => {
        setActiveFilter(filter)
        // URL에 현재 필터 상태 반영
        setSearchParams({ filter })
    }

    const filterBlogsByType = (type) => {
        return type === '*' ? blogData : blogData.filter((blog) => blog.article_type_code === type)
    }

    const filteredBlogs = filterBlogsByType(activeFilter)

    return (
        <>
            <Helmet>
                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                {/* Bootstrap Icons */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                    rel="stylesheet"
                />
                {/* <!--aos animation--> */}
                <link rel="stylesheet" href="../../../assets/vendor/css/aos.css" />
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

                {/* <!--Bootstrap icons--> */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                />
                {/* Main style */}
                <link rel="stylesheet" href="../../../assets/css/style.min.css" id="switchThemeStyle" />
                {/* Title */}
                <title>Resto</title>
            </Helmet>
            <Header />
            {/* News & Event */}
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
            <div className="container py-7 py-lg-10">
                <nav className="nav nav-pill filter-nav mb-5 d-flex justify-content-center">
                    {['*', 'News', 'Event'].map((filterType) => (
                        <button
                            key={filterType}
                            type="button"
                            onClick={() => handleFilterClick(filterType)}
                            className={`btn btn-outline-secondary rounded-pill btn-sm me-2 ${
                                activeFilter === filterType ? 'custom-orange' : ''
                            }`}
                        >
                            {filterType === '*' ? 'All' : filterType}
                        </button>
                    ))}
                </nav>
                <div className="row g-2 isotope-grid">
                    {filteredBlogs.map((blog) => (
                        <div key={blog.id} className={`col-md-4 col-sm-6 grid-item g_${blog.article_type_code}`}>
                            <a
                                href={`/newsevent/${blog.article_id}`}
                                className="glightbox hover-shadow hover-lift d-block"
                            >
                                <img src={`http://localhost:3001/${blog.main_img_path}`} alt="" className="img-fluid" />
                            </a>
                            <div className="pb-5 border-bottom">
                                <div className="mb-2">
                                    <a href={`/newsevent/${blog.article_id}`} className="small"></a>
                                </div>
                                <a href={`/newsevent/${blog.article_id}`} className="text-dark">
                                    <h1 className="mb-3 h4 text-reset">{blog.title}</h1>
                                </a>
                                <div className="post-meta">
                                    <ul className="list-unstyled d-flex align-items-center mb-0 small text-muted">
                                        <span> {blog.article_type_code}</span>
                                        <li className="ms-2">
                                            On
                                            <a className="text-secondary d-inline-flex align-items-center">
                                                <span>{blog.reg_date}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogList
