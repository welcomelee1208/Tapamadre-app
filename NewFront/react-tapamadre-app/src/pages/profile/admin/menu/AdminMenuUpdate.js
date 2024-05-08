import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const AdminMenuUpdate = () => {
    const { menu_id } = useParams()

    const [menuData, setMenuData] = useState(null)
    const [menuName, setMenuName] = useState('')
    const [menuPrice, setMenuPrice] = useState('')
    const [menuType, setMenuType] = useState('')
    const [category, setCategory] = useState('')
    const [isSet, setIsSet] = useState(false)
    const [isPublished, setIsPublished] = useState(false)
    const [menuDesc, setMenuDesc] = useState('')
    const [menuImage, setMenuImage] = useState(null)

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/menu/${menu_id}`)
                const postData = response.data
                setMenuData(postData.data)
                setMenuName(postData.data.menu.menu_name)
                setMenuPrice(postData.data.menu.menu_price)
                setMenuType(postData.data.menu.menu_type_code)
                setCategory(postData.data.menu.categorized_menu_code)
                setMenuDesc(postData.data.menu.menu_desc)
                setMenuImage(postData.data.files.file_path)
                console.log('메뉴데이타 불러오기성공', postData)
            } catch (error) {
                console.error('Failed to fetch menu data:', error.message)
            }
        }

        fetchMenuData()
    }, [menu_id])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('menu_name', menuName)
        formData.append('menu_price', menuPrice)
        formData.append('menu_desc', menuDesc)
        formData.append('menu_type_code', menuType)
        formData.append('categorized_menu_code', category)
        formData.append('is_display_code', isPublished ? 1 : 0)
        formData.append('set_menu_state_code', isSet ? 1 : 0)
        formData.append('file_path', menuImage)

        try {
            const response = await axios.post(`http://localhost:3001/menu/update/${menu_id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            console.log(response.data)
            alert('메뉴가 성공적으로 수정되었습니다')
        } catch (error) {
            console.error('Failed to update menu:', error.message)
        }
    }

    if (!menuData) return <div>Loading...</div>

    return (
        <>
            <form className="needs-validation text-start px-5" onSubmit={handleSubmit} noValidate>
                <h4 className="mb-3">메뉴 수정</h4>
                <div className="mb-3">
                    <label className="mb-2">메뉴 이름</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="메뉴 이름"
                        value={menuName}
                        onChange={(e) => setMenuName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-6 col-12 mb-2">
                            <label className="mb-2">메뉴 타입</label>
                            <select
                                className="form-control"
                                value={menuType}
                                onChange={(e) => setMenuType(e.target.value)}
                                required
                            >
                                <option value="">메뉴 타입 선택</option>
                                <option value="1">Food</option>
                                <option value="2">Drink</option>
                                <option value="0">SetMenu</option>
                            </select>
                        </div>
                        <div className="col-sm-6 col-12 mb-2">
                            <label className="mb-2">카테고리</label>
                            <select
                                className="form-control"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="">카테고리 선택</option>
                                <option value="1">런치메뉴</option>
                                <option value="2">핀초스</option>
                                <option value="3">따빠스</option>
                                <option value="4">빠에야</option>
                                <option value="5">파스타</option>
                                <option value="6">그릴</option>
                                <option value="7">디저트</option>
                                <option value="8">상그리아</option>
                                <option value="9">글라스와인</option>
                                <option value="10">음료</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="mb-2">가격</label>
                    <input
                        type="number"
                        step={100}
                        className="form-control"
                        value={menuPrice}
                        onChange={(e) => setMenuPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="mb-2">메뉴 설명</label>
                    <textarea
                        className="form-control"
                        style={{ height: '200px' }}
                        value={menuDesc}
                        onChange={(e) => setMenuDesc(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-6 col-12 mb-2">
                            <label className="mb-2">세트여부</label>
                            <br />
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={isSet}
                                onChange={(e) => setIsSet(e.target.checked)}
                            />
                            <span className="ms-1">세트</span>
                        </div>
                        <div className="col-sm-6 col-12 mb-2">
                            <label className="mb-2">게시여부</label>
                            <br />
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={isPublished}
                                onChange={(e) => setIsPublished(e.target.checked)}
                            />
                            <span className="ms-1">게시함</span>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="mb-2">이미지 추가</label>
                    <div className="input-group">
                        <input
                            type="file"
                            className="form-control"
                            onChange={(e) => setMenuImage(e.target.files[0])}
                            required
                        />
                        <button type="button" className="btn btn-outline-primary">
                            등록
                        </button>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-4 col-12 mb-2">
                            <input className="form-check-input" type="checkbox" />
                            <span className="ms-1">대표메뉴로 설정하기</span>
                        </div>
                    </div>
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
