//css 완

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
                window.location.href = '/signupstudent'
            }else if(x=="2"){
                window.location.href = '/signupteacher'
            }else{
                alert("선택해주세요") //수정 필요?
            }
        }else{
            alert("수강 과정을 선택해주세요")
        }
    }

    return (
        <div className="TitleScreen">
            <div>
                <button
                    value="수강 과정 검색"
                    className="searchButton"
                    onClick={(e) => {
                        window.open('/findclass', '팝업', 'width=700, height=800, status=0,scrollbars= 0, toolbar=0, menubar=no');
                    }}
                >수강 과정 검색</button>
            </div>

            <div className="FindInsSection">
                <label className="FindInsRadioLabel">학    생</label>
                <input
                    className="FindInsRadioButton"
                    type="radio"
                    value="1"
                    checked={x === "1"}
                    onChange={handleClickRadioButtons}
                />
            </div>

            <div className="FindInsSection">
                <label className="FindInsRadioLabel">강    사</label>
                <input
                    className="FindInsRadioButton"
                    type="radio"
                    value="2"
                    checked={x === "2"}
                    onChange={handleClickRadioButtons}
                />
            </div>

            <div>
                <input
                className="toTheNextPage"
                    type="button"
                    value="다음"
                    onClick={(e) => {
                        movePage(e);
                    }}></input>
            </div>
        </div>

    )
}

export default FindIns;