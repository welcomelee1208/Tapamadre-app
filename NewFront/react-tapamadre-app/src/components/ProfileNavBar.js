import React from 'react'
import { Link } from 'react-router-dom'

const ProfileNavBar = () => {
    return (
        <div className="col-md-4 col-lg-3 order-md-1">
            {/* 관리자기능 탭 */}
            {/* 관리자 체크후 표시하기 */}
            <div className="position-relative mb-5">
                <h5 className="mb-3">MYPAGE</h5>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/admin/adminMemberList" className="text-secondary d-block py-1">
                            계정관리
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/menu" className="text-secondary d-block py-1">
                            메뉴관리
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/newsevent" className="text-secondary d-block py-1">
                            뉴스이벤트관리
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileNavBar
