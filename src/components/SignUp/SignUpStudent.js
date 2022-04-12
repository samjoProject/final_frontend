import axios from "axios";
import qs from "qs";
import './/css/SignUp.css'
import { useState } from "react";

function SignUpStudent() {
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            const inputData = qs.stringify({
                userEmail: localStorage.getItem("email"),
                userName: document.querySelector('[name=userName]').value,
                userBirth: document.querySelector('[name=birthyear').value + localStorage.getItem("birthday"),
                userAge: document.querySelector('[name=userAge]').value,
                userPhone: document.querySelector('[name=userPhone]').value,
                userAddress: document.querySelector('[name=userAddress').value,
                userUniv: document.querySelector('[name=userUniv').value,
                userMajor: document.querySelector('[name=userMajor').value,
                className: localStorage.getItem("CN"),
                accountNum: document.querySelector('[name=accountNum').value
            })
            axios({
                url:'http://localhost:8080/signupstudent',
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
                        <td className="setInputData"><input type="text" className="inputData" name="userName" /></td>
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
                        <td className="pI">생일</td>
                        <td className="setInputData"><input type="text" className="inputDataAlready" value={localStorage.getItem("birthday")} readOnly /></td>
                    </tr>

                    <tr>
                        <td className="pI">나이</td>
                        <td className="setInputData"><input type="text" className="inputData" name="userAge" /></td>
                    </tr>

                    <tr>
                        <td className="pI">핸드폰 번호</td>
                        <td className="setInputData"><input type="text" className="inputData"name="userPhone" /></td>
                    </tr>

                    <tr>
                        <td className="pI">주소</td>
                        <td className="setInputData"><input type="text" className="inputData" name="userAddress" /></td>
                    </tr>

                    <tr>
                        <td className="pI">대학</td>
                        <td className="setInputData"><input type="text" className="inputData" name="userUniv" /> </td>
                    </tr>

                    <tr>
                        <td className="pI">전공</td>
                        <td className="setInputData"><input type="text" className="inputData" name="userMajor" /></td>
                    </tr>

                    <tr>
                        <td className="pI">교육과정</td>
                        <td className="setInputData"><input type="text" className="inputDataAlready" value={localStorage.getItem("CN")} readOnly /></td>
                    </tr>

                    <tr>
                        <td className="pI">계좌번호</td>
                        <td className="setInputData"><input type="text" className="inputData" name="accountNum" /></td>
                    </tr>


                </tbody>

                <tfoot>
                    <tr >
                        <td colSpan = "2">
                            <input type="submit" className="signUpComplete" value="회원가입" />
                        </td>
                    </tr>
                </tfoot>
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

export default SignUpStudent;