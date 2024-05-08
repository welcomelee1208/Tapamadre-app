import React, { useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

const AdminMemberList = () => {
    const [token, setToken] = useState('')
    // 사용자 정보 초기화
    const [user, setUser] = useState({
        name: '',
        id: '',
        last_login_date: '',
    })

    useEffect(() => {
        const storageToken = localStorage.getItem('token')
        if (storageToken) {
            setToken(storageToken)
        }
        const decodedToken = jwtDecode(storageToken)
        const adminInfo = {
            name: decodedToken.name,
            id: decodedToken.id,
            last_login_date: decodedToken.last_login_date,
        }
        setUser(adminInfo)
    }, [])

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
                        <h4 class="display-6 mb-2">계정관리</h4>
                        <nav class="mb-0" aria-label="breadcrumb">
                            <ol class="breadcrumb small bg-transparent px-0 mb-0">
                                <li class="breadcrumb-item">
                                    <a href="/">홈</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="#">MYPAGE</a>
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
                {/* <h4 className="mb-4">회원정보</h4> */}
                <form>
                    <div className="form-group pb-3" style={{ display: 'flex' }}>
                        <label htmlFor="name" className="col-3">
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
                        <label htmlFor="email" className="col-3">
                            아이디
                        </label>
                        <input
                            className="col-8 form-control"
                            type="text"
                            id="id"
                            name="id"
                            value={user.id}
                            disabled // 읽기 전용 설정
                            required
                        />
                    </div>
                    <div className=" pb-3">
                        <div className="form-group pb-3" style={{ display: 'flex' }}>
                            <label htmlFor="registrationDate" className="col-3">
                                마지막 로그인시간
                            </label>
                            <p> {user.last_login_date}</p>
                        </div>
                    </div>
                    <div className="profile-buttons" style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                        <div>
                            <button className="btn btn-danger mb-1 me-2" onClick={handleDeleteAccount}>
                                회원 탈퇴
                            </button>
                            <button className="btn btn-primary mb-1" onClick={handleEditProfile}>
                                수정하기
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminMemberList
