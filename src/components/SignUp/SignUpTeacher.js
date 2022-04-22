//css 적용 완
import axios from "axios";
import qs from "qs";
import './/css/SignUp.css';

function SignUpTeacher() {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const inputData = qs.stringify({
                userName: document.querySelector('[name=userName]').value,
                userEmail: localStorage.getItem("userEmail"),
                userBirth: document.querySelector('[name=birthyear').value + localStorage.getItem("birthday"),
                userPhone: document.querySelector('[name = userPhone]').value,
                className: localStorage.getItem("CN"),
                accountNum: document.querySelector('[name = accountNum]').value,
            })

            axios({
                url: 'http://44.194.225.221:8080/signupteacher',
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
            <div className="signUpForm">
                <div className="signUpTableContent">
                    <label id="userEmail" className="pI">ID(email)</label>
                    <div>
                        <input type="text" id="userEmail" className="inputDataAlready" value={localStorage.getItem("userEmail")} readOnly />
                    </div>
                </div>

                <div className="signUpTableContent">
                    <label id="userName" className="pI">이름</label>
                    <div>
                        <input type="text" className="inputData" name="userName" />
                    </div>
                </div>

                <div className="signUpTableContent">
                    <label id="birthyear" className="pI">태어난 년도</label>
                    <div>
                        <select name="birthyear" className="selectYear" defaultValue="none">
                            <option value="none" disabled hidden>=====선 택 =====</option>
                            {year()}
                        </select>
                    </div>
                </div>

                <div className="signUpTableContent">
                    <label id="birthday" className="pI">생일</label>
                    <div>
                        <input type="text" className="inputDataAlready" value={localStorage.getItem("birthday")} readOnly />
                    </div>
                </div>

                <div className="signUpTableContent">
                    <label id="userPhone" className="pI">핸드폰번호</label>
                    <div>
                        <input type="text" className="inputData" name="userPhone" />
                    </div>
                </div>

                <div className="signUpTableContent">
                    <label id="CN" className="pI">교육과정</label>
                    <div>
                      <input type="text" className="inputDataAlready" value={localStorage.getItem("CN")} readOnly />
                    </div>
                </div>

                <div className="signUpTableContent">
                    <label id="accountNum" className="pI">계좌번호</label>
                    <div>
                        <input type="text" className="inputData" name="accountNum" />
                    </div>
                </div>
            </div>
            <input type="submit" className="signUpComplete" value="회원가입" />
            
        </form>
    )
}

function year() {
    var array = [];
    let data = [];
    for (let i = 2000; i > 1970; i--) {
        data[i] = i;
        array.push(<option key={data[i]} value={i}>{i}</option>);
    }
    return array;
}

export default SignUpTeacher;