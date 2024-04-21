// 개인정보취급방침
import ReactModal from 'react-modal'

const PrivacyPolicy = ({ isOpen }) => {
    return (
        <ReactModal isOpen={isOpen}>
            <form className="PrivacyPolicyForm">
                <button>X</button>
                <h4>개인정보취급방침</h4>
                <br />
                <div></div>
            </form>
        </ReactModal>
    )
}

export default PrivacyPolicy
