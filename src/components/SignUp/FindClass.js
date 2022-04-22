//css 완
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import './css/FindClass.css';

function FindClass() {
    const [inputData, setInputData] = useState([{
        id: '',
        instituteName: '',
        className: ''
    }])

    const [lastIdx, setLastIdx] = useState(0)

    useEffect(async () => {
        try {
            const res = await axios.get('http://44.194.225.221:8080/findclass')
            console.log(res.data);
            const _inputData = await res.data.map((rowData) => (
                setLastIdx(lastIdx + 1),
                {
                    id: rowData.id,
                    instituteName: rowData.instituteName,
                    className: rowData.className,
                }
            ))
            console.log(_inputData);
            setInputData(inputData.concat(_inputData))
        } catch (e) {
            console.error(e.message)
        }
    }, [])

    return (
        <div className="listTableScreen">
            <header className="listTableHead">
                <h1>수강 과정</h1>
            </header>

            <table className='listTable'>
                <tbody>
                    <tr>
                        <td>기관명</td>
                        <td colSpan='2'>교육 과정</td>
                    </tr>
                    {lastIdx !== 0 ?
                        inputData.map(rowData => (
                            // 최초 선언한 기본값은 나타내지 않음
                            rowData.id !== '' &&
                            <tr>
                                <th value={rowData.instituteName}>
                                    <h5>{rowData.instituteName}</h5>
                                </th>
                                <td value={rowData.className}>
                                    <h5>{rowData.className}</h5>
                                </td>
                                <td>
                                    <Button variant="contained" value="선 택"  className='listTableButton' onClick={(e) => {
                                        e.preventDefault();
                                        localStorage.setItem("IN", rowData.instituteName);
                                        localStorage.setItem("CN", rowData.className);
                                        console.log(localStorage.getItem("IN"));
                                        console.log(localStorage.getItem("CN"));
                                        window.alert("선택되었습니다.")
                                        window.close();
                                    }}>선 택</Button>
                                </td>
                            </tr>
                        )) :
                        <tr>
                            <td className='listTableIndex'></td>
                            <td className='listTableTitle noData'>개설된 강좌가 없습니다.</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FindClass;