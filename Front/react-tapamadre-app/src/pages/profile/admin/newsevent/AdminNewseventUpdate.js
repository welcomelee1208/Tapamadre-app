import React, { useEffect, useRef } from 'react'

// 셀렉터 choices.css/.js
import Choices from 'choices.js'

const AdminNewseventUpdate = () => {
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
            <h4 className="mb-3">게시글 수정</h4>
            <form className="needs-validation text-start px-5" noValidate>
                <div className="mb-3">
                    <label className="mb-2">제목</label>
                    <input
                        type="text"
                        req=""
                        id="reservationName"
                        className="form-control"
                        placeholder="제목을 입력하세요"
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
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div class="col-sm-5 col-12 mb-2">
                            <label className="mb-2">대표 이미지</label>
                            <input type="file" className="form-control" />
                        </div>
                        <div class="col-sm-2 col-12 mb-2"></div>
                        <div className=" col-sm-5 col-12 mb-2">
                            <label className="mb-2">게시여부</label>
                            <br />
                            <input class="form-check-input" required type="checkbox" value="" checked />
                            <span className="ms-1">게시함</span>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="mb-2">내용</label>
                    <textarea
                        className="form-control"
                        style={{ height: '200px' }}
                        placeholder="내용을 입력하세요"
                    ></textarea>
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

export default AdminNewseventUpdate
