import React, { useRef, useEffect } from 'react'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

// 테이블 패키지
import DataTable from 'react-data-table-component'

// 셀렉터 choices.css/.js
import Choices from 'choices.js'

// Datatable Columns 컬럼
const columns = [
    {
        name: 'id',
        selector: (row) => row.id,
        sortable: true,
        wrap: true,
    },
    {
        name: '이메일',
        selector: (row) => row.email,
        sortable: true,
        wrap: true,
        minWidth: '250px',
    },
    {
        name: '이름',
        selector: (row) => row.name,
        sortable: true,
        wrap: true,
        // format: (row) => (row.is_display_code === 1 ? 'O' : 'X'),
    },
    {
        name: '상태',
        selector: (row) => row.state,
        sortable: true,
        minWidth: '80px',
    },
    {
        name: '가입유형',
        selector: (row) => row.category,
        sortable: true,
        wrap: true,
        width: '110px',
    },
    {
        name: '권한',
        selector: (row) => row.isAdmin,
        maxWidth: '600px',
        sortable: true,
        wrap: true,
        width: '110px',
    },
    {
        name: '생성날짜',
        selector: (row) => row.reg_date,
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
        email: 'test1234@test.com',
        name: 'OOO',
        state: '활성화',
        category: '직접가입',
        isAdmin: '일반',
        reg_date: '2024-03-13',
    },
]

// id값 정하기
// const keyField =

const AdminMemberList = () => {
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
    }

    return (
        <>
            <h2>회원</h2>
            <Form style={{ border: '#f0f3ee 0.5px solid', padding: '12px 8px 4px' }}>
                <Row>
                    {/* 카테고리 */}
                    <div className="col-sm-3 col-12 mb-2">
                        <select ref={selectRef} className="form-control" data-choices>
                            <option value="">카테고리 선택</option>
                            <option value="0">공지사항</option>
                            <option value="1">이벤트</option>
                            <option value="2">소식</option>
                        </select>
                    </div>

                    <div className="col-sm-9 col-12 mb-2">
                        <input type="text" req id="reservationName" class="form-control" placeholder="제목" />
                    </div>
                </Row>

                <Row className="mb-2">
                    <div className="col-sm-3 col-12 mb-2 mb-sm-0">
                        <select ref={selectRef} className="form-control" data-choices>
                            <option value="">- 예약 종류 -</option>
                            <option value="0">일반 예약</option>
                            <option value="1">단체 예약</option>
                            <option value="2">대실 예약</option>
                        </select>
                    </div>
                    <div className="col-sm-3 col-12 mb-2 mb-sm-0">
                        <select ref={selectRef} className="form-control" data-choices>
                            <option value="">- 예약 종류 -</option>
                            <option value="0">일반 예약</option>
                            <option value="1">단체 예약</option>
                            <option value="2">대실 예약</option>
                        </select>
                    </div>
                    <div className="col-sm-6 col-12 mb-2 mb-sm-0" style={{ textAlign: 'right' }}>
                        <button type="submit" class="btn btn-primary mb-1">
                            검색
                        </button>
                    </div>
                </Row>
            </Form>

            <DataTable
                columns={columns}
                data={data}
                selectableRows
                pagination
                onSelectedRowsChange={handleChange}
                onRowClicked={handleLinkToUpdate}
            />
            <div style={{ textAlign: 'right' }}>
                <button type="button" class="btn btn-danger mb-1  me-3">
                    선택 삭제
                </button>
                <button type="submit" class="btn btn-primary mb-1">
                    생성
                </button>
            </div>
        </>
    )
}

export default AdminMemberList
