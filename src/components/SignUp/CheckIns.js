//css 완
import axios from "axios";
import qs from "qs";
import './/css/SignUp.css';

function CheckIns() {
    return (
        <form onSubmit={(e) => {
            const submitData = qs.stringify({
                instituteName: document.querySelector('[name = instituteName]').value,
                businessNum: document.querySelector('[name=businessNum]').value,
                className: document.querySelector('[name= className]').value
            })
            axios({
                url: 'http://44.194.225.221:8080/saveins',
                method: 'post',
                data: submitData
            }).then((res) => {
                alert(res.data.msg);
                if (res.data.code === 100) {
                    window.location.href = "/home";
                } else if (res.data.code === 200) {
                    localStorage.setItem("CN", document.querySelector('[name=className]').value);
                    window.location.href = "/signupmanager";
                }
            }).catch(function (error) {
                console.log(error);
            })
        }}>
            <div className="TitleLogo">수강 과정 등록</div>

            <div className="signUpForm">
                <div className="signUpTableContent">
                    <label id="instituteName" className="pI">교육기관 명</label>
                    <div>
                        <input type="text" className="inputData" name="instituteName" />
                    </div>
                </div>

                <div className="signUpTableContent">
                    <label id="businessNum" className="pI">사업자 번호</label>
                    <div>
                        <input type="text" className="inputDataSP" name="businessNum" />
                        <input type="button" className="checkInsButton" value="조회"
                            onClick={(e) => {
                                const inputData = qs.stringify({
                                    instituteName: document.querySelector('[name = instituteName]').value,
                                    businessNum: document.querySelector('[name=businessNum]').value
                                })
                                axios({
                                    url: 'http://44.194.225.221:8080/checkins',
                                    method: 'post',
                                    data: inputData
                                }).then((res) => {
                                    console.log(res.data.code);
                                    alert(res.data.msg);
                                }).catch(function (error) {
                                    console.log(error);
                                })
                            }} />
                    </div>
                </div>

                <div className="signUpTableContent">
                    <label id="className" className="pI">교육과정 명</label>
                    <div>
                        <input type="text" className="inputData" name="className" />
                    </div>
                </div>
            </div>
            <input type="submit" className="signUpComplete" value="다음" />
        </form>
    )
}

export default CheckIns;