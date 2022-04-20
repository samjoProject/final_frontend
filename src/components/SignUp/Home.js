//css 완

import './/css/SignUp.css';

function Home() {
    const kakao_auth_uri = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=2f24e2a9b9b8cf99534a84ef99af7f87&redirect_uri=http://localhost:3000/authsignin`

    return (
        <div className='TitleScreen'>
            <div><img className="logoImg" src="images/logo4.png"></img></div>
            <div className='OAuthLogo'><a href={kakao_auth_uri}> <img src="images/kakao_login.png"></img></a></div>
            <div className='OAuthLogo'><img className="naver-logo" src="images/naver.png" ></img></div>
            {/* <div className='OAuthLogo'>구글</div> */}
            <div className='toSignUp'><a className='homeTablea' href="http://localhost:3000/checksignuptype">➜ 계정이 없으신가요?</a></div>
        </div>

    )

}

export default Home;