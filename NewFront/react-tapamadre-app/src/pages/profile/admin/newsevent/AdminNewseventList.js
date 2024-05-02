import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataTable from 'react-data-table-component'

// 테이블 컬럼 설정
const columns = [
    {
        name: '카테고리',
        selector: (row) => row.article_type_code,
        sortable: true,
        width: '100px',
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
        selector: (row) => row.reg_date,
        sortable: true,
        wrap: true,
        width: '110px',
    },
    {
        name: '수정일',
        selector: (row) => row.edit_date,
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
        navigate('update')
    }

    return (
        <>
            <h2 className="text-center">News / Event</h2>
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
