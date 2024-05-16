import React from 'react'

//인증이 필요한 페이지 컴포넌트 참조
const Myaccount = React.lazy(() => import('../pages/profile/mypage/MyPersonalData'))
const MyReservation = React.lazy(() => import('../pages/profile/mypage/MyReservations'))
const MyInquiry = React.lazy(() => import('../pages/profile/mypage/MyInquiries'))
const MyInquiryDetail = React.lazy(() => import('../pages/profile/mypage/MyInquiryDetail'))

//인증이 필요없는 페이지 컴포넌트 참조
const Home = React.lazy(() => import('../pages/board/Home'))
const MenuSet = React.lazy(() => import('../pages/board/menu/MenuSet'))
const MenuFood = React.lazy(() => import('../pages/board/menu/MenuFood'))
const MenuDrink = React.lazy(() => import('../pages/board/menu/MenuDrink'))
const NewsEvent = React.lazy(() => import('../pages/board/blog/BlogList'))
const NewsEventDetail = React.lazy(() => import('../pages/board/blog/BlogDetail'))
const Reservation = React.lazy(() => import('../pages/board/Reservation'))
const Inquiry = React.lazy(() => import('../pages/board/QnA'))
const Login = React.lazy(() => import('../pages/Auth/Login'))
const Entry = React.lazy(() => import('../pages/Auth/Entry'))
const ForgotPassword = React.lazy(() => import('../pages/Auth/ForgotPassword'))
const PrivacyPolicy = React.lazy(() => import('../components/PrivacyPolicy'))
const TermsOfService = React.lazy(() => import('../components/TermsOfService'))

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
    { path: '/forgotpassword', component: <ForgotPassword /> },
    { path: '/', component: <Home /> },
    { path: '/menufood', component: <MenuFood /> },
    { path: '/menudrink', component: <MenuDrink /> },
    { path: '/menuset', component: <MenuSet /> },
    { path: '/newsEvent', component: <NewsEvent /> },
    { path: '/newsEvent/:idx', component: <NewsEventDetail /> },
    { path: '/reservation', component: <Reservation /> },
    { path: '/inquiry', component: <Inquiry /> },
    { path: '/PrivacyPolicy', component: <PrivacyPolicy /> },
    { path: '/TermsOfService', component: <TermsOfService /> },
]

//관리자 권한이 필요한 라우팅 목록
const adminRoutes = [
    //index.js에 직접 구현
]

export { authProtectedRoutes, publicRoutes, adminRoutes }
