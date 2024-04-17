import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// import '../../../assets/css/app.css'

const MyPersonalData = () => {
    // 예시 데이터로 사용자 정보 초기화
    const [user, setUser] = useState({
        name: '이보람',
        email: 'test@test.com',
        phoneNumber: '010-1111-2222',
        membershipType: 'sns',
        registrationDate: '2024-04-11',
    })

    // 비밀번호 변경 관련 상태
    const [passwordChange, setPasswordChange] = useState(false)

    // 비밀번호 변경 함수
    const handleChangePassword = () => {
        // 비밀번호 변경 관련 작업 수행
        // ...
        alert('비밀번호 변경 작업을 수행합니다.')
    }

    // 회원 탈퇴 함수
    const handleDeleteAccount = () => {
        // 회원 탈퇴 작업 수행
        // ...
        alert('회원 탈퇴 작업을 수행합니다.')
    }

    // 정보 수정 함수
    const handleEditProfile = () => {
        // 정보 수정 작업 수행
        // ...
        alert('회원 정보를 수정합니다.')
    }

    return (
        <>
            {/* <!--Page hero--> */}
            <section class="position-relative overflow-hidden bg-light">
                <div class="container pb-5 position-relative">
                    <div class="col-md-8 col-lg-6">
                        <h4 class="display-6 mb-2">나의 정보</h4>
                        <nav class="mb-0" aria-label="breadcrumb">
                            <ol class="breadcrumb small bg-transparent px-0 mb-0">
                                <li class="breadcrumb-item">
                                    <a href="/">홈</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="#">나의정보</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    계정관리
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <div className="container py-3">
                <h4 className="mb-4">회원정보</h4>
                <form>
                    <div className="form-group pb-3" style={{ display: 'flex' }}>
                        <label htmlFor="name" className="col-2">
                            이름
                        </label>
                        <input
                            className="col-8 form-control"
                            type="text"
                            id="name"
                            name="name"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group pb-3" style={{ display: 'flex' }}>
                        <label htmlFor="email" className="col-2">
                            이메일
                        </label>
                        <input
                            className="col-8 form-control"
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            disabled // 읽기 전용 설정
                            required
                        />
                    </div>
                    <div className="form-group pb-3" style={{ display: 'flex' }}>
                        <label htmlFor="phoneNumber" className="col-2">
                            전화번호
                        </label>
                        <input
                            className="col-8 form-control"
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={user.phoneNumber}
                            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                            required
                        />
                    </div>
                    <div className=" pb-3" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <div className="form-group col-5" style={{ display: 'flex' }}>
                            <label htmlFor="membershipType" className="col-5">
                                회원가입 유형
                            </label>
                            <p className=""> {user.membershipType === 'sns' ? 'SNS' : '사이트'}</p>
                        </div>
                        <div className="form-group col-5" style={{ display: 'flex' }}>
                            <label htmlFor="registrationDate" className="col-5">
                                가입일 유형
                            </label>
                            <p> {user.registrationDate}</p>
                        </div>
                    </div>
                    {passwordChange ? (
                        <div className="form-group">
                            <input type="password" placeholder="새로운 비밀번호 입력" />
                            <button className="btn btn-info mb-1" onClick={handleChangePassword}>
                                비밀번호 변경
                            </button>
                        </div>
                    ) : (
                        <button className="btn btn-info mb-1" onClick={() => setPasswordChange(true)}>
                            비밀번호 변경
                        </button>
                    )}
                    <div className="profile-buttons" style={{ position: 'absolute', right: 0, bottom: 0 }}>
                        <button className="btn btn-danger mb-1 me-2" onClick={handleDeleteAccount}>
                            회원 탈퇴
                        </button>
                        <button className="btn btn-primary mb-1" onClick={handleEditProfile}>
                            수정하기
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default MyPersonalData
