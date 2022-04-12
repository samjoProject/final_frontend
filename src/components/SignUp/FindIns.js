import { useState } from "react";
import './/css/SignUp.css'

function FindIns() {
    const [x, setX] = useState([]);
    const handleClickRadioButtons = (e) =>{
        console.log(e.target.value);
        setX(e.target.value);
    }

    const movePage = (e)=>{
        if(localStorage.getItem("CN")!=null){
            if(x=="1"){
                window.location.href = 'http://localhost:3000/signupstudent'
            }else if(x=="2"){
                window.location.href = 'http://localhost:3000/signupteacher'
            }else{
                alert("선택해주세요") //수정 필ㅇㅅ
            }
        }else{
            alert("수강 과정을 선택해주세요")
        }
    }

    return (
        <div>
            <button
                value="수강 과정 검색"
                className="searchButton"
                onClick={(e) => {
                    window.open('http://localhost:3000/findclass', '팝업', 'width=700, height=800, status=0,scrollbars= 0, toolbar=0, menubar=no');
                }}
            >수강 과정 검색</button> <br />
            
            <input
                type="radio"
                value="1"
                checked={x === "1"}
                onChange={handleClickRadioButtons}
            />
            <label>학생</label> <br />

            <input
                type="radio"
                value="2"
                checked={x === "2"}
                onChange={handleClickRadioButtons}
            />
            <label>강사</label><br/>

            <input
                type="button"
                value="다음"
                onClick={(e) => {
                    movePage(e);
                }}></input>
        </div>

    )
}

export default FindIns;