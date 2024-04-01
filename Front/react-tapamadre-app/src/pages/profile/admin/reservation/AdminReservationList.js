import React, { useRef, useEffect } from 'react'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

// 테이블 패키지
import DataTable from 'react-data-table-component'

// 캘린더
import flatpickr from 'flatpickr'
import '../../../../assets/vendor/css/flatpickr.min.css'

// 셀렉터 choices.css/.js
import Choices from 'choices.js'

// Datatable Columns 컬럼
const columns = [
    {
        name: 'date',
        selector: (row) => row.date,
        sortable: true,
    },
    {
        name: 'time',
        selector: (row) => row.time,
        sortable: true,
    },
    {
        name: 'name',
        selector: (row) => row.name,
        wrap: true,
    },
    {
        name: 'personnel',
        selector: (row) => row.personnel,
        sortable: true,
    },
    {
        name: 'phone',
        selector: (row) => row.phone,
        maxWidth: '600px',
        sortable: true,
        wrap: true,
        width: '150px',
    },
    {
        name: 'type',
        selector: (row) => row.type,
        sortable: true,
    },
    {
        name: 'state',
        selector: (row) => row.state,
        sortable: true,
    },
    {
        name: 'reg_date',
        selector: (row) => row.reg_date,
        sortable: true,
        wrap: true,
        width: '150px',
    },
]

// 임시데이터
const data = [
    {
        id: 1,
        selceted: true,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-0000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: false,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-1000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: true,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-2000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: true,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-3000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: true,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-0000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: false,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-1000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: true,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-2000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: true,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-3000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: true,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-0000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: false,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-1000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: true,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-2000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: true,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-3000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: true,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-0000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: false,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-1000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: true,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-2000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
    {
        selceted: true,
        date: '2024-03-25',
        time: '13:00',
        name: 'OOO',
        personnel: 5,
        phone: '010-3000-0000',
        type: '일반',
        state: '예약확정',
        reg_date: '2024-03-21 13:10',
    },
]

//
// const keyField =

const AdminReservationList = () => {
    const selectRef = useRef(null)

    // 테이블 선택 이벤트 핸들러
    // selectedRows : 선택된 데이터 리스트
    const handleChange = ({ selectedRows }) => {
        // You can set state or dispatch with something like Redux so we can use the retrieved data
        console.log('Selected Rows: ', selectedRows)
    }

    useEffect(() => {
        // 캘린더
        const fp = document.querySelectorAll('[data-flatpicker]')
        for (let i = 0; i < fp.length; ++i) {
            const element = fp[i]
            flatpickr(element, {
                minDate: 'today',
                maxDate: new Date().fp_incr(29),
            })
        }

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

    return (
        <>
            <h2>예약 목록</h2>
            <Form style={{ border: '#f0f3ee 0.5px solid', padding: '12px 2px 4px' }}>
                <Row>
                    {/* 예약 날짜 */}
                    <div className="col-sm-4 col-12 mb-2">
                        <input type="text" className="form-control bg-white" data-flatpicker placeholder="예약 날짜" />
                    </div>

                    {/* 예약 시간 */}
                    <div className="col-sm-4 col-12 mb-2">
                        <select ref={selectRef} className="form-control" data-choices>
                            <option value="">예약 시간</option>
                            <option value="7:00 p.m.">7:00 p.m.</option>
                            <option value="7:30 p.m.">7:30 p.m.</option>
                            <option value="8:00 p.m.">8:00 p.m.</option>
                            <option value="8:30 p.m.">8:30 p.m.</option>
                            <option value="9:00 p.m.">9:00 p.m.</option>
                            <option value="9:30 p.m.">9:30 p.m.</option>
                            <option value="10:00 p.m.">10:00 p.m.</option>
                        </select>
                    </div>

                    <div class="col-sm-4 col-12 mb-2">
                        <input type="text" req id="reservationName" class="form-control" placeholder="이름" />
                    </div>
                </Row>

                <Row className="mb-2">
                    <div class="col-sm-4 col-12 mb-2 mb-sm-0">
                        <input type="text" req id="reservationName" class="form-control" placeholder="전화번호" />
                    </div>
                    <div class="col-sm-2 col-12 mb-2 mb-sm-0">
                        <select ref={selectRef} className="form-control" data-choices>
                            <option value="">- 예약 종류 -</option>
                            <option value="0">일반 예약</option>
                            <option value="1">단체 예약</option>
                            <option value="2">대실 예약</option>
                        </select>
                    </div>
                    <div class="col-sm-2 col-12 mb-2 mb-sm-0">
                        <select ref={selectRef} className="form-control" data-choices>
                            <option value="">- 예약 종류 -</option>
                            <option value="0">일반 예약</option>
                            <option value="1">단체 예약</option>
                            <option value="2">대실 예약</option>
                        </select>
                    </div>
                    <div class="col-sm-2 col-12 mb-2 mb-sm-0">
                        <input type="number" req id="reservationName" class="form-control" placeholder="인원" />
                    </div>
                    <div class="col-sm-2 col-12 mb-2 mb-sm-0">
                        <button type="button" class="btn btn-primary mb-1">
                            검색
                        </button>
                    </div>
                </Row>
            </Form>

            <DataTable columns={columns} data={data} selectableRows pagination onSelectedRowsChange={handleChange} />
        </>
    )
}

export default AdminReservationList
