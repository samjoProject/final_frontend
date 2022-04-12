import axios from "axios";
import qs from "qs";

function SignUpManager(){
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            const inputData = qs.stringify({
                userEmail: localStorage.getItem("email"),
                userName: document.querySelector('[name=userName]').value,
                userBirth: document.querySelector('[name=birthyear').value + localStorage.getItem("birthday"),
                userAge: document.querySelector('[name = userAge]').value,
                className: localStorage.getItem("CN"),
                userPhone: document.querySelector('[name=userPhone]').value
            })

            axios({
                url: 'http://localhost:8080/signupmanager',
                method: 'post',
                data: inputData
            }).then((res)=> {
                alert(res.data);
                localStorage.clear();
                window.location.href = '/home'
            }).catch(function (error){
                console.log(error);
            })
        }}>
            ID(email) : <input type="text" value={localStorage.getItem("email")} readOnly /><br />
            이름 : <input type="text" name="userName" /><br />
            태어난 년도 
                <select name="birthyear" defaultValue="none">
                    <option value="none" disabled hidden>===선 택 === </option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                </select>
             <br />
            생일 : <input type="text" value={localStorage.getItem("birthday")} readOnly /> <br />
            나이 : <input type="text" name="userAge" /><br />
            핸드폰 번호 : <input type="text" name="userPhone" /><br />
            <input type="submit" value="회원가입" />

        </form>
    )
}

export default SignUpManager;