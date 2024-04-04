// 기존 App.js ==> routes/routes.js로 이동중 03.25

import './App.css'
import React, { Suspense } from 'react'

// 공용 Layout
import Footer from './layout/Footer'
import Header from './layout/Header'

//라우팅 컴포넌트
import SwitchRoutes from './routes'

// 인증 기반 레이아웃 화면 컴포넌트
// import AuthLayout from './layout/AuthLayout'

// 비인증 기반 레이아웃 화면 컴포넌트
// import NonAuthLayout from './layout/NonAuthLayout'

function App() {
    return <SwitchRoutes />
}

export default App
