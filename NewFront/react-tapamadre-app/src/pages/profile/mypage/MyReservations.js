import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MyReservations = () => {
    const [reservation, setReservation] = useState({
        userName: '홍길동',
        email: 'hong@example.com',
        reservationStatus: '확인 중',
        phoneNumber: '010-1234-5678',
        reservationDate: '2024-04-15',
        reservationTime: '12:00 PM',
        reservationType: '점심 예약',
        numberOfPeople: 2,
    })

    // 예약 취소 함수
    const handleCancelReservation = () => {
        // 예약 취소 로직 추가
    }
    return (
        <>
            {/* <!--Page hero--> */}
            <section class="position-relative overflow-hidden bg-light">
                <div class="container pb-5 position-relative">
                    <div class="col-md-8 col-lg-6">
                        <h4 class="display-6 mb-2">예약관리</h4>
                        <nav class="mb-0" aria-label="breadcrumb">
                            <ol class="breadcrumb small bg-transparent px-0 mb-0">
                                <li class="breadcrumb-item">
                                    <a href="/">홈</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="#">프로필</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    예약관리
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <div className="container py-3">
                <h4 className="mb-4">예약자 정보</h4>
                <div style={{ display: 'flex' }}>
                    <div className="col">
                        <div className="row mb-3">
                            <label htmlFor="userName" className="col-md-4 col-form-label">
                                예약자명
                            </label>
                            <div className="col-md-8">
                                <p className="form-control-plaintext">{reservation.userName}</p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="email" className="col-md-4 col-form-label">
                                이메일
                            </label>
                            <div className="col-md-8">
                                <p className="form-control-plaintext">{reservation.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row mb-3">
                            <label htmlFor="reservationStatus" className="col-md-4 col-form-label">
                                예약 상태
                            </label>
                            <div className="col-md-8">
                                <p className="form-control-plaintext">{reservation.reservationStatus}</p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="phoneNumber" className="col-md-4 col-form-label">
                                전화번호
                            </label>
                            <div className="col-md-8">
                                <p className="form-control-plaintext">{reservation.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-3">
                <h4 className="mb-4">예약 정보</h4>
                <div style={{ display: 'flex' }}>
                    <div className="col">
                        <div className="row mb-3">
                            <label htmlFor="reservationDate" className="col-md-4 col-form-label">
                                예약 날짜
                            </label>
                            <div className="col-md-8">
                                <p className="form-control-plaintext">{reservation.reservationDate}</p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="reservationType" className="col-md-4 col-form-label">
                                예약 종류
                            </label>
                            <div className="col-md-8">
                                <p className="form-control-plaintext">{reservation.reservationType}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row mb-3">
                            <label htmlFor="reservationTime" className="col-md-4 col-form-label">
                                예약 시간
                            </label>
                            <div className="col-md-8">
                                <p className="form-control-plaintext">{reservation.reservationTime}</p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="numberOfPeople" className="col-md-4 col-form-label">
                                예약 인원
                            </label>
                            <div className="col-md-8">
                                <p className="form-control-plaintext">{reservation.numberOfPeople}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <button type="submit" className="btn btn-danger me-2" onClick={handleCancelReservation}>
                            예약 취소
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyReservations
