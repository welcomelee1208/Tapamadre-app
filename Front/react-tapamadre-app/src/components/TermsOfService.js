// 이용약관 컴포넌트
import React from 'react'

const TermsOfService = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>이용약관</h2>
                <p>컴포넌틑ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ불러오기</p>
            </div>
        </div>
    )
}

export default TermsOfService
