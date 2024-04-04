import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

//라우팅 규칙 모듈 참조
import { authProtectedRoutes, publicRoutes } from './routes'

// 관리자 페이지 컴포넌트 참조
// 프로필 설정
import Setting from '../pages/profile/Setting'

// 프로필 세부 중첩 라우팅
// 관리자
// 예약
import AdminReservationUpdate from '../pages/profile/admin/reservation/AdminReservationUpdate'
import AdminReservationList from '../pages/profile/admin/reservation/AdminReservationList'
// News/Event
import AdminNewseventList from '../pages/profile/admin/newsevent/AdminNewseventList'
import AdminNewseventUpdate from '../pages/profile/admin/newsevent/AdminNewseventUpdate'
import AdminNewseventCreate from '../pages/profile/admin/newsevent/AdminNewseventCreate'
// 문의사항
import AdminInquiriesList from '../pages/profile/admin/inquiries/AdminInquiriesList'
import AdminInquiriesAnswer from '../pages/profile/admin/inquiries/AdminInquiriesAnswer'
// 회원
import AdminMemberList from '../pages/profile/admin/member/AdminMemberList'
import AdminMemberCreate from '../pages/profile/admin/member/AdminMemberCreate'
import AdminMemberUpdate from '../pages/profile/admin/member/AdminMemberUpdate'
// 메뉴
import AdminMenuList from '../pages/profile/admin/menu/AdminMenuList'
import AdminMenuCreate from '../pages/profile/admin/menu/AdminMenuCreate'
import AdminMenuUpdate from '../pages/profile/admin/menu/AdminMenuUpdate'

//로그인 인증 여부를 체크하는 함수
const AuthProtected = (props) => {
    if (props.isAuthProtected && !localStorage.getItem('jwttoken')) {
        return <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
    }

    return <>{props.children}</>
}

//메인 라우팅 컴포넌트
const SwitchRoutes = () => {
    return (
        <React.Fragment>
            <Suspense>
                <Routes>
                    {/* 퍼블릭 페이지 컴포넌트 라우팅 */}
                    {publicRoutes.map((route, idx) => (
                        <Route path={route.path} element={route.component} key={idx}></Route>
                    ))}

                    {/* 사용자 페이지 컴포넌트 라우팅 */}
                    {authProtectedRoutes.map((route, idx) => (
                        <Route path={route.path} element={route.component} key={idx}></Route>
                    ))}

                    {/* 관리자 페이지 컴포넌트 라우팅 */}
                    <Route path="/admin/" element={<Setting />}>
                        {/* 예약 */}
                        <Route path="reservation" element={<AdminReservationList />} />
                        <Route path="reservation/update" element={<AdminReservationUpdate />} />
                        {/* news/event */}
                        <Route path="newsevent" element={<AdminNewseventList />} />
                        <Route path="newsevent/update" element={<AdminNewseventUpdate />} />
                        <Route path="newsevent/create" element={<AdminNewseventCreate />} />
                        {/* 메뉴 */}
                        <Route path="menu" element={<AdminMenuList />} />
                        <Route path="menu/update" element={<AdminMenuUpdate />} />
                        <Route path="menu/create" element={<AdminMenuCreate />} />
                        {/* 문의사항 */}
                        <Route path="inquiries" element={<AdminInquiriesList />} />
                        <Route path="inquiries/answer" element={<AdminInquiriesAnswer />} />
                        {/* 회원 */}
                        <Route path="member" element={<AdminMemberList />} />
                        <Route path="member/update" element={<AdminMemberUpdate />} />
                        <Route path="member/create" element={<AdminMemberCreate />} />
                    </Route>
                </Routes>
            </Suspense>
        </React.Fragment>
    )
}

export default SwitchRoutes
