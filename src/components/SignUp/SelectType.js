//css 완
import './/css/SignUp.css'

function SelectType() {
    return (
        <div className='TitleScreen'>
               <div className='signUpTitle'>회원가입 하려는 유형을 선택해주세요</div>
                <input
                    type="button"
                    value="학생 / 강사"
                    className="toTheNextPage"
                    onClick={(e) => {
                        window.location.href = '/findins'
                    }}
                ></input>

                <input
                    type="button"
                    value="매니저"
                    className="toTheNextPage"
                    onClick={(e) => {
                        window.location.href = '/checkins'
                    }}
                ></input>
        </div>
    )
}

export default SelectType;