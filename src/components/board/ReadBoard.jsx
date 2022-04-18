import React, { Component, useEffect, useState } from 'react'
import { withRouter, useParams, Link } from 'react-router-dom';
import BoardService from '../../service/BoardService';


function ReadBoard() {


    const { id } = useParams();
    const { counts } = useParams();
    const [data, setData] = useState('');
    console.log('1. useParams => ', id);

    // useEffect(() => {
    //     console.log('2. useEfect => ', { id })
    //     axios({
    //         method: "GET",
    //         url: 'http://localhost:8080/api/post' + '/' + id,
    //         // url: "http://localhost:8080/api/post/1"
    //     }).then((res) => {
    //         setData(res.data);
    //         console.log('3. res => ',res);
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }, [])


    // 게시글 정보 불러오기
    useEffect(() => {
        console.log('2. useEffect', { id })
        BoardService.getOneBoard(id).then(res => {
            setData(res.data);          
            console.log('4. res', res.data)  
        });
    }, [])

    const fileId = 'https://nanuri-files.s3.amazonaws.com/upload/' + data.fileId 
    const fileName = ""+data.fileId
    console.log('fileName: ', fileName)

    // 글목록 버튼 클릭 -> ListBoard
    const onClickList = () => {
        window.location.href = "/board";
    }

    // 수정하기 버튼 클릭 -> CreateBoard 
    const onClickUpdate = (e) => {
        e.preventDefault();
        console.log('this is Update Button:', id);
        window.location.href = `/create-board/${id}`;
    }

    // 삭제하기 버튼 클릭
    const onClickDelete = () => {
        console.log('this is Delete Button:', id);
        // BoardService.deleteBoard(id)
        if (window.confirm("글을 삭제하시겠습니까?\n삭제된 글은 복구 할 수 없습니다.")) {
            BoardService.deleteBoard(id).then(res => {
                console.log("delete result => " + JSON.stringify(res));
                if (res.status == 200) {
                    window.location.href = "/board";
                } else {
                    alert("글 삭제가 실패했습니다.");
                }
            });
        }
    };



    return (
        <>
            <div className="card col-ld-6 offset-ld-3">
                <h3 className="text-center"> Read Detail</h3>
                <div className="card-body">


                    <div className="row">
                        <label> Category </label> : {data.category} 
                    </div>

                    <br></br>
                    <div className="row">
                        <label> 제목 </label> : {data.title}
                    </div>

                    <br></br>
                    <div className="row">
                        <label> 내용 </label>  <br></br>
                        <textarea value={data.content} readOnly />
                    </div >

                    <br></br>
                    <div className="row">
                        <label> 첨부파일 </label>  
                        
                        <a href={fileId} value="다운로드">
                            {fileName.substring(10)}
                        </a>
                        <br></br>
                    </div >

                    <br></br>
                    <div className="row">
                        <label> 작성자  </label>: {data.userId}
                    </div>
                    <div className="row">
                        {(data.regDate)}
                    </div>
                    <button className="btn btn-primary" onClick={onClickList} style={{ marginLeft: "10px" }}>글 목록</button>
                    <button className="btn btn-primary" onClick={onClickUpdate} style={{ marginLeft: "20px" }}>수정하기</button>
                    <button className="btn btn-danger" onClick={() => onClickDelete()} style={{ marginLeft: "20px" }}>삭제</button>
                </div>
            </div>


        </>
    );
}




export default ReadBoard;