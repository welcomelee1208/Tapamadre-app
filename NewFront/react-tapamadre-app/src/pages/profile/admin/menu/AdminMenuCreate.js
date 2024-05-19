import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Choices from 'choices.js'

const AdminMenuCreate = () => {
    const selectRef = useRef(null)
    const navigate = useNavigate()
    const [menuTypeCode, setMenuTypeCode] = useState('')
    const choicesInstanceRef = useRef(null)

    const handleMenuTypeChange = (event) => {
        const selectedMenuTypeCode = parseInt(event.target.value)
        setMenuTypeCode(selectedMenuTypeCode)
        // 선택 상자의 내용을 동적으로 변경
        if (choicesInstanceRef.current) {
            choicesInstanceRef.current.setChoices(
                selectedMenuTypeCode === 1
                    ? [
                          { value: '1', label: '런치메뉴' },
                          { value: '2', label: '핀초스' },
                          { value: '3', label: '따빠스' },
                          { value: '4', label: '빠에야' },
                          { value: '5', label: '파스타' },
                          { value: '6', label: '그릴' },
                          { value: '7', label: '디저트' },
                      ]
                    : [
                          { value: '8', label: '상그리아' },
                          { value: '9', label: '글라스와인' },
                          { value: '10', label: '음료' },
                      ],
                'value',
                'label',
                true,
            )

            // 선택 상자 활성화
            selectRef.current.disabled = false
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.target
        const formData = new FormData(form)

        try {
            const response = await axios.post('http://localhost:3001/menu/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            console.log(response.data)
            alert('메뉴가 성공적으로 생성되었습니다')
            navigate('/admin/menu')
        } catch (error) {
            console.error('Failed to create menu:', error.message)
            // 메뉴 추가에 실패했을 때 필요한 동작 수행
        }
    }

    useEffect(() => {
        // Choices 초기화 및 참조 설정
        const initializeChoices = () => {
            choicesInstanceRef.current = new Choices(selectRef.current, {
                classNames: {
                    containerInner: 'choices__inner form-control',
                    input: 'form-control',
                    inputCloned: 'form-control-xs',
                    listDropdown: 'dropdown-menu',
                    itemChoice: 'dropdown-item',
                    activeState: 'show',
                    selectedState: 'active',
                },
            })
        }

        initializeChoices()
    }, [])

    return (
        <>
            <form className="needs-validation text-start px-5" onSubmit={handleSubmit} noValidate>
                <h4 className="mb-3">메뉴 추가</h4>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="menuType" className="form-label mb-2">
                            메뉴 타입
                        </label>
                        <select className="form-control" onChange={handleMenuTypeChange} required name="menu_type_code">
                            <option value="">메뉴 타입 선택</option>
                            <option value="1">Food</option>
                            <option value="2">Drink</option>
                        </select>
                    </div>
                    <div className="col-md-6 align-self-start">
                        {' '}
                        {/* align-self-start 클래스 추가 */}
                        <label className="form-label mb-2">카테고리</label>
                        <select
                            ref={selectRef}
                            className="form-control"
                            data-choices
                            name="categorized_menu_code"
                            required
                            disabled={menuTypeCode === 0}
                        >
                            <option value="">카테고리 선택</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="menuName" className="form-label mb-2">
                        메뉴 이름
                    </label>
                    <input type="text" id="menuName" className="form-control" name="menu_name" required />
                </div>
                <div className="mb-3">
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

                <div className="mb-3">
                    <label htmlFor="menuImage" className="form-label mb-2">
                        메뉴 이미지
                    </label>
                    <input
                        type="file"
                        id="menuImage"
                        className="form-control"
                        name="menu_image"
                        accept="image/*"
                        multiple
                        required
                    />
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
