import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
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

const AdminMenuList = () => {
    const navigate = useNavigate()
    const [menuList, setMenuList] = useState([])

    useEffect(() => {
        const fetchMenuList = async () => {
            try {
                const response = await axios.get('http://localhost:3001/admin/menu/all')
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
