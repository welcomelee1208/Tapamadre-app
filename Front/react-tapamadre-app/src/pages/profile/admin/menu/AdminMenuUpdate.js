import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// 셀렉터 choices.css/.js
import Choices from 'choices.js'

const imgFiles = [
    {
        fileName: '메뉴이미지1',
        main_img_state_code: 1,
    },
    {
        fileName: '메뉴이미지2',
        main_img_state_code: 0,
    },
    {
        fileName: '메뉴이미지3',
        main_img_state_code: 0,
    },
    {
        fileName: '메뉴이미지4',
        main_img_state_code: 0,
    },
]

const AdminMenuUpdate = () => {
    const selectRef = useRef(null)

    useEffect(() => {
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
            <form className="needs-validation text-start px-5" noValidate>
                <h4 className="mb-3">메뉴 추가</h4>
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
                        <div className=" col-sm-6 col-12 mb-2">
                            <label className="mb-2">카테고리</label>
                            <select ref={selectRef} className="form-control" data-choices>
                                <option value="">카테고리 선택</option>
                                <option value="0">공지사항</option>
                                <option value="1">이벤트</option>
                                <option value="2">소식</option>
                            </select>
                        </div>

                        <div className=" col-sm-6 col-12 mb-2">
                            <label className="mb-2">가격</label>
                            <input type="number" step={100} className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="mb-2"></label>
                    <div className="row">
                        <div className=" col-sm-6 col-12 mb-2">
                            <label className="mb-2">세트여부</label>
                            <br />
                            <input className="form-check-input" type="radio" name="isSet" value="single_menu" checked />
                            <span className="ms-1">단품</span>
                            <input className="form-check-input ms-5" type="radio" name="isSet" value="set_menu" />
                            <span className="ms-1">세트</span>
                        </div>
                        <div className=" col-sm-6 col-12 mb-2">
                            <label className="mb-2">게시여부</label>
                            <br />
                            <input class="form-check-input" required type="radio" name="state" value="" checked />
                            <span className="ms-1">게시함</span>
                            <input class="form-check-input ms-5" required type="radio" name="state" value="" />
                            <span className="ms-1">임시 저장</span>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <label className="mb-2">이미지 추가</label>
                            <div className="input-group">
                                <input type="file" className="form-control" />
                                <button type="button" className="btn btn-outline-primary">
                                    등록
                                </button>
                            </div>
                            <div>
                                {imgFiles.map((img, index) => (
                                    <div
                                        key={index}
                                        className="d-flex align-items-center my-2"
                                        style={{
                                            backgroundColor: 'rgba(217, 217, 217, 0.71)',
                                            fontSize: '0.9rem',
                                            height: '35px',
                                            padding: '5px 7px',
                                        }}
                                    >
                                        <span className="col-4">
                                            {img.fileName}
                                            {img.main_img_state_code === 1 && (
                                                <span
                                                    className="btn btn-primary ms-3"
                                                    style={{
                                                        height: '25px',
                                                        padding: '2px 4px',
                                                        borderRadius: '10px',
                                                    }}
                                                >
                                                    대표 이미지
                                                </span>
                                            )}
                                        </span>
                                        <div className="col-8 text-end">
                                            <i class="bi bi-x-lg"></i>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className=" col-sm-4 col-12 mb-2">
                            <input class="form-check-input" type="checkbox" />
                            <span className="ms-1">대표메뉴로 설정하기</span>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="mb-2">메뉴 설명</label>
                    <textarea className="form-control" style={{ height: '200px' }}></textarea>
                </div>
                <div className="text-end">
                    <Link to="/admin/menu">
                        <button type="button" className="btn btn-outline-dark">
                            <span>목록</span>
                        </button>
                    </Link>
                    <button type="submit" className="btn btn-primary ms-4">
                        <span>메뉴 수정</span>
                    </button>
                </div>
            </form>
        </>
    )
}

export default AdminMenuUpdate
