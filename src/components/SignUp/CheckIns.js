import axios from "axios";
import qs from "qs";

function CheckIns(){
    return(
        <form>
            교육 기관 : <input type = "text" name = "instituteName"/> <br />
            사업자 번호 : <input type="text" name = "businessNum" /> 
            <input type = "button" value="조회"
            onClick={(e)=>{
                const inputData = qs.stringify({
                    instituteName: document.querySelector('[name = instituteName]').value,
                    businessNum :document.querySelector('[name=businessNum]').value
                })
                axios({
                    url: 'http://localhost:8080/checkins',
                    method:'post',
                    data: inputData
                }).then((res)=>{
                    console.log(res.data.code);
                    alert(res.data.msg);
                }).catch(function (error){
                    console.log(error);
                })
            }} /><br />
            수강 과정 : <input type = "text" name = "className" /><br />
            <input type = "button" value = "등록" 
            onClick={(e)=>{
                const submitData = qs.stringify({
                    instituteName: document.querySelector('[name = instituteName]').value,
                    businessNum :document.querySelector('[name=businessNum]').value,
                    className :document.querySelector('[name= className]').value
                })
                axios({
                    url: 'http://localhost:8080/saveins',
                    method:'post',
                    data: submitData
                }).then((res)=>{
                    alert(res.data.msg);
                    if(res.data.code ===100){
                        window.location='http://localhost:3000/home';
                    }else if(res.data.code ===200){
                        localStorage.setItem("CN", document.querySelector('[name=className]').value);
                        window.location='http://localhost:3000/signupmanager';
                    }
                }).catch(function (error){
                    console.log(error);
                })
            }} 
            />
        </form>
    )
}

export default CheckIns;