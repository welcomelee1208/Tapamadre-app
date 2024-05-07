import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'

const AdminNewseventCreate = () => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [state, setState] = useState('')
    const [file, setFile] = useState('')
    const [regMemberId, setRegMemberId] = useState('1')

    const editorRef = useRef(null) // useRef를 null로 초기화

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Editor의 값 가져오기
        const editorValue = editorRef.current.getInstance().getMarkdown() // getMarkdown() 메서드 사용

        const formData = new FormData()
        formData.append('title', title)
        formData.append('article_type_code', category)
        formData.append('is_display_code', state)
        formData.append('main_img_path', file)
        formData.append('context', editorValue)
        formData.append('reg_member_id', regMemberId)

        try {
            const response = await axios.post('http://localhost:3001/blog/create', formData)
            if (response.status === 200) {
                console.log('성공', response)
                alert('게시글이 성공적으로 생성되었습니다.')
                navigate('/admin/newsevent')
            }
        } catch (error) {
            console.error('게시글 생성 실패:', error)
            alert('게시글 생성에 실패했습니다.')
        }
    }

    return (
        <>
            <h4 className="mb-3">게시글 생성</h4>
            <form className="needs-validation text-start px-5" noValidate onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="mb-2">제목</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="제목을 입력하세요"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-5 col-12 mb-2">
                            <label className="mb-2">카테고리</label>
                            <select className="form-control" onChange={(e) => setCategory(e.target.value)}>
                                <option value="">카테고리 선택</option>
                                <option value="0">공지사항</option>
                                <option value="1">이벤트</option>
                            </select>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-6 col-12 mb-2">
                            <label className="mb-2">게시여부</label>
                            <br />
                            <input
                                className="form-check-input"
                                required
                                type="radio"
                                name="state"
                                value="1"
                                checked={state === '1'} // 여기서 checked를 사용하여 상태를 확인합니다.
                                onChange={() => setState('1')}
                            />
                            <span className="ms-1">게시함</span>
                            <input
                                className="form-check-input ms-5"
                                required
                                type="radio"
                                name="state"
                                value="0"
                                checked={state === '0'} // 여기서 checked를 사용하여 상태를 확인합니다.
                                onChange={() => setState('0')}
                            />
                            <span className="ms-1">게시안함</span>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-12 mb-2">
                            <label className="mb-2">대표 이미지</label>
                            <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="mb-2">내용</label>
                    <Editor
                        ref={editorRef}
                        previewStyle="vertical"
                        initialEditType="wysiwyg"
                        height="450px"
                        initialValue=""
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
