import './/css/SignUp.css'

function SelectType() {
    return (
        <form>
            <header>
                <h1>
                    회원가입 하려는 유형을 선택해주세요
                </h1>
            </header>

            <input
                type="button"
                value="학생 / 강사"
                className="toTheNextPage"
                onClick={(e) => {
                    window.location.href = 'http://localhost:3000/findins'
                }}
            ></input>

            <input
                type="button"
                value="매니저"
                className="toTheNextPage"
                onClick={(e) => {
                    window.location.href = 'http://localhost:3000/checkins'
                }}
            ></input>

        </form>
    )
}

export default SelectType;