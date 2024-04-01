import React, { useState } from 'react'

const BlogList = () => {
    // 현재 선택된 필터 상태 관리
    const [activeFilter, setActiveFilter] = useState('*')

    // 버튼 클릭 핸들러: 선택된 필터를 업데이트
    const handleFilterClick = (filter) => {
        setActiveFilter(filter)
    }

    // 블로그 데이터 배열
    const blogData = [
        {
            id: 1,
            imageUrl: 'assets/img/800x600/1.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'Event',
            link: '/newsevent/1',
        },
        {
            id: 2,
            imageUrl: 'assets/img/800x600/1.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'Event',
            link: '/newsevent/2',
        },
        {
            id: 3,
            imageUrl: 'assets/img/800x600/1.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'Event',
            link: '/newsevent/3',
        },
        {
            id: 4,
            imageUrl: 'assets/img/800x600/1.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'News',
            link: '/newsevent/4',
        },
        {
            id: 5,
            imageUrl: 'assets/img/800x600/1.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'News',
            link: '/newsevent/5',
        },
        {
            id: 6,
            imageUrl: 'assets/img/800x600/1.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'News',
            link: '/newsevent/6',
        },
        {
            id: 7,
            imageUrl: 'assets/img/800x600/1.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'News',
            link: '/newsevent/7',
        },
        {
            id: 8,
            imageUrl: 'assets/img/800x600/1.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'Event',
            link: '/newsevent/8',
        },
        {
            id: 9,
            imageUrl: 'assets/img/800x600/1.jpg',
            title: 'Tapamadre-newsevent 제목입니다.',
            date: '13 Oct. 2020',
            type: 'Event',
            link: '/newsevent/9',
        },
    ]

    // 타입에 따라 블로그를 필터링하는 함수
    const filterBlogsByType = (type) => {
        if (type === '*') {
            return blogData // 모든 블로그 반환
        } else {
            return blogData.filter((blog) => blog.type === type) // 해당 타입의 블로그만 반환
        }
    }

    // 필터링된 블로그 데이터
    const filteredBlogs = filterBlogsByType(activeFilter)

    return (
        <div className="container py-7 py-lg-10">
            {/* 상단버튼영역(All,News,Event) */}
            <nav className="nav nav-pill filter-nav mb-5 d-flex justify-content-center">
                <button
                    type="button"
                    data-filter="*"
                    onClick={() => handleFilterClick('*')}
                    className={`btn btn-outline-secondary rounded-pill btn-sm me-2 ${
                        activeFilter === '*' ? 'custom-orange' : ''
                    }`}
                >
                    All
                </button>
                <button
                    type="button"
                    data-filter=".g_News"
                    onClick={() => handleFilterClick('News')}
                    className={`btn btn-outline-secondary rounded-pill btn-sm me-2 ${
                        activeFilter === 'News' ? 'custom-orange' : ''
                    }`}
                >
                    News
                </button>
                <button
                    type="button"
                    data-filter=".g_Event"
                    onClick={() => handleFilterClick('Event')}
                    className={`btn btn-outline-secondary rounded-pill btn-sm ${
                        activeFilter === 'Event' ? 'custom-orange' : ''
                    }`}
                >
                    Event
                </button>
            </nav>
            <div className="row g-2 isotope-grid" data-isotope>
                {/* 필터링된 블로그 데이터를 맵 함수를 사용하여 렌더링 */}
                {filteredBlogs.map((blog) => (
                    <div key={blog.id} className={`col-md-4 col-sm-6 grid-item g_${blog.type}`}>
                        <a
                            href={blog.imageUrl} // 이미지 클릭 시 연결되는 링크 수정
                            data-title="Lorem ipsum 2022"
                            data-gallery="gallery"
                            className="glightbox hover-shadow hover-lift d-block"
                        >
                            <img src={blog.imageUrl} alt="" className="img-fluid" />
                        </a>
                        {/* 카드하단 제목영역 */}
                        <div className="pb-5 border-bottom">
                            <div className="mb-2">
                                <a href={blog.link} className="small">
                                    {' '}
                                    {/* 링크 추가 */}
                                    {blog.type}
                                </a>
                            </div>
                            <a href={blog.link} className="text-dark">
                                {' '}
                                {/* 링크 추가 */}
                                <h1 className="mb-3 h4 text-reset">{blog.title}</h1>
                            </a>
                            <div className="post-meta">
                                <ul className="list-unstyled d-flex align-items-center mb-0 small text-muted">
                                    <li className="ms-2">
                                        On{' '}
                                        <a href="#" className="text-secondary d-inline-flex align-items-center">
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
    )
}

export default BlogList
