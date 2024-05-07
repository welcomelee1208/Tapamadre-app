import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Choices from 'choices.js'

const AdminMenuCreate = () => {
    const selectRef = useRef(null)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.target
        const formData = new FormData(form)

        try {
            const response = await axios.post('http://localhost:3001/admin/menu/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            console.log(response.data)
            // 메뉴 추가가 성공했을 때 필요한 동작 수행
        } catch (error) {
            console.error('Failed to create menu:', error.message)
            // 메뉴 추가에 실패했을 때 필요한 동작 수행
        }
    }

    useEffect(() => {
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
            <form className="needs-validation text-start px-5" onSubmit={handleSubmit} noValidate>
                <h4 className="mb-3">메뉴 추가</h4>
                <div className="mb-3">
                    <label htmlFor="menuName" className="form-label mb-2">
                        메뉴 이름
                    </label>
                    <input type="text" id="menuName" className="form-control" name="menu_name" required />
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="category" className="form-label mb-2">
                            음식분류
                        </label>
                        <select
                            ref={selectRef}
                            className="form-control"
                            data-choices
                            name="categorized_menu_code"
                            required
                        >
                            <option value="">카테고리 선택</option>
                            <option value="0">Food</option>
                            <option value="1">Drink</option>
                            <option value="2">Set Menu</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="category" className="form-label mb-2">
                            카테고리
                        </label>
                        <select
                            ref={selectRef}
                            className="form-control"
                            data-choices
                            name="categorized_menu_code"
                            required
                        >
                            <option value="">카테고리 선택</option>
                            <option value="0">공지사항</option>
                            <option value="1">이벤트</option>
                            <option value="2">소식</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="menuPrice" className="form-label mb-2">
                            가격
                        </label>
                        <input
                            type="number"
                            step={100}
                            id="menuPrice"
                            className="form-control"
                            name="menu_price"
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="isSetMenu" name="set_menu_state_code" />
                        <label className="form-check-label" htmlFor="isSetMenu">
                            세트 여부
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="menuImage" className="form-label mb-2">
                        메뉴 이미지
                    </label>
                    <input type="file" id="menuImage" className="form-control" name="files" multiple required />
                </div>
                <div className="mb-3">
                    <label htmlFor="menuDescription" className="form-label mb-2">
                        메뉴 설명
                    </label>
                    <textarea
                        id="menuDescription"
                        className="form-control"
                        name="menu_desc"
                        style={{ height: '200px' }}
                        required
                    ></textarea>
                </div>
                <div className="text-end">
                    <Link to="/admin/menu">
                        <button type="button" className="btn btn-outline-dark">
                            목록
                        </button>
                    </Link>
                    <button type="submit" className="btn btn-primary ms-4">
                        메뉴 추가
                    </button>
                </div>
            </form>
        </>
    )
}

export default AdminMenuCreate
