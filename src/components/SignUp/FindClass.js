import axios from "axios";
import React, { useEffect, useState } from "react";

function FindClass() {
    const [inputData, setInputData] = useState([{
        id: '',
        instituteName: '',
        className: ''
    }])

    const [lastIdx, setLastIdx] = useState(0)
    
    useEffect(async () => {
        try {
            const res = await axios.get('http://localhost:8080/findclass')
            const _inputData = await res.data.map((rowData) => (
                setLastIdx(lastIdx + 1),
                {
                    id: rowData.id,
                    instituteName: rowData.instituteName,
                    className: rowData.className,
                }
            ))
            setInputData(inputData.concat(_inputData))
        } catch (e) {
            console.error(e.message)
        }
    }, [])

    return (
        <div>
            <h2>게시판</h2>
            <div>
                <table className='listTable'>
                    <tbody>
                        <tr>
                            <td className='listTableIN th'>기관명</td>
                            <td className='listTableCN th'>교육 과정</td>
                        </tr>
                        {lastIdx !== 0 ?
                            inputData.map(rowData => (
                                // 최초 선언한 기본값은 나타내지 않음
                                rowData.id !== '' &&
                                <tr>
                                    <td className='listTableIN' value={rowData.instituteName}>
                                        <h5>{rowData.instituteName}</h5>
                                    </td>
                                    <td className='listTableCN' value={rowData.className}>
                                        <h5>{rowData.className}</h5>
                                    </td>
                                    <td>
                                        <input type="button" value="선 택" onClick={(e) => {
                                            e.preventDefault();
                                            localStorage.setItem("IN", rowData.instituteName);
                                            localStorage.setItem("CN", rowData.className);
                                            console.log(localStorage.getItem("IN"));
                                            console.log(localStorage.getItem("CN"));
                                            window.alert("선택되었습니다.")
                                            window.close();
                                        }} />
                                    </td>
                                </tr>
                            )) :
                            <tr>
                                <td className='listTableIndex'></td>
                                <td className='listTableTitle noData'>작성된 글이 없습니다.</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FindClass;