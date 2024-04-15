import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
import { Helmet } from 'react-helmet'

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

    // 블로그 데이터 배열
    const blogData = [
        {
            id: 1,
            imageUrl: 'assets/img/600x800/1.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'Event',
            link: '/newsevent/1',
        },
        {
            id: 2,
            imageUrl: 'assets/img/600x800/2.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'Event',
            link: '/newsevent/2',
        },
        {
            id: 3,
            imageUrl: 'assets/img/600x800/3.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'Event',
            link: '/newsevent/3',
        },
        {
            id: 4,
            imageUrl: 'assets/img/600x800/4.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'News',
            link: '/newsevent/4',
        },
        {
            id: 5,
            imageUrl: 'assets/img/600x800/5.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'News',
            link: '/newsevent/5',
        },
        {
            id: 6,
            imageUrl: 'assets/img/600x800/6.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'News',
            link: '/newsevent/6',
        },
        {
            id: 7,
            imageUrl: 'assets/img/600x800/3.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'News',
            link: '/newsevent/7',
        },
        {
            id: 8,
            imageUrl: 'assets/img/600x800/4.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'Event',
            link: '/newsevent/8',
        },
        {
            id: 9,
            imageUrl: 'assets/img/600x800/5.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'Event',
            link: '/newsevent/9',
        },
    ]

    useEffect(() => {
        // URL의 변경을 감지하여 상태 업데이트
        const filter = searchParams.get('filter') || '*'
        setActiveFilter(filter)
    }, [searchParams])

    const handleFilterClick = (filter) => {
        setActiveFilter(filter)
        // URL에 현재 필터 상태 반영
        setSearchParams({ filter })
    }

    const filterBlogsByType = (type) => {
        return type === '*' ? blogData : blogData.filter((blog) => blog.type === type)
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
                        <div key={blog.id} className={`col-md-4 col-sm-6 grid-item g_${blog.type}`}>
                            <a href={blog.link} className="glightbox hover-shadow hover-lift d-block">
                                <img src={blog.imageUrl} alt="" className="img-fluid" />
                            </a>
                            <div className="pb-5 border-bottom">
                                <div className="mb-2">
                                    <a href={blog.link} className="small">
                                        {blog.type}
                                    </a>
                                </div>
                                <a href={blog.link} className="text-dark">
                                    <h1 className="mb-3 h4 text-reset">{blog.title}</h1>
                                </a>
                                <div className="post-meta">
                                    <ul className="list-unstyled d-flex align-items-center mb-0 small text-muted">
                                        <li className="ms-2">
                                            On
                                            <a className="text-secondary d-inline-flex align-items-center">
                                                <span>{blog.date}</span>
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
