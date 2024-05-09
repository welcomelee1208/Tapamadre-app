// 비밀번호 찾기 컴포넌트
import React, { useState } from 'react'
import axios from 'axios'

const ForgetPassword = ({ isOpen, onClose }) => {
    const [userId, setUserId] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        onClose()
        try {
            // 임시 비밀번호 생성
            const response = await axios.post('http://localhost:3001/admin/forgot-password', { userId, name })
            setPassword(response.data.password)
            setShowPassword(true)
            setMsg('MyPage에서 변경하시기 바랍니다.')
        } catch (error) {
            setError('임시 비밀번호 생성에 실패했습니다. 입력한 정보를 확인해주세요')
        }
    }

    return (
        <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-content PassForm">
                <div className="closeBox" onClick={onClose}>
                    <button className="closeBtn">&times;</button>
                </div>
                <h4 style={{ marginBottom: '20px' }}>비밀번호 찾기</h4>
                {showPassword ? (
                    <div>
                        <p>임시 비밀번호: {password}</p>
                        <button onClick={onClose}>닫기</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" style={{ marginBottom: '10px' }}>
                                이름
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="id" style={{ marginBottom: '10px' }}>
                                아이디
                            </label>
                            <input
                                type="text"
                                id="id"
                                className="form-control"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                required
                            />
                        </div>
                        <div style={{ float: 'right' }}>
                            <button type="submit" className="btn btn-primary" style={{ marginTop: '15px' }}>
                                임시 비밀번호 발송
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default ForgetPassword
