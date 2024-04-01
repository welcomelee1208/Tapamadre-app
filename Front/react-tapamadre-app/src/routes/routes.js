import React from 'react'

//인증이 필요한 페이지 컴포넌트 참조
const Myaccount = React.lazy(() => import('../pages/profile/mypage/MyPersonalData'))
const MyReservation = React.lazy(() => import('../pages/profile/mypage/MyReservations'))
const MyInquiry = React.lazy(() => import('../pages/profile/mypage/MyInquiries'))
const MyInquiryDetail = React.lazy(() => import('../pages/profile/mypage/MyInquiryDetail'))

//인증이 필요없는 페이지 컴포넌트 참조
const Home = React.lazy(() => import('../pages/board/Home'))
const Menu = React.lazy(() => import('../pages/board/menu/Menu'))
const NewsEvent = React.lazy(() => import('../pages/board/blog/BlogList'))
const NewsEventDetail = React.lazy(() => import('../pages/board/blog/BlogDetail'))
const Reservation = React.lazy(() => import('../pages/board/Reservation'))
const Inquiry = React.lazy(() => import('../pages/board/QnA'))
const Login = React.lazy(() => import('../pages/Auth/Login'))
const Entry = React.lazy(() => import('../pages/Auth/Entry'))
const ForgetPassword = React.lazy(() => import('../pages/Auth/ForgetPassword'))

//인증이 필요한 라우팅 목록
const authProtectedRoutes = [
    { path: '/mypage/myaccount', component: <Myaccount /> },
    { path: '/mypage/myreservation', component: <MyReservation /> },
    { path: '/mypage/myinquiry', component: <MyInquiry /> },
    { path: '/mypage/myinquiry/:idx', component: <MyInquiryDetail /> },
]

//인증이 필요 없는 라우팅 목록
const publicRoutes = [
    { path: '/login', component: <Login /> },
    { path: '/entry', component: <Entry /> },
    { path: '/forgetpassword', component: <ForgetPassword /> },
    { path: '/', component: <Home /> },
    { path: '/menu', component: <Menu /> },
    { path: '/newsEvent', component: <NewsEvent /> },
    { path: '/newsEvent/:idx', component: <NewsEventDetail /> },
    { path: '/reservation', component: <Reservation /> },
    { path: '/inquiry', component: <Inquiry /> },
]

//관리자 권한이 필요한 라우팅 목록
const adminRoutes = [
    //index.js에 직접 구현
]

export { authProtectedRoutes, publicRoutes, adminRoutes }
