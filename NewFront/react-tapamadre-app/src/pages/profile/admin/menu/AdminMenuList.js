import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataTable from 'react-data-table-component'

// 셀렉터 choices.css/.js
import Choices from 'choices.js'

// Datatable Columns 컬럼
const columns = [
    {
        name: '메뉴타입',
        selector: (row) => {
            switch (row.menu_type_code) {
                case 0:
                    return 'set'
                case 1:
                    return 'Food'
                case 2:
                    return 'Drink'
                default:
                    return ''
            }
        },
        sortable: true,
        center: true,
        width: '150px',
    },
    {
        name: '카테고리',
        selector: (row) => {
            switch (row.categorized_menu_code) {
                case 1:
                    return '런치메뉴'
                case 2:
                    return '핀초스'
                case 3:
                    return '따빠스'
                case 4:
                    return '빠에야'
                case 5:
                    return '파스타'
                case 6:
                    return '그릴'
                case 7:
                    return '디저트'
                case 8:
                    return '상그리아'
                case 9:
                    return '글라스와인'
                case 10:
                    return '음료'
                default:
                    return ''
            }
        },
        sortable: true,
        center: true,
        wrap: true,
        width: '150px',
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
        maxWidth: '80px',
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
