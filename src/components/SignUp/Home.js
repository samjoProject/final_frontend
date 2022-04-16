//css 완

import './/css/SignUp.css';

function Home() {
    const kakao_auth_uri = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=2f24e2a9b9b8cf99534a84ef99af7f87&redirect_uri=http://localhost:3000/authsignin`

    return (
        <div>

            <div className='TitleScreen'>
                <div className='OAuthLogo'><a href={kakao_auth_uri}> <img src="images/kakao_login.png"></img></a></div>
                <div className='OAuthLogo'>네이버</div>
                <div className='OAuthLogo'>구글</div>
                <div className='toSignUp'><a className='homeTablea' href="http://localhost:3000/checksignuptype">계정이 없으신가요?</a></div>
            </div>
            <button onClick={(e)=>StudentTest()}>학생 로그인 테스트</button>
            <button onClick={(e)=>TeacherTest()}>강사 로그인 테스트</button>
        </div>
    )

}

function StudentTest(){
    localStorage.setItem("status", true);
    localStorage.setItem("userEmail", "tj9024@gmail.com");
    localStorage.setItem("className", "풀스택양성");
    localStorage.setItem("userPers", "0");
    alert("학생 테스트 시작");
    window.location.href ="http://localhost:3000/mainpage";
}

function TeacherTest(){
    localStorage.setItem("status", true);
    localStorage.setItem("userEmail", "bklove@naver.com");
    localStorage.setItem("className", "풀스택양성");
    localStorage.setItem("userPers", "2");
    alert("학생 테스트 시작");
    window.location.href ="http://localhost:3000/mainpage";
}


export default Home;