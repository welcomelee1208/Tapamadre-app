// AdminInquiriesList;
import React, { useEffect } from 'react'

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
        minWidth: '75px',
    },
    {
        name: '작성자',
        selector: (row) => row.user,
        sortable: true,
        wrap: true,
        minWidth: '90px',
    },
    {
        name: '제목',
        selector: (row) => row.title,
        sortable: true,
        wrap: true,
        width: '300px',
    },
    {
        name: 'IP',
        selector: (row) => row.ip,
        sortable: true,
        wrap: true,
        minWidth: '110px',
    },
    {
        name: '작성자 연락처',
        selector: (row) => (
            <div>
                {row.phone}
                <br />
                {row.email}
            </div>
        ),
        sortable: true,
        wrap: true,
        minWidth: '150px',
    },
    {
        name: '작성일',
        selector: (row) => row.edit_date,
        maxWidth: '600px',
        sortable: true,
        wrap: true,
        width: '110px',
    },
    {
        name: '확인',
        selector: (row) => row.edit_date,
        maxWidth: '600px',
        sortable: true,
        wrap: true,
        width: '110px',
    },
]

// 임시데이터
const data = [
    {
        id: 1,
        user: 'OOO',
        category: '예약관련',
        title: '문의사항 제목입니다.',
        ip: '111.111.111.111',
        email: 'test@test.com',
        phone: '010-1111-1111',
        reg_date: '2024-03-13',
        checked: 1,
    },
]

// id값 정하기
// const keyField =

const AdminInquiriesList = () => {
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
    }

    return (
        <>
            <h2>문의사항</h2>
            <DataTable
                columns={columns}
                data={data}
                selectableRows
                pagination
                onSelectedRowsChange={handleChange}
                onRowClicked={handleLinkToUpdate}
            />
            <div style={{ textAlign: 'right' }}>
                <button type="submit" class="btn btn-danger mb-1">
                    선택 삭제
                </button>
            </div>
        </>
    )
}

export default AdminInquiriesList
