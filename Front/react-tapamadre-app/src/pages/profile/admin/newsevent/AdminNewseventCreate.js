import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// text 에디터 toastui/editor 라이브러리
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'

// 셀렉터 choices.css/.js
import Choices from 'choices.js'

const AdminNewseventCreate = () => {
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
            <h4 className="mb-3">게시글 생성</h4>
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
                        <div className="col-sm-1"></div>
                        <div className=" col-sm-6 col-12 mb-2">
                            <label className="mb-2">게시여부</label>
                            <br />
                            <input className="form-check-input" required type="radio" name="state" value="" checked />
                            <span className="ms-1">게시함</span>
                            <input className="form-check-input ms-5" required type="radio" name="state" value="" />
                            <span className="ms-1">임시 저장</span>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div class="col-sm-12 col-12 mb-2">
                            <label className="mb-2">대표 이미지</label>
                            <input type="file" className="form-control" />
                        </div>
                        <div className="col-sm-2 col-12 mb-2"></div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="mb-2">내용</label>
                    <Editor
                        previewStyle="tap" // 마크다운 미리보기 화면을 나타내는 방법
                        initialEditType="wysiwyg" // 기본 에디터 타입 (마크다운 또는 위지윅)
                        placeholder="글을 작성해 주세요" // 글이 없을 때 placeholder
                        height="450px" // 높이 지정
                        initialValue=""
                        toolbarItems={[
                            ['bold', 'italic', 'strike'],
                            ['hr'],
                            ['image', 'link'],
                            ['ul', 'ol'],
                            ['code', 'codeblock'],
                        ]}
                    />
                </div>
                <div className="text-end">
                    <Link to="/admin/newsevent">
                        <button type="button" className="btn btn-outline-dark">
                            <span>목록</span>
                        </button>
                    </Link>
                    <button type="submit" className="btn btn-primary ms-4">
                        <span>게시</span>
                    </button>
                </div>
            </form>
        </>
    )
}

export default AdminNewseventCreate
