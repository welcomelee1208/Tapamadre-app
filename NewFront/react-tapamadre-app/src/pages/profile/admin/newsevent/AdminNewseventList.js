// AdminBlogList;
import React, { useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

// 테이블 패키지
import DataTable from 'react-data-table-component'

// 셀렉터 choices.css/.js
import Choices from 'choices.js'

// Datatable Columns 컬럼
const columns = [
    {
        name: '카테고리',
        selector: (row) => row.category,
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

// 임시데이터
const data = [
    {
        id: 1,
        category: '공지사항',
        title: '따빠마드레 공지사항 제목입니다1',
        is_display_code: 1,
        view_count: 50,
        reg_date: '2024-03-21',
        edit_date: '2024-03-23',
    },
    {
        id: 2,
        category: '공지사항',
        title: '따빠마드레 공지사항 제목입니다2',
        is_display_code: 0,
        view_count: 100,
        reg_date: '2024-03-21',
        edit_date: '2024-03-23',
    },
    {
        id: 3,
        category: '공지사항',
        title: '따빠마드레 공지사항 제목입니다3',
        is_display_code: 1,
        view_count: 50,
        reg_date: '2024-03-21',
        edit_date: '2024-03-23',
    },
    {
        id: 4,
        category: '공지사항',
        title: '따빠마드레 공지사항 제목입니다4',
        is_display_code: 0,
        view_count: 101,
        reg_date: '2024-03-21',
        edit_date: '2024-03-23',
    },
    {
        id: 5,
        category: '공지사항',
        title: '따빠마드레 공지사항 제목입니다1',
        is_display_code: 1,
        view_count: 50,
        reg_date: '2024-03-21',
        edit_date: '2024-03-23',
    },
    {
        id: 6,
        category: '공지사항',
        title: '따빠마드레 공지사항 제목입니다2',
        is_display_code: 0,
        view_count: 100,
        reg_date: '2024-03-21',
        edit_date: '2024-03-23',
    },
    {
        id: 7,
        category: '공지사항',
        title: '따빠마드레 공지사항 제목입니다3',
        is_display_code: 1,
        view_count: 50,
        reg_date: '2024-03-21',
        edit_date: '2024-03-23',
    },
    {
        id: 8,
        category: '공지사항',
        title: '따빠마드레 공지사항 제목입니다4',
        is_display_code: 0,
        view_count: 101,
        reg_date: '2024-03-21',
        edit_date: '2024-03-23',
    },
    {
        id: 9,
        category: '공지사항',
        title: '따빠마드레 공지사항 제목입니다1',
        is_display_code: 1,
        view_count: 50,
        reg_date: '2024-03-21',
        edit_date: '2024-03-23',
    },
    {
        id: 10,
        category: '공지사항',
        title: '따빠마드레 공지사항 제목입니다2',
        is_display_code: 0,
        view_count: 100,
        reg_date: '2024-03-21',
        edit_date: '2024-03-23',
    },
    {
        id: 11,
        category: '공지사항',
        title: '따빠마드레 공지사항 제목입니다3',
        is_display_code: 1,
        view_count: 50,
        reg_date: '2024-03-21',
        edit_date: '2024-03-23',
    },
    {
        id: 12,
        category: '공지사항',
        title: '따빠마드레 공지사항 제목입니다4',
        is_display_code: 0,
        view_count: 101,
        reg_date: '2024-03-21',
        edit_date: '2024-03-23',
    },
]

// id값 정하기
// const keyField =

const AdminNewseventList = () => {
    const navigate = useNavigate()
    const selectRef = useRef(null)

    // 테이블 선택 이벤트 핸들러
    // selectedRows : 선택된 데이터 리스트
    const handleChange = ({ selectedRows }) => {
        // You can set state or dispatch with something like Redux so we can use the retrieved data
        console.log('Selected Rows: ', selectedRows)
    }

    useEffect(() => {
        // choices
        const initializeChoices = () => {
            const elements = document.querySelectorAll('[data-choices]')
            elements.forEach((element) => {
                new Choices(element, {
                    classNames: {
                        containerInner: element.className,
                        input: 'form-control',
                        inputCloned: 'form-control-xs',
                        listDropdown: 'dropdown-menu',
                        itemChoice: 'dropdown-item',
                        activeState: 'show',
                        selectedState: 'active',
                    },
                })
            })
        }

        initializeChoices()
    }, [])

    // 테이블 열 클릭 이벤트 핸들러
    // row : 해당 이벤트의 열 데이터(object)
    const handleLinkToUpdate = (row, event) => {
        console.log(row)
        navigate('update')
    }

    return (
        <>
            <h2 className="text-center">News / Event</h2>
            <div className="text-end">
                <button type="button" class="btn btn-primary mb-1" onClick={() => navigate('create')}>
                    생성
                </button>
            </div>

            <DataTable columns={columns} data={data} highlightOnHover pagination onRowClicked={handleLinkToUpdate} />
        </>
    )
}

export default AdminNewseventList
