import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

import ProfileNavBar from '../../components/ProfileNavBar'
const Setting = () => {
    return (
        <>
            <Header />
            {/* 상단 영역 */}
            <section className="position-relative overflow-hidden text-white bg-dark">
                <div className="position-absolute start-0 top-0 w-100 h-100 bg-dark jarallax" data-speed=".3">
                    <img src="assets/img/1920x1000/2.jpg" alt="" className="jarallax-img opacity-25" />
                </div>

                <div className="container pt-8 pb-6 pb-lg-9 position-relative z-index-1">
                    <div className="row pt-4 pt-lg-9">
                        <div className="col-10 col-lg-7 mx-auto text-center">
                            <h1 className="display-2 mb-0">관리자 설정 </h1>
                        </div>
                    </div>
                </div>
            </section>

            <main id="main">
                <div className="container py-7 py-lg-10 position-relative z-index-1">
                    <div className="row">
                        {/* 컨텐츠영역 */}
                        <div className="col-md-8 mb-6 mb-md-0 order-md-2 pb-3">
                            <div className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
                                <Outlet />
                            </div>
                        </div>
                        {/* nav bar */}
                        <ProfileNavBar />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Setting
