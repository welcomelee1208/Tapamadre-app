import './App.css'
import React, { Suspense } from 'react'

// 공용 Layout
import Footer from './components/Footer'
import Header from './components/Header'

// 페이지별
import Home from './pages/board/Home'
import Menu from './pages/board/Menu'
import Login from './pages/Auth/Login'

// import { Link, Routes, Route, BrowserRouter } from 'react-router-dom'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

// 인증 기반 레이아웃 화면 컴포넌트
// import AuthLayout from './layout/AuthLayout'

// 비인증 기반 레이아웃 화면 컴포넌트
// import NonAuthLayout from './layout/NonAuthLayout'

function App() {
    return (
        <BrowserRouter basename="/">
            <div className="App">
                <Header></Header>
                {/* <Link to={'/test'}>TEST Link</Link>
                <br />
                <Link to={'/home'}>HOME Link</Link>
                <br />
                <h3>hello</h3> */}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default App
