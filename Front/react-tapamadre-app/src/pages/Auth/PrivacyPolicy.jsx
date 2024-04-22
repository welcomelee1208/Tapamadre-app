// 개인정보취급방침
import ReactModal from 'react-modal'

const PrivacyPolicy = ({ isOpen }) => {
    return (
        <ReactModal isOpen={isOpen}>
            <form className="PrivacyPolicyForm">
                <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    <button style={{ border: 'none' }}>X</button>
                </div>
                <h4>개인정보취급방침</h4>
                <p>개인정보 취급방침 내용..</p>
                <br />
                <div></div>
            </form>
        </ReactModal>
    )
}

export default PrivacyPolicy
