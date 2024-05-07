import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'

const AdminNewseventUpdate = () => {
    const { article_id } = useParams()

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [state, setState] = useState('')
    const [file, setFile] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/blog/${article_id}`)
                const postData = response.data
                console.log(response.data)

                setTitle(postData.title)
                setCategory(postData.article_type_code)
                setState(postData.is_display_code)
                setFile(postData.main_img_path)
                setContent(postData.context)
            } catch (error) {
                console.error('게시글 조회 실패:', error)
            }
        }
        fetchPost()
    }, [article_id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        // 수정 폼 제출 처리
        const formData = new FormData()
        formData.append('title', title)
        formData.append('article_type_code', category)
        formData.append('is_display_code', state)
        formData.append('main_img_path', file)
        formData.append('context', content)

        try {
            const response = await axios.post(`http://localhost:3001/blog/modify/${article_id}`, formData)
            console.log(response.data)
            // 수정이 성공적으로 이루어졌을 때의 처리
        } catch (error) {
            console.error('게시글 수정 실패:', error)
            // 수정 실패 시의 처리
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
                                <option value="0">공지사항</option>
                                <option value="1">이벤트</option>
                                <option value="2">소식</option>
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
                        <div className="col-sm-2 col-12 mb-2"></div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="mb-2">내용</label>
                    <Editor
                        previewStyle="tap"
                        initialEditType="wysiwyg"
                        placeholder="글을 작성해 주세요"
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
                    <button type="submit" className="btn btn-primary ms-4">
                        <span>수정</span>
                    </button>
                </div>
            </form>
        </>
    )
}

export default AdminNewseventUpdate
