// 예약화면 컴포넌트
import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const Reservation = () => {
    return (
        <div>
            <Header />
            <h1>예약</h1>
            <Footer />
        </div>
    )
}

export default Reservation
