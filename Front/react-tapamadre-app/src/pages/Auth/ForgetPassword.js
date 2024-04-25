// 비밀번호 찾기 컴포넌트
import React, { useState } from 'react'

const ForgetPassword = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // alert('등록한 메일로 임시 비밀번호가 발송되었습니다.')
        onClose()
    }

    return (
        <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-content PassForm">
                <div className="closeBox" onClick={onClose}>
                    <button className="closeBtn">&times;</button>
                </div>
                <h4 style={{ marginBottom: '20px' }}>비밀번호 찾기</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" style={{ marginBottom: '10px' }}>
                            이메일
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div style={{ float: 'right' }}>
                        <button type="submit" className="btn btn-primary" style={{ marginTop: '15px' }}>
                            임시 비밀번호 발송
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword
