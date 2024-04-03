// Redux Action Type
// 각종 액션 타입 정의

export const USER_LOGIN = 'USER_LOGIN'

export const API_FAILED = 'API_FAILED'

//로그인한 사용자 정보를 전역데이터로 관리하기 위한 시나리오 구현
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'

//로그아웃 완료 후 로그인 전역상태 정보 업데이터 처리
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'

//최좌측 메뉴 클릭시 클릭한 메뉴아이디 값을 전역데이터로  저장하고 중간에 탭컴포넌트에 관련 메뉴컴포넌트 표시하는 시나리오-선택메뉴텍스트
export const SET_ACTIVE_TAP = 'SET_ACTIVE_TAP'
