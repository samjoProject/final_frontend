import axios from "axios";

function Login() {
    const onClick = (value)=>{
        const formData = new FormData();
        axios({
            url : 'http://localhost:8080/login',
            method:'get',
            data: formData
        }).then((res)=>{
            alert(res.data.msg)
        });
    }
    return (
        <form>
            로그인을 하십시오.<br />
            
            <a href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=2f24e2a9b9b8cf99534a84ef99af7f87&redirect_uri=http://localhost:8080/login" onClick={onClick}>
                <img src="img/kakao_login.png"></img>
            </a><br />
           
            <a href="http://localhost:3000/signup">회원가입</a>
        </form>
    );
    
}


export default Login;