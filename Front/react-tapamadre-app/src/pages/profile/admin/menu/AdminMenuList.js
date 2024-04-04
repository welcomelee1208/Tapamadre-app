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
        name: '종류',
        selector: (row) => row.category,
        sortable: true,
        center: true,
        width: '90px',
    },
    {
        name: '이름',
        selector: (row) => row.name,
        sortable: true,
        center: true,
        wrap: true,
        width: '300px',
    },
    {
        name: '가격',
        selector: (row) => row.cost,
        sortable: true,
        center: true,
        wrap: true,
        maxWidth: '100px',
    },
    {
        name: '설명',
        selector: (row) => row.desc,
        sortable: true,
        wrap: true,
        width: '300px',
        // format: (row) => (row.is_display_code === 1 ? 'O' : 'X'),
    },

    {
        name: '종류',
        selector: (row) => row.category,
        sortable: true,
        center: true,
        wrap: true,
        width: '90px',
    },
    {
        name: '세트',
        selector: (row) => row.isSetMenu,
        width: '80px',
        sortable: true,
        center: true,
        wrap: true,
    },
]

// 임시데이터
const data = [
    {
        name: '수제 하몽 만체고 크로켓',
        reg_date: '2024-03-13',
        category: '식사메뉴',
        state: 'O',
        isSetMenu: 'O',
        cost: 15000,
        desc: '메뉴 설명 텍스트 입니다.',
    },
    {
        name: '오늘의 셰프 추천 봉골레 파스타',
        reg_date: '2024-03-13',
        category: '식사메뉴',
        state: 'O',
        isSetMenu: 'X',
        cost: 13000,
        desc: '메뉴 설명 텍스트 입니다. 메뉴 설명 텍스트 입니다.',
    },
    {
        name: '프랑스산 레드 와인',
        reg_date: '2024-03-13',
        category: '음료',
        state: 'O',
        isSetMenu: 'X',
        cost: 42000,
        desc: '메뉴 설명 텍스트 입니다. 메뉴 설명 텍스트 입니다.',
    },
    {
        name: '수제 하몽 만체고 크로켓',
        reg_date: '2024-03-13',
        category: '식사메뉴',
        state: 'O',
        isSetMenu: 'O',
        cost: 15000,
        desc: '메뉴 설명 텍스트 입니다.',
    },
    {
        name: '수제 하몽 만체고 크로켓',
        reg_date: '2024-03-13',
        category: '식사메뉴',
        state: 'O',
        isSetMenu: 'O',
        cost: 15000,
        desc: '메뉴 설명 텍스트 입니다.',
    },
    {
        name: '수제 하몽 만체고 크로켓',
        reg_date: '2024-03-13',
        category: '식사메뉴',
        state: 'O',
        isSetMenu: 'O',
        cost: 15000,
        desc: '메뉴 설명 텍스트 입니다.',
    },
    {
        name: '수제 하몽 만체고 크로켓',
        reg_date: '2024-03-13',
        category: '식사메뉴',
        state: 'O',
        isSetMenu: 'O',
        cost: 15000,
        desc: '메뉴 설명 텍스트 입니다.',
    },
    {
        name: '수제 하몽 만체고 크로켓',
        reg_date: '2024-03-13',
        category: '식사메뉴',
        state: 'O',
        isSetMenu: 'O',
        cost: 15000,
        desc: '메뉴 설명 텍스트 입니다.',
    },
    {
        name: '수제 하몽 만체고 크로켓',
        reg_date: '2024-03-13',
        category: '식사메뉴',
        state: 'O',
        isSetMenu: 'O',
        cost: 15000,
        desc: '메뉴 설명 텍스트 입니다.',
    },
    {
        name: '수제 하몽 만체고 크로켓',
        reg_date: '2024-03-13',
        category: '식사메뉴',
        state: 'O',
        isSetMenu: 'O',
        cost: 15000,
        desc: '메뉴 설명 텍스트 입니다.',
    },
    {
        name: '수제 하몽 만체고 크로켓',
        reg_date: '2024-03-13',
        category: '식사메뉴',
        state: 'O',
        isSetMenu: 'O',
        cost: 15000,
        desc: '메뉴 설명 텍스트 입니다.',
    },
    {
        name: '수제 하몽 만체고 크로켓',
        reg_date: '2024-03-13',
        category: '식사메뉴',
        state: 'O',
        isSetMenu: 'O',
        cost: 15000,
        desc: '메뉴 설명 텍스트 입니다.',
    },
    {
        name: '수제 하몽 만체고 크로켓',
        reg_date: '2024-03-13',
        category: '식사메뉴',
        state: 'O',
        isSetMenu: 'O',
        cost: 15000,
        desc: '메뉴 설명 텍스트 입니다.',
    },
]

// id값 정하기
// const keyField =

const AdminMenuList = () => {
    const navigate = useNavigate()

    // 테이블 열 클릭 이벤트 핸들러
    // row : 해당 이벤트의 열 데이터(object)
    const handleLinkToUpdate = (row, event) => {
        console.log(row)
        navigate('/admin/menu/update')
    }

    return (
        <>
            <h2 className="text-center">메뉴</h2>
            <div className="text-end">
                <Link to="/admin/menu/create">
                    <button className="btn btn-primary">메뉴 추가</button>
                </Link>
            </div>

            <DataTable
                columns={columns}
                data={data}
                highlightOnHover
                pagination
                onRowClicked={handleLinkToUpdate}
                customStyles={{ headCells: { style: { fontWeight: '700' } } }}
            />
        </>
    )
}

export default AdminMenuList
