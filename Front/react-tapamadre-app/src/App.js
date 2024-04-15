import './App.css'
import React, { Suspense } from 'react'

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
