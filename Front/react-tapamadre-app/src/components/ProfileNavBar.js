import React from 'react'
import { Link } from 'react-router-dom'

const ProfileNavBar = () => {
    return (
        <div className="col-md-4 col-lg-3 order-md-1">
            {/* 공통 설정 탭 */}
            <div className="position-relative mb-5">
                <h5 className="mb-3">프로필</h5>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/mypage/myaccount" className="text-secondary d-block py-1">
                            계정관리
                        </Link>
                    </li>
                    <li>
                        <Link to="/mypage/myreservation" className="text-secondary d-block py-1">
                            예약관리
                        </Link>
                    </li>
                    <li>
                        <Link to="/mypage/myinquiry" className="text-secondary d-block py-1">
                            문의사항
                        </Link>
                    </li>
                </ul>
            </div>
            {/* 관리자기능 탭 */}
            {/* 관리자 체크후 표시하기 */}
            <div className="position-relative mb-5">
                <h5 className="mb-3">관리자 기능</h5>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/admin/newsevent" className="text-secondary d-block py-1">
                            블로그관리
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/menu" className="text-secondary d-block py-1">
                            메뉴관리
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/reservation" className="text-secondary d-block py-1">
                            예약관리
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/inquiries" className="text-secondary d-block py-1">
                            문의사항
                        </Link>
                    </li>
                    <li>
                        <Link to="member" className="text-secondary d-block py-1">
                            회원관리
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileNavBar
