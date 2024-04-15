import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Link, Element } from 'react-scroll'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css/navigation'
const MenuData = {
    menu_name: '갑오징어 튀김',
    menu_price: '20,-',
    menu_desc: '밀가루를 입혀 얇게 튀겨 낸 갑오징어에 아이올리 소스를 곁들인 안달루시아식 튀김 요리',
    menu_caution: '',
    menu_type_code: 1,
    main_img_state_code: 0,
    set_menu_state_code: 0,
    categorized_menu_code: 1,
    file: [{ file_path: 'assets/img/menu/food1.jpg' }],
}

const MenuFood = () => {
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)
    return (
        <>
            <Header />
            <div className="container py-7 py-lg-10 position-relative z-index-1">
                <div className="row">
                    {/* 카테고리 영역 */}
                    <div className="col-md-3 col-lg-3">
                        <div className="position-relative mb-5 order-md-1">
                            <h5 className="mb-3">Categories</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="lunchmenu"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="text-secondary d-block py-1r my-2"
                                    >
                                        LUNCH MENU 점심메뉴
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="pintxos"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="text-secondary d-block py-1r my-2"
                                    >
                                        PINTXOS 핀초스
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="tapas"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="text-secondary d-block py-1r my-2"
                                    >
                                        TATAS 따빠스
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="pasta"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="text-secondary d-block py-1r my-2"
                                    >
                                        PASTA 파스타
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="parrillada"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="text-secondary d-block py-1r my-2"
                                    >
                                        PARRILLADA 그릴
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="postre"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="text-secondary d-block py-1r my-2"
                                    >
                                        POSTRE 디저트
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 메뉴 카드 영역 */}
                    <div className="col-md-9">
                        <div
                            className="position-relative z-index-1 bg-white mb-4 bg-repeat"
                            style={{ backgroundImage: "url('assets/img/dust.png')" }}
                        >
                            {/* 메뉴 상단 header 부분 */}
                            {/* <div className="mb-0 px-4 py-5 bg-light position-relative d-flex align-items-end justify-content-center">
                            <svg
                                className="flip-x text-primary"
                                xmlns="http://www.w3.org/2000/svg"
                                height="60"
                                width="60"
                                fill="currentColor"
                                viewBox="0 0 5 5"
                            >
                                <path d="M2.53229,2.50962a.08033.08033,0,0,0-.06026.03386c-.08988.111-.18242.22012-.26731.33484a2.19621,2.19621,0,0,0-.18855.3684,1.55123,1.55123,0,0,0-.11406.30783c-.009.03683-.0157.07436-.02328.11159a.42714.42714,0,0,1-.01434.06967c-.037.09462-.05317.13421-.16642.07409-.084-.04468-.16367-.09756-.24379-.14908a.15785.15785,0,0,1-.0484-.05116.78555.78555,0,0,1-.12763-.53026,1.64384,1.64384,0,0,1,.18523-.56756,1.55567,1.55567,0,0,1,.2582-.32213,2.19181,2.19181,0,0,1,.32044-.26236c.08271-.05593.16014-.11971.24216-.17673a1.16809,1.16809,0,0,1,.14767-.087q.2625-.13028.53685-.23439c.25814-.09842.51628-.19713.77254-.30057a2.928,2.928,0,0,1,.30688-.11559l.01209.00565.002.01141a.07664.07664,0,0,1-.01616.02231,3.21947,3.21947,0,0,0-.42484.44183,1.521,1.521,0,0,0-.32711.72084c-.02169.12687-.044.25346-.05338.38211a1.45047,1.45047,0,0,1-.024.155,2.38193,2.38193,0,0,1-.0669.30664,1.36513,1.36513,0,0,1-.35979.59176,1.34157,1.34157,0,0,1-.44527.27926.49875.49875,0,0,1-.25255.03219.04333.04333,0,0,1-.03553-.03858.64114.64114,0,0,1,.045-.32155,1.67711,1.67711,0,0,1,.29445-.4704c.02178-.02517.0442-.04987.0649-.076a.04679.04679,0,0,0,.00558-.02607c.00023-.0096-.02284-.0121-.039-.00272-.037.02152-.07281.04508-.11047.06529a.06715.06715,0,0,1-.03979.00328c-.01317-.00219-.01892-.03155-.01126-.05123.00525-.01333.01149-.02616.01711-.03927a3.58675,3.58675,0,0,1,.22921-.44417.23094.23094,0,0,0,.017-.05328l.017-.0199-.01-.00432Z" />
                            </svg>
                            <h3 className="mb-0 px-3 display-3">Food</h3>

                            <svg
                                className="text-primary"
                                xmlns="http://www.w3.org/2000/svg"
                                height="60"
                                width="60"
                                fill="currentColor"
                                viewBox="0 0 5 5"
                            >
                                <path d="M2.53229,2.50962a.08033.08033,0,0,0-.06026.03386c-.08988.111-.18242.22012-.26731.33484a2.19621,2.19621,0,0,0-.18855.3684,1.55123,1.55123,0,0,0-.11406.30783c-.009.03683-.0157.07436-.02328.11159a.42714.42714,0,0,1-.01434.06967c-.037.09462-.05317.13421-.16642.07409-.084-.04468-.16367-.09756-.24379-.14908a.15785.15785,0,0,1-.0484-.05116.78555.78555,0,0,1-.12763-.53026,1.64384,1.64384,0,0,1,.18523-.56756,1.55567,1.55567,0,0,1,.2582-.32213,2.19181,2.19181,0,0,1,.32044-.26236c.08271-.05593.16014-.11971.24216-.17673a1.16809,1.16809,0,0,1,.14767-.087q.2625-.13028.53685-.23439c.25814-.09842.51628-.19713.77254-.30057a2.928,2.928,0,0,1,.30688-.11559l.01209.00565.002.01141a.07664.07664,0,0,1-.01616.02231,3.21947,3.21947,0,0,0-.42484.44183,1.521,1.521,0,0,0-.32711.72084c-.02169.12687-.044.25346-.05338.38211a1.45047,1.45047,0,0,1-.024.155,2.38193,2.38193,0,0,1-.0669.30664,1.36513,1.36513,0,0,1-.35979.59176,1.34157,1.34157,0,0,1-.44527.27926.49875.49875,0,0,1-.25255.03219.04333.04333,0,0,1-.03553-.03858.64114.64114,0,0,1,.045-.32155,1.67711,1.67711,0,0,1,.29445-.4704c.02178-.02517.0442-.04987.0649-.076a.04679.04679,0,0,0,.00558-.02607c.00023-.0096-.02284-.0121-.039-.00272-.037.02152-.07281.04508-.11047.06529a.06715.06715,0,0,1-.03979.00328c-.01317-.00219-.01892-.03155-.01126-.05123.00525-.01333.01149-.02616.01711-.03927a3.58675,3.58675,0,0,1,.22921-.44417.23094.23094,0,0,0,.017-.05328l.017-.0199-.01-.00432Z" />
                            </svg>
                        </div> */}

                            <h4 className="mb-1 mt-4" id="lunchmenu">
                                LUNCH MENU
                            </h4>
                            {/* 메뉴 리스트 */}
                            <ul className="list-unstyled mb-0 px-3 py-5">
                                {/* 메뉴항목1 */}
                                <li className="mb-4 mb-lg-5" onClick={toggle}>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img
                                                src="assets/img/menu/food1.jpg"
                                                alt=""
                                                className="width-60 rounded-circle shadow me-2 me-lg-4"
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                <h5 className="mb-2 fs-5 fw-semibold font-serif">
                                                    모둠 핀초 (6pieces){' '}
                                                    <a className="small text-dark">Assorted pintxo piatter (6picese)</a>
                                                </h5>
                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                <span className="fw-bold">20,-</span>
                                            </div>

                                            <p className="mb-0">
                                                다양한 재료의 핀초 요리를 한번에 맛볼 수 있는 핀초모둠요리
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                {/* 메뉴항목1 */}
                                <li className="d-flex flex-column mb-4 mb-lg-5" onClick={toggle}>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img
                                                src="assets/img/menu/food1.jpg"
                                                alt=""
                                                className="width-60 rounded-circle shadow me-2 me-lg-4"
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                <h5 className="mb-2 fs-5 fw-semibold font-serif">
                                                    토마토 부라타 샐러드{' '}
                                                    <a className="small text-dark">
                                                        Ensalada de queso burrata y tomate
                                                    </a>
                                                </h5>
                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                <span className="fw-bold">22,-</span>
                                            </div>

                                            <p className="mb-0">비네거 드레싱 베이스의 토마토와 부라타 샐러드</p>
                                        </div>
                                    </div>
                                </li>
                                {/* 메뉴항목2 */}
                                <li className="d-flex flex-column mb-4 mb-lg-5" onClick={toggle}>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img
                                                src="assets/img/menu/food1.jpg"
                                                alt=""
                                                className="width-60 rounded-circle shadow me-2 me-lg-4"
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                <h5 className="mb-2 fs-5 fw-semibold font-serif">
                                                    감바스 알 아히요 + 빵{' '}
                                                    <a className="small text-dark">Gambas al aijllo + Pan</a>
                                                </h5>
                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                <span className="fw-bold">23,-</span>
                                            </div>

                                            <p className="mb-0">
                                                마늘과 페페론치노, 올리브유를 넣어 익힌 대표적인 스페인 새우 요리
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                {/* 메뉴항목3 */}
                                <li className="d-flex flex-column mb-4 mb-lg-5" onClick={toggle}>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img
                                                src={MenuData.file[0].file_path}
                                                alt=""
                                                className="width-60 rounded-circle shadow me-2 me-lg-4"
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                <h5 className="mb-2 fs-5 fw-semibold font-serif">
                                                    뽈뽀 아 라 가예가{' '}
                                                    <a className="small text-dark">Gambas al aijllo + Pan</a>
                                                </h5>
                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                <span className="fw-bold">32,-</span>
                                            </div>

                                            <p className="mb-0">
                                                레몬 오일과 파프리카 파우더를 곁들인 갈리시아산 문어와 감자 타파스
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                {/* 메뉴항목4 */}
                                <li className="d-flex flex-column mb-4" onClick={toggle}>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img
                                                src={MenuData.file[0].file_path}
                                                alt=""
                                                className="width-60 rounded-circle shadow me-2 me-lg-4"
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                <h5 className="mb-2 fs-5 fw-semibold font-serif">
                                                    {MenuData.menu_name}{' '}
                                                    <a className="small text-dark">Gambas al aijllo + Pan</a>
                                                </h5>
                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                <span className="fw-bold">{MenuData.menu_price}</span>
                                            </div>

                                            <p className="mb-0">{MenuData.menu_desc}</p>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--end menu box--> */}
                            </ul>

                            <h4 className="mb-1 mt-4" id="pintxos">
                                PINTXOS 핀초스
                            </h4>
                            <a class="text-dark d-block py-1 font-serif">
                                작은 빵이나 바게트 위에 각종 식재료들을 올려 놓고 핀으로 고정한 스페인 바스크 지방의
                                따빠스 음식
                            </a>
                            {/* 메뉴 리스트 */}
                            <ul className="list-unstyled mb-0 px-3 py-5">
                                <li className="mb-4 mb-lg-5" onClick={toggle}>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img
                                                src={MenuData.file[0].file_path}
                                                alt=""
                                                className="width-60 rounded-circle shadow me-2 me-lg-4"
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                <h5 className="mb-2 fs-5 fw-semibold font-serif">
                                                    만체고치즈 핀초 (2pieces){' '}
                                                    <a className="small text-dark">Gambas al aijllo + Pan</a>
                                                </h5>
                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                <span className="fw-bold">8,-</span>
                                            </div>

                                            <p className="mb-0">감자 크림과 만체고 치즈를 조합한 핀초</p>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--end menu box--> */}
                            </ul>

                            <h4 className="mb-1 mt-4" id="tapas">
                                TAPAS 따빠스
                            </h4>
                            <a className="text-dark d-block py-1 font-serif">
                                에스파냐에서 주요리를 먹기 전에 작은 접시에 담겨져 나오는 소량의 전채요리. 에스파냐어로
                                따빠(tapa)는 '덮개'라는 뜻으로 안달루시아 지방에서 음식에 덮개를 덮어 먼지나
                                곤충으로부터 보호한데서 유래한 명칭
                            </a>
                            {/* 메뉴 리스트 */}
                            <ul className="list-unstyled mb-0 px-3 py-5">
                                <li className="mb-4 mb-lg-5" onClick={toggle}>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img
                                                src={MenuData.file[0].file_path}
                                                alt=""
                                                className="width-60 rounded-circle shadow me-2 me-lg-4"
                                            />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="d-flex w-100 justify-content-between align-items-center">
                                                <h5 className="mb-2 fs-5 fw-semibold font-serif">
                                                    만체고치즈 핀초 (2pieces){' '}
                                                    <a className="small text-dark">Gambas al aijllo + Pan</a>
                                                </h5>
                                                <span className="flex-grow-1 border-dashed-1 mx-3"></span>
                                                <span className="fw-bold">8,-</span>
                                            </div>

                                            <p className="mb-0">감자 크림과 만체고 치즈를 조합한 핀초</p>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--end menu box--> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Modal isOpen={modal} toggle={toggle} size="xl">
                <ModalHeader toggle={toggle}>음식상세</ModalHeader>
                <ModalBody>
                    <div className="d-flex justify-content-end">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            style={{ maxWidth: '40%', maxHeight: '60vh' }} // 스와이퍼 크기 조절
                        >
                            <SwiperSlide>
                                <img src={MenuData.file[0].file_path} alt="" className="img-fluid mb-3" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={MenuData.file[0].file_path} alt="" className="img-fluid mb-3" />
                            </SwiperSlide>
                        </Swiper>
                        <div className="d-flex justify-content-end">
                            <div className="mr-3">
                                <p>
                                    상그리아는 스페인, 포르투갈을 필두로 주로 뜨거운 태양이 있는 나라에서 즐겨 마시는
                                    국민 음료. 보통은 레드 와인에 오렌지나 레몬, 라임 등을 슬라이스 해서 넣고,
                                    파인애플이나 딸기, 포도
                                </p>
                            </div>
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        닫기
                    </Button>{' '}
                </ModalFooter>
            </Modal>
        </>
    )
}

export default MenuFood
