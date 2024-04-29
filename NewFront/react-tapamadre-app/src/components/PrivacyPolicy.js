// 개인정보취급방침

import React from 'react'

const PrivacyPolicy = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>개인정보취급방침</h2>
                <p>개인정보취급방침 내용...</p>
            </div>
        </div>
    )
}

export default PrivacyPolicy
