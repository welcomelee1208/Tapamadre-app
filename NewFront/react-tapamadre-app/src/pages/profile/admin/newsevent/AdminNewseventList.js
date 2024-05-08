import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import moment from 'moment' // 모먼트 라이브러리 import
// 테이블 컬럼 설정
const columns = [
    {
        name: '카테고리',
        selector: (row) => row.article_type_code,
        sortable: true,
        width: '100px',
        format: (row) => (row.article_type_code === 0 ? 'News' : 'Event'), // 0이면 'News', 1이면 'Event'로 변환
    },
    {
        name: '제목',
        selector: (row) => row.title,
        sortable: true,
        wrap: true,
        minWidth: '250px',
    },
    {
        name: '게시여부',
        selector: (row) => row.is_display_code,
        sortable: true,
        wrap: true,
        center: true,
        width: '100px',
        format: (row) => (row.is_display_code === 1 ? 'O' : 'X'),
    },
    {
        name: '작성일',
        selector: (row) => moment(row.reg_date).format('YYYY-MM-DD HH:mm:ss'), // 모먼트를 사용하여 형식화
        sortable: true,
        wrap: true,
        width: '110px',
    },
    {
        name: '수정일',
        selector: (row) => moment(row.edit_date).format('YYYY-MM-DD HH:mm:ss'), // 모먼트를 사용하여 형식화
        maxWidth: '600px',
        sortable: true,
        wrap: true,
        width: '110px',
    },
    {
        name: '조회수',
        selector: (row) => row.view_count,
        sortable: true,
        center: true,
        width: '90px',
    },
]

const AdminNewseventList = () => {
    const navigate = useNavigate()
    const [blogList, setBlogList] = useState([])

    useEffect(() => {
        // 게시글 목록을 서버에서 가져오는 함수
        const fetchBlogList = async () => {
            try {
                const response = await axios.get('http://localhost:3001/blog/all')
                if (response.data.code === '200') {
                    setBlogList(response.data.data)
                } else {
                    console.error('게시글 목록을 불러오는데 실패했습니다.')
                }
            } catch (error) {
                console.error('게시글 목록을 불러오는데 실패했습니다.', error)
            }
        }

        fetchBlogList()
    }, [])

    // 테이블 열 클릭 이벤트 핸들러
    const handleLinkToUpdate = (row) => {
        console.log(row)
        navigate(`/admin/newsevent/update/${row.article_id}`)
    }

    return (
        <>
            {/* <h2 className="text-center">News / Event</h2> */}
            {/* <!--Page hero--> */}
            <section class="position-relative overflow-hidden bg-light">
                <div class="container pb-5 position-relative">
                    <div class="col-md-8 col-lg-6">
                        <h4 class="display-6 mb-2">블로그관리</h4>
                        <nav class="mb-0" aria-label="breadcrumb">
                            <ol class="breadcrumb small bg-transparent px-0 mb-0">
                                <li class="breadcrumb-item">
                                    <a href="/">홈</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="#">MYPAGE</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    블로그관리
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <div className="text-end">
                <Link to="/admin/newsevent/create">
                    <button type="button" className="btn btn-primary mb-1">
                        생성
                    </button>
                </Link>
            </div>

            <DataTable
                columns={columns}
                data={blogList}
                highlightOnHover
                pagination
                onRowClicked={handleLinkToUpdate}
            />
        </>
    )
}

export default AdminNewseventList
