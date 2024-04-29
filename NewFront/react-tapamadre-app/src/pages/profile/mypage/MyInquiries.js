import React, { useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// 테이블 패키지
import DataTable from 'react-data-table-component'

// Datatable Columns 컬럼
const columns = [
    {
        name: '등록일자',
        selector: (row) => row.reg_date,
        sortable: true,
        center: true,
        width: '120px',
    },
    {
        name: '제목',
        selector: (row) => row.title,
        sortable: true,
        center: true,
        wrap: true,
        width: '600px',
    },
    {
        name: '처리내역',
        selector: (row) => row.desc,
        sortable: true,
        center: true,
        wrap: true,
        maxWidth: '100px',
    },
]

// 임시데이터
const data = [
    {
        title: '문의사항',
        reg_date: '2024-03-13',
        desc: '답변완료',
    },
    {
        title: '예약문의',
        reg_date: '2024-03-13',
        desc: '접수중',
    },
    {
        title: '예약문의',
        reg_date: '2024-03-13',
        desc: '답변완료',
    },
    {
        title: '문의사항 제목입니다.',
        reg_date: '2024-03-13',
        desc: '답변완료',
    },
]

const MyInquiries = () => {
    const navigate = useNavigate()

    // 테이블 열 클릭 이벤트 핸들러
    // row : 해당 이벤트의 열 데이터(object)
    const handleLinkToUpdate = (row, event) => {
        console.log(row)
        navigate('/')
    }

    return (
        <>
            {/* <!--Page hero--> */}
            <section class="position-relative overflow-hidden bg-light">
                <div class="container pb-5 position-relative">
                    <div class="col-md-8 col-lg-6">
                        <h4 class="display-6 mb-2">문의사항</h4>
                        <nav class="mb-0" aria-label="breadcrumb">
                            <ol class="breadcrumb small bg-transparent px-0 mb-0">
                                <li class="breadcrumb-item">
                                    <a href="/">홈</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="#">프로필</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    문의사항
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <div className="text-end">
                <Link to="/">
                    <button className="btn btn-primary">문의하기</button>
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

export default MyInquiries
