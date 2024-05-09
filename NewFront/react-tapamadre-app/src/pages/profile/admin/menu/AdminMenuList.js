import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataTable from 'react-data-table-component'

// 셀렉터 choices.css/.js
import Choices from 'choices.js'

// Datatable Columns 컬럼
const columns = [
    {
        name: '대분류',
        selector: (row) => row.menu_type_code,
        sortable: true,
        center: true,
        width: '90px',
    },
    {
        name: '중분류',
        selector: (row) => row.categorized_menu_code,
        sortable: true,
        center: true,
        wrap: true,
        width: '90px',
    },
    {
        name: '이름',
        selector: (row) => row.menu_name,
        sortable: true,
        center: true,
        wrap: true,
        width: '300px',
    },
    {
        name: '가격',
        selector: (row) => row.menu_price,
        sortable: true,
        center: true,
        wrap: true,
        maxWidth: '100px',
    },
    {
        name: '세트',
        selector: (row) => row.set_menu_state_code,
        width: '80px',
        sortable: true,
        center: true,
        wrap: true,
    },
]

const AdminMenuList = () => {
    const navigate = useNavigate()
    const [menuList, setMenuList] = useState([])

    useEffect(() => {
        const fetchMenuList = async () => {
            try {
                const response = await axios.get('http://localhost:3001/menu/all')
                if (response.data.code === '200') {
                    setMenuList(response.data.data)
                } else {
                    console.error('Failed to fetch menu list:', response.data.result)
                }
            } catch (error) {
                console.error('Failed to fetch menu list:', error.message)
            }
        }

        fetchMenuList()
    }, [])

    const handleLinkToUpdate = (row) => {
        console.log(row)
        navigate(`/admin/menu/update/${row.menu_id}`)
    }

    return (
        <>
            {/* <h2 className="text-center">메뉴</h2> */}
            {/* <!--Page hero--> */}
            <section class="position-relative overflow-hidden bg-light">
                <div class="container pb-5 position-relative">
                    <div class="col-md-8 col-lg-6">
                        <h4 class="display-6 mb-2">메뉴관리</h4>
                        <nav class="mb-0" aria-label="breadcrumb">
                            <ol class="breadcrumb small bg-transparent px-0 mb-0">
                                <li class="breadcrumb-item">
                                    <a href="/">홈</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="#">MYPAGE</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    메뉴관리
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <div className="text-end">
                <Link to="/admin/menu/create">
                    <button className="btn btn-primary">메뉴 추가</button>
                </Link>
            </div>

            <DataTable
                columns={columns}
                data={menuList}
                highlightOnHover
                pagination
                onRowClicked={handleLinkToUpdate}
                customStyles={{ headCells: { style: { fontWeight: '700' } } }}
            />
        </>
    )
}

export default AdminMenuList
