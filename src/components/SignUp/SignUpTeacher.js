import axios from "axios";
import qs from "qs";
import './/css/SignUp.css';

function SignUpTeacher() {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const inputData = qs.stringify({
                userName: document.querySelector('[name=userName]').value,
                userEmail: localStorage.getItem("email"),
                userBirth: document.querySelector('[name=birthyear').value + localStorage.getItem("birthday"),
                userPhone: document.querySelector('[name = userPhone]').value,
                className: localStorage.getItem("CN"),
                accountNum: document.querySelector('[name = accountNum]').value,
            })

            axios({
                url: 'http://localhost:8080/signupteacher',
                method: 'post',
                data: inputData
            }).then((res) => {
                alert(res.data);
                localStorage.clear();
                window.location.href = '/home'
            }).catch(function (error) {
                console.log(error);
            })
        }}>
            <table className="signUpTable">
                <thead className="headSize">
                    <tr className="headSize">
                        <th className="headSize" colSpan="2">인적 사항을 입력해주세요</th>
                    </tr>
                </thead>
                <tbody className="bodySize">
                    <tr>

                        <td className="pI">ID(email)</td>
                        <td className="setInputData"><input type="text" className="inputDataAlready" value={localStorage.getItem("email")} readOnly /></td>

                    </tr>
                    <tr>
                        <td className="pI">이름</td>
                        <td className="setInputData"><input type="userName" className="inputData" name="userName" /></td>
                    </tr>
                    <tr>
                        <td className="pI">태어난 년도</td>
                        <td className="setInputData">
                            <select name="birthyear" className="selectYear" defaultValue="none">
                                <option value="none" disabled hidden>=====선 택 =====</option>
                                {year()}
                            </select>
                        </td>
                    </tr>
                    <tr>

                        생일 : {localStorage.getItem("birthday")} <br />
                    </tr>
                    <tr>

                        핸드폰 번호 : <input type="userPhone" name="userPhone" /><br />
                    </tr>
                    <tr>

                        계좌번호 : <input type="accountNum" name="accountNum" /><br />
                    </tr>
                </tbody>
                <input type="submit" value="회원가입" />
            </table>
        </form>
    )
}

function year(){
    var array = [];
    let data = [];
    for (let i =2000; i>1970; i--){
        data[i] = i;
        array.push(<option key = {data[i]} value = {i}>{i}</option>);
    }
    return array;
}

export default SignUpTeacher;