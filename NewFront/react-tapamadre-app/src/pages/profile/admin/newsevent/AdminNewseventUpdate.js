import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'

const AdminNewseventUpdate = () => {
    const { article_id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [state, setState] = useState('')
    const [file, setFile] = useState(null)
    const [content, setContent] = useState('')
    const [imagePreview, setImagePreview] = useState(null)
    const editorRef = useRef(null) // useRef를 null로 초기화
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/blog/${article_id}`)
                const postData = response.data
                setTitle(postData.data.title)
                setCategory(postData.data.article_type_code)
                setState(postData.data.is_display_code)
                setContent(postData.data.context)
                setFile(postData.data.main_img_path)
                setImagePreview(postData.data.main_img_path)
            } catch (error) {
                console.error('게시글 조회 실패:', error)
            }
        }
        fetchPost()
    }, [article_id])

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        setFile(selectedFile)
        if (selectedFile) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(selectedFile)
        } else {
            setImagePreview(null)
        }
    }

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:3001/blog/delete/${article_id}`)
            if (response.data.code === '200') {
                console.log('게시글 삭제 성공:', response.data.result)
                navigate('/admin/newsevent')
            } else {
                console.error('게시글 삭제 실패:', response.data.result)
            }
        } catch (error) {
            console.error('게시글 삭제 실패:', error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const editorValue = editorRef.current.getInstance().getMarkdown() // getMarkdown() 메서드 사용
        const formData = new FormData()
        formData.append('title', title)
        formData.append('article_type_code', category)
        formData.append('is_display_code', state)
        formData.append('main_img_path', file)
        formData.append('context', editorValue)

        try {
            const response = await axios.post(`http://localhost:3001/blog/modify/${article_id}`, formData)
            if (response.status === 200) {
                console.log('게시글 수정 성공:', response.data)
                navigate('/admin/newsevent')
            } else {
                console.error('게시글 수정 실패:', response.data)
            }
        } catch (error) {
            console.error('게시글 수정 실패:', error)
        }
    }

    return (
        <>
            <h4 className="mb-3">게시글 수정</h4>
            <form className="needs-validation text-start px-5" noValidate onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="mb-2">제목</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="제목을 입력하세요"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className=" col-sm-5 col-12 mb-2">
                            <label className="mb-2">카테고리</label>
                            <select
                                className="form-control"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">카테고리 선택</option>
                                <option value="0">News</option>
                                <option value="1">Event</option>
                            </select>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className=" col-sm-6 col-12 mb-2">
                            <label className="mb-2">게시여부</label>
                            <br />
                            <input
                                className="form-check-input"
                                required
                                type="radio"
                                name="state"
                                value="1"
                                checked={state === 1}
                                onChange={() => setState('1')}
                            />
                            <span className="ms-1">게시함</span>
                            <input
                                className="form-check-input ms-5"
                                required
                                type="radio"
                                name="state"
                                value="0"
                                checked={state === 0}
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
                            <input type="file" className="form-control" onChange={handleFileChange} />
                            {imagePreview && (
                                <img
                                    src={`http://localhost:3001${imagePreview}`}
                                    alt="이미지 미리보기"
                                    style={{ maxWidth: '100%', marginTop: '10px' }}
                                />
                            )}
                        </div>
                        <div className="col-sm-2 col-12 mb-2"></div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="mb-2">내용</label>
                    <Editor
                        ref={editorRef}
                        previewStyle="tap"
                        initialEditType="wysiwyg"
                        height="450px"
                        initialValue={content}
                        onChange={(value) => setContent(value)}
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
                    <button type="button" className="btn btn-danger ms-4" onClick={handleDelete}>
                        <span>삭제</span>
                    </button>
                    <button type="submit" className="btn btn-primary ms-4">
                        <span>수정</span>
                    </button>
                </div>
            </form>
        </>
    )
}

export default AdminNewseventUpdate
