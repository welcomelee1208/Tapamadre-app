import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import moment from 'moment'
import AOS from 'aos'
import 'aos/dist/aos.css'

const BlogList = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    const [searchParams, setSearchParams] = useSearchParams()
    const [activeFilter, setActiveFilter] = useState(searchParams.get('filter') || '*')
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        const filter = searchParams.get('filter') || '*'
        setActiveFilter(filter)
    }, [searchParams])

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/blog/all')
                if (response.data.code === '200') {
                    const formattedData = response.data.data.map((blog) => ({
                        ...blog,
                        reg_date: moment(blog.reg_date).format('MMMM Do YYYY, h:mm:ss a'),
                        article_type_code: blog.article_type_code === 1 ? 'News' : 'Event',
                    }))

                    // is_display_code가 0이 아닌 경우만 필터링하여 표시합니다.
                    const filteredData = formattedData.filter((blog) => blog.is_display_code !== 0)

                    setBlogData(filteredData)
                } else {
                    console.error('Failed to fetch blog data.')
                }
            } catch (error) {
                console.error('Failed to fetch blog data.', error)
            }
        }
        fetchBlogData()
    }, [])
    const handleFilterClick = (filter) => {
        setActiveFilter(filter)
        setSearchParams({ filter })
    }

    const filterBlogsByType = (type) => {
        return type === '*' ? blogData : blogData.filter((blog) => blog.article_type_code === type)
    }

    const filteredBlogs = filterBlogsByType(activeFilter)

    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="../../../assets/vendor/css/aos.css" />
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                />
                <link rel="stylesheet" href="../../../assets/css/style.min.css" id="switchThemeStyle" />
                <title>Resto</title>
            </Helmet>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <main style={{ flex: 1 }}>
                    {/* Main Content */}
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
                                <div
                                    key={blog.id}
                                    className={`col-md-4 col-sm-6 grid-item g_${blog.article_type_code}`}
                                >
                                    <a
                                        href={`/newsevent/${blog.article_id}`}
                                        className="glightbox hover-shadow hover-lift d-block"
                                    >
                                        <img
                                            src={`http://localhost:3001/${blog.main_img_path}`}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </a>
                                    <div className="pb-5 border-bottom">
                                        <div className="mb-2">
                                            <a href={`/newsevent/${blog.article_id}`} className="small"></a>
                                        </div>
                                        <a href={`/newsevent/${blog.article_id}`} className="text-dark">
                                            <h1 className="mb-3 h4 text-reset">{blog.title}</h1>
                                        </a>
                                        <div className="post-meta">
                                            <span className="small">{blog.reg_date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
                <Footer style={{ background: '#ccc', padding: '10px 0', textAlign: 'center' }} />
            </div>
        </>
    )
}

export default BlogList
