import { getByTitle } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BoardService from '../../service/BoardService';

function CreateBoard() {


    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [imgBase64, setImgBase64] = useState([]); // 파일 base64
    const [imgFile, setImgFile] = useState(null);	//파일	


    const changeTitleHandler = (e) => {
        setTitle(e.currentTarget.value);
    }

    const changeContentHandler = (e) => {
        setContent(e.currentTarget.value);
    }

    const changeUserIdHandler = (e) => {
        setUserId(e.currentTarget.value);
    }

    // 저장버튼
    // const onClickPost = (e) => {
    //     e.preventDefault();
    //     let board = {
    //         title: title,
    //         content: content,
    //         userId: userId
    //     };
    //     console.log("board => " + JSON.stringify(board));

    //         BoardService.createBoard(board).then(res => {
    //             window.location.href = "/board";  
    //         });

    //     }

    // 저장버튼 - 새로운버전
    const onClickPost = (e) => {
        e.preventDefault();
        let board = {
            title: title,
            content: content,
            userId: userId
        };

        console.log("board => " + JSON.stringify(board));
        if (id === 'create') {
            if (window.confirm("글작성 완료"))
                console.log('새글작성')
            BoardService.createBoard(board).then(res => {
                window.location.href = "/board";
            });
        } else {
            console.log('업데이트')
            if (window.confirm("수정 완료"))
                BoardService.updateBoard(id, board).then(res => {
                    window.location.href = "/board";
                });
        }
    };

    // 
    // const getTitle = () => {
    //     if (id === 'create') {
    //         return <h3 className="text-center">새글을 작성해주세요</h3>
    //     }
    //     else {
    //         return <h3 className="text-center">{id} 글을 수정합니다. </h3>
    //     }
    // };

    // 취소버튼
    const onClickCancel = () => {
        if (window.confirm("글작성 취소"))
            console.log('this is cancel');
        window.location.href = "/board";
    }

    // 수정하기
    useEffect(() => {
        if (id === 'create') {
            return
        } else {
            BoardService.getOneBoard(id).then((res) => {
                let board = res.data;
                console.log("useEffect board => " + JSON.stringify(board));

                let boards = ({
                    title: board.title,
                    content: board.content,
                    // userId: board.userId
                })
                console.log("boards", boards)
            })
        }
    }, []);

    // 파일 선택 버튼 
    const changeFileHandler = (event) => {
        console.log(event.target.files)
        setImgFile(event.target.files);
        //fd.append("file", event.target.files)
        setImgBase64([]);
        for (var i = 0; i < event.target.files.length; i++) {
            if (event.target.files[i]) {
                let reader = new FileReader();
                reader.readAsDataURL(event.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
                // 파일 상태 업데이트
                reader.onloadend = () => {
                    // 2. 읽기가 완료되면 아래코드가 실행됩니다.
                    const base64 = reader.result;
                    console.log(base64)
                    if (base64) {
                        //  images.push(base64.toString())
                        var base64Sub = base64.toString()

                        setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
                        //  setImgBase64(newObj);
                        // 파일 base64 상태 업데이트
                        //  console.log(images)
                    }
                }
            }
        }

    }


    return (
        <div>
            <h2>CreateBoard</h2>

            <form>
                <div className="card-body">
                    <div className="form-group">
                        <label> Title </label>
                        <input type="text" placeholder="title" name="title" className="form-control"
                            value={title} onChange={changeTitleHandler} />
                    </div>
                    <div className="form-group">
                        <label> Content  </label>
                        <textarea placeholder="content" name="content" className="form-control"
                            value={content} onChange={changeContentHandler} />
                    </div>
                    <div className="form-group">
                        <label> userId  </label>
                        <input placeholder="userId" name="userId" className="form-control"
                            value={userId} onChange={changeUserIdHandler} />
                    </div>
                    <input type="file" id="file" onChange={changeFileHandler} multiple="multiple" />
                </div>
            </form>

            <button className="btn btn-success" onClick={onClickPost}>Save</button>
            {/* <button className="btn btn-success" onClick={getTitle}>Save</button> */}
            <button className="btn btn-danger" onClick={onClickCancel}>Cancel</button>
        </div >

    )
}

export default CreateBoard;