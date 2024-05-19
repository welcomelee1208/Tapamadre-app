import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataTable from 'react-data-table-component'

// 메뉴타입 코드와 이름을 매핑하는 함수
const getMenuTypeName = (code) => {
    switch (code) {
        case 0:
            return '세트메뉴'
        case 1:
            return '음식'
        case 2:
            return '음료'
        default:
            return ''
    }
}

// 카테고리 코드와 이름을 매핑하는 함수
const getCategoryName = (code) => {
    switch (code) {
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
}

// 세트메뉴 상태 코드를 매핑하는 함수
const getSetMenuStateName = (code) => {
    switch (code) {
        case 0:
            return '설정x'
        case 1:
            return 'Lunch A'
        case 2:
            return 'Lunch B'
        case 3:
            return 'Dinner A'
        case 4:
            return 'Dinner B'
        default:
            return ''
    }
}

// Datatable Columns 컬럼
const columns = [
    {
        name: '메뉴타입',
        selector: (row) => getMenuTypeName(row.menu_type_code),
        sortable: true,
        center: true,
        width: '150px',
    },
    {
        name: '카테고리',
        selector: (row) => getCategoryName(row.categorized_menu_code),
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
        selector: (row) => {
            let setMenuStateCodes = []
            if (typeof row.set_menu_state_code === 'string') {
                try {
                    setMenuStateCodes = JSON.parse(row.set_menu_state_code)
                } catch (e) {
                    console.error('Failed to parse set_menu_state_code:', e)
                }
            } else if (Array.isArray(row.set_menu_state_code)) {
                setMenuStateCodes = row.set_menu_state_code
            }

            const setMenuNames = setMenuStateCodes.map((code) => getSetMenuStateName(Number(code)))
            return setMenuNames.join(', ')
        },
        width: '150px',
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
                    console.error('메뉴 목록을 불러오는데 실패했습니다:', response.data.result)
                }
            } catch (error) {
                console.error('메뉴 목록을 불러오는데 실패했습니다:', error.message)
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
            <section className="position-relative overflow-hidden bg-light">
                <div className="container pb-5 position-relative">
                    <div className="col-md-8 col-lg-6">
                        <h4 className="display-6 mb-2">메뉴관리</h4>
                        <nav className="mb-0" aria-label="breadcrumb">
                            <ol className="breadcrumb small bg-transparent px-0 mb-0">
                                <li className="breadcrumb-item">
                                    <a href="/">홈</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">MYPAGE</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
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
