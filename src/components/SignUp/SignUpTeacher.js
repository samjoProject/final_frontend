import axios from "axios";
import qs from "qs";

function SignUpTeacher(){
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            const inputData = qs.stringify({
                userName: document.querySelector('[name=userName]').value,
                userEmail: localStorage.getItem("email"),
                userBirth: document.querySelector('[name=birthyear').value + localStorage.getItem("birthday"),
                userPhone: document.querySelector('[name = userPhone]').value,
                className: localStorage.getItem("CN"),
                accountNum : document.querySelector('[name = accountNum]').value,
            })
            
            axios({
                url: 'http://localhost:8080/signupteacher',
                method:'post',
                data: inputData
            }).then((res)=>{
                alert(res.data);
                localStorage.clear();
                window.location.href = '/home'
            }).catch(function (error){
                console.log(error);
            })
        }}>
            ID(email) : { localStorage.getItem("email") } <br />
            이름 : <input type = "userName" name = "userName" /><br />
            태어난 년도 : <input type = "birthyear" name = "birthyear" /><br />
            생일 : {localStorage.getItem("birthday")} <br />
            핸드폰 번호 : <input type = "userPhone" name = "userPhone" /><br />
            계좌번호 : <input type = "accountNum" name = "accountNum" /><br />
            <input type ="submit" value = "회원가입" />
        </form>
    )
}

export default SignUpTeacher;