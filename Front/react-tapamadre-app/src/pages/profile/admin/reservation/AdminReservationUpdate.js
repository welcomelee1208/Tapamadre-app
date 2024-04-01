import React, { useEffect, useRef } from 'react'

// 캘린더
import flatpickr from 'flatpickr'
import '../../../../assets/vendor/css/flatpickr.min.css'

// 셀렉터 choices.css/.js
import Choices from 'choices.js'

const AdminReservationUpdate = () => {
    const selectRef = useRef(null)

    useEffect(() => {
        // 캘린더
        const fp = document.querySelectorAll('[data-flatpicker]')
        for (let i = 0; i < fp.length; ++i) {
            const element = fp[i]
            flatpickr(element, {
                minDate: 'today',
                maxDate: new Date().fp_incr(29),
            })
        }

        // choices
        const initializeChoices = () => {
            const elements = document.querySelectorAll('[data-choices]')
            elements.forEach((element) => {
                new Choices(element, {
                    classNames: {
                        containerInner: element.className,
                        input: 'form-control',
                        inputCloned: 'form-control-xs',
                        listDropdown: 'dropdown-menu',
                        itemChoice: 'dropdown-item',
                        activeState: 'show',
                        selectedState: 'active',
                    },
                })
            })
        }

        initializeChoices()
    }, [])

    return (
        <>
            <h4 className="mb-3">예약 수정</h4>
            <form className="needs-validation text-start px-5" noValidate>
                <div className="mb-3">
                    <label className="mb-2">메뉴 이름</label>
                    <input
                        type="text"
                        req=""
                        id="reservationName"
                        className="form-control"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className=" col-sm-5 col-12 mb-2">
                            <label className="mb-2">카테고리</label>
                            <select ref={selectRef} className="form-control" data-choices>
                                <option value="">카테고리 선택</option>
                                <option value="0">공지사항</option>
                                <option value="1">이벤트</option>
                                <option value="2">소식</option>
                            </select>
                        </div>
                        <div className="col-sm-2"></div>
                        <div className=" col-sm-5 col-12 mb-2">
                            <label className="mb-2">가격</label>
                            <input className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="mb-2"></label>
                    <div className="row">
                        <div className=" col-sm-4 col-12 mb-2">
                            <label className="mb-2">세트여부</label>
                            <br />
                            <input class="form-check-input" required type="checkbox" value="" />
                            <span className="ms-1">단품</span>
                        </div>
                        <div className=" col-sm-4 col-12 mb-2">
                            <label className="mb-2">게시여부</label>
                            <br />
                            <input class="form-check-input" required type="checkbox" value="" checked />
                            <span className="ms-1">게시함</span>
                        </div>
                        <div className=" col-sm-4 col-12 mb-2">
                            <label className="mb-2">대표메뉴 설정</label>
                            <br />
                            <input class="form-check-input" required type="checkbox" value="" />
                            <span className="ms-1">대표메뉴 미설정</span>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                        {/* 예약 날짜 */}
                        <div className="col-sm-5 col-12 mb-2">
                            <input
                                type="text"
                                className="form-control bg-white"
                                data-flatpicker
                                placeholder="예약 날짜"
                            />
                        </div>
                        <div className="col-sm-2"></div>
                        {/* 예약 시간 */}
                        <div className="col-sm-5 col-12 mb-2">
                            <select ref={selectRef} className="form-control" data-choices>
                                <option value="">예약 시간</option>
                                <option value="7:00 p.m.">7:00 p.m.</option>
                                <option value="7:30 p.m.">7:30 p.m.</option>
                                <option value="8:00 p.m.">8:00 p.m.</option>
                                <option value="8:30 p.m.">8:30 p.m.</option>
                                <option value="9:00 p.m.">9:00 p.m.</option>
                                <option value="9:30 p.m.">9:30 p.m.</option>
                                <option value="10:00 p.m.">10:00 p.m.</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <div className="row">
                        <div class="col-sm-5 col-12 mb-2">
                            <label className="mb-2">메뉴 이미지</label>
                            <input type="file" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="mb-2">메뉴 설명</label>
                    <textarea className="form-control" style={{ height: '200px' }}></textarea>
                </div>
                <div className="text-end">
                    <button type="submit" className="btn btn-info btn-hover-scale btn-lg w-100">
                        <span>수정</span>
                    </button>
                </div>
            </form>
        </>
    )
}

export default AdminReservationUpdate
