import axios from "axios";
import { useEffect, useState } from "react";
import './/css/ManagerPage.css';
import { GivePersTeacher, DeleteTeacher, GivePersStudent, DeleteStudent } from "./service/ManagerPageService";

function ManagerPage() {
    const className = localStorage.getItem("className");
    const loginUserPers = localStorage.getItem("userPers");

    const [inputDataTeacher, setInputDataTeacher] = useState([{
        id: '',
        userName: '',
        userEmail: '',
        userAddress: '',
        userUniv: '',
        userMajor: '',
        userPers: ''
    }])

    const [inputDataStudent, setInputDataStudent] = useState([{
        id: '',
        userName: '',
        userEmail: '',
        userAddress: '',
        userUniv: '',
        userMajor: '',
        userPers: ''
    }])

    const [lastIdxTeacher, setLastIdxTeacher] = useState(0);
    const [lastIdxStudent, setLastIdxStudent] = useState(0);

    useEffect(async () => {
        try {
            await axios({
                url: 'http://44.194.225.221:8080/getClassMember',
                method: 'post',
                params: {
                    className: className
                }
            }).then((res) => {
                console.log(res.data);

                const teacher = res.data.teacher.map((rowData) => (
                    setLastIdxTeacher(lastIdxTeacher + 1),
                    {
                        id: rowData.id + 1,
                        userName: rowData.userName,
                        userEmail: rowData.userEmail,
                        userAddress: '-',
                        userUniv: '-',
                        userMajor: '-',
                        userPers: rowData.userPers
                    }
                ))
                console.log(teacher);
                setInputDataTeacher(inputDataTeacher.concat(teacher));

                const student = res.data.student.map((rowData) => (
                    setLastIdxStudent(lastIdxStudent + 1),
                    {
                        id: rowData.id + 1,
                        userName: rowData.userName,
                        userEmail: rowData.userEmail,
                        userAddress: rowData.userAddress,
                        userUniv: rowData.userUniv,
                        userMajor: rowData.userMajor,
                        userPers: rowData.userPers
                    }
                ))
                console.log(student);
                setInputDataStudent(inputDataStudent.concat(student));
            }).catch(function (error) {
                console.log(error.response.data);
            })
        } catch (e) {
            console.error(e.message);
        }
    }, [])

    if (loginUserPers === "3") {
        return (
            <table className="ManagerPageTable">
                <tbody>
                    <tr>
                        <th><h5>직책</h5></th>
                        <th><h5>이름</h5></th>
                        <th><h5>주소</h5></th>
                        <th><h5>학교</h5></th>
                        <th><h5>전공</h5></th>
                        <th><h5>승인</h5></th>
                        <th><h5>탈퇴</h5></th>
                    </tr>
                    {lastIdxTeacher !== 0 ?
                        inputDataTeacher.map(rowData => (
                            rowData.id !== '' &&
                            <tr key= {rowData.id}>
                                <th><h5>강사</h5></th>
                                <td value={rowData.userName}>
                                    <h5>{rowData.userName}</h5>
                                </td>
                                
                                <td value={rowData.userAddress}>
                                    <h5>{rowData.userAddress}</h5>
                                </td>

                                <td value={rowData.userUniv}>
                                    <h5>{rowData.userUniv}</h5>
                                </td>

                                <td value={rowData.userMajor}>
                                    <h5>{rowData.userMajor}</h5>
                                </td>

                                {
                                    rowData.userPers === "0" ?
                                        <td value={rowData.id}>
                                            <button
                                                id={rowData.userEmail}
                                                className="decideButton"
                                                value="승인"
                                                onClick={(e) => GivePersTeacher(rowData.userEmail)
                                                }>승 인</button>
                                        </td>
                                        : <td value={rowData.userPers}>
                                            <button
                                                className="decideButton"
                                                value="비승인"
                                                disabled>승 인</button>
                                        </td>
                                }
                                <td>
                                    <button
                                        className="decideButton"
                                        value="탈퇴"
                                        onClick={(e) => DeleteTeacher(rowData.userEmail)}
                                    >탈퇴</button>
                                </td>
                            </tr>
                        )) :
                        <tr>
                            <td>가입한 인원이 없습니다.</td>
                        </tr>
                    }
                    {lastIdxStudent !== 0 ?
                        inputDataStudent.map(rowData => (
                            rowData.id !== '' &&
                            <tr key= {rowData.id}>
                                <th><h5>학생</h5></th>

                                <td value={rowData.userName}>
                                    <h5>{rowData.userName}</h5>
                                </td>

                                <td value={rowData.userAddress}>
                                    <h5>{rowData.userAddress}</h5>
                                </td>

                                <td value={rowData.userUniv}>
                                    <h5>{rowData.userUniv}</h5>
                                </td>

                                <td value={rowData.userMajor}>
                                    <h5>{rowData.userMajor}</h5>
                                </td>
                                {
                                    rowData.userPers === "0" ?
                                        <td value={rowData.id}>
                                            <button
                                                id={rowData.userEmail}
                                                className="decideButton"
                                                value="승인"
                                                onClick={(e) => GivePersStudent(rowData.userEmail)}
                                            >승 인</button>
                                        </td>
                                        : <td value={rowData.userPers}>
                                            <button
                                                className="decideButton"
                                                value="비승인"
                                                disabled
                                            >승 인</button>
                                        </td>
                                }

                                <td>
                                    <button
                                        className="decideButton"
                                        value="탈퇴"
                                        onClick={(e) => DeleteStudent(rowData.userEmail)}
                                    >탈퇴</button>
                                </td>
                            </tr>
                        )) :
                        <tr>
                            <td>가입한 인원이 없습니다.</td>
                        </tr>
                    }
                </tbody>
            </table>
        )
    } else {
        return (
            <div>
                접근 권한이 없습니다.
            </div>
        )
    }
}

export default ManagerPage;