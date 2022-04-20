//회원가입 방법 정하기
//css 완
import './/css/SignUp.css';

function CheckSignUpType() {
    const kakao_auth_uri = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=2f24e2a9b9b8cf99534a84ef99af7f87&redirect_uri=http://localhost:3000/authsignup`

    return (
        <div className='TitleScreen'>
            <div><img className="logoImg" src="images/logo4.png"></img></div>
            <div className='signUpTitle'>SNS계정으로 빠른가입</div>
            <div className='OAuthLogo'><a href={kakao_auth_uri}> <img src="images/kakao_signup.png"></img></a></div>
            <div className='OAuthLogo'><img className="naver-logo" src="images/naver.png" /></div>

        </div>
    )
}

export default CheckSignUpType;