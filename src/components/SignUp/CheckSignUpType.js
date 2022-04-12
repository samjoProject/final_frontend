//여기서 회원가입할 방법을 정하기?

function CheckSignUpType(){
    const kakao_auth_uri = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=2f24e2a9b9b8cf99534a84ef99af7f87&redirect_uri=http://localhost:3000/authsignup`

    return (
        <div className="Check">
            회원가입할 방식을 설정해주세요. <br />
            <a href={kakao_auth_uri}> <img src = "img/kakao_login.png"></img></a>
        </div>
    )
}

export default CheckSignUpType;