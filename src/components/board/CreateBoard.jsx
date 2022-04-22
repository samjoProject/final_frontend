import { getByTitle } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { useParams } from 'react-router-dom';
import BoardService from '../../service/BoardService';
import '../../App.css';
import AWS from 'aws-sdk';
import { Row, Col, Button, Input, Alert } from 'reactstrap';
import './board.css';

function CreateBoard() {


    const { id } = useParams();
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [fileId, setFileId] = useState('');
    const userId = localStorage.getItem("userEmail");
    //파일선택
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    // const [imgBase64, setImgBase64] = useState([]); // 파일 base64
    // const [imgFile, setImgFile] = useState(null);	//파일	

    // S3버킷정보
    const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY_ID;
    const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
    const REGION = "us-east-1";
    const S3_BUCKET = 'nanuri-files';


    AWS.config.update({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY
    });

    const myBucket = new AWS.S3({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY,
        params: { Bucket: S3_BUCKET },
        region: REGION,
    });

    // 파일선택
    const handleFileInput = (e) => {
        const file = e.target.files[0];
        const fileName = Math.random().toString(36).substring(2,11) +"_" + file.name;
        console.log(fileName)

        setProgress(0);
        setSelectedFile(file);
        setFileId(fileName);
        
    }

    const changeCategoryHandler = (e) => {
        setCategory(e.currentTarget.value);
    }

    const changeTitleHandler = (e) => {
        setTitle(e.currentTarget.value);
    }

    const changeContentHandler = (e) => {
        setContent(e.currentTarget.value);
    }

    const uploadFile = (file) => {
        console.log(file.name)
        const params = {

            Body: file,
            Bucket: S3_BUCKET,
            Key: "upload/" + fileId
            
            
        };
        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                    setSelectedFile(null);
                }, 3000)
            })
            .send((err) => {
                if (err) console.log(err)
            })
        }


    // 저장버튼 - 새로운버전
    const onClickPost = (e) => {
        e.preventDefault();
        let board = {
            category: category,
            title: title,
            content: content,
            userId: userId,
            fileId: fileId,
            counts: Number(0)

        };

        
        

        console.log("board => " + JSON.stringify(board));
        if (id === 'create') {
            if (window.confirm("글작성을 완료하시겠습니까?"))
            <uploadFile />
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
                    file: board.fileId
                    // userId: board.userId
                })
                console.log("boards", boards)
            })
        }
    }, []);

    // 파일 선택 버튼 
    // const changeFileHandler = (event) => {
    //     console.log(event.target.files)
    //     setImgFile(event.target.files);
    //     //fd.append("file", event.target.files)
    //     setImgBase64([]);
    //     for (var i = 0; i < event.target.files.length; i++) {
    //         if (event.target.files[i]) {
    //             let reader = new FileReader();
    //             reader.readAsDataURL(event.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
    //             // 파일 상태 업데이트
    //             reader.onloadend = () => {
    //                 // 2. 읽기가 완료되면 아래코드가 실행됩니다.
    //                 const base64 = reader.result;
    //                 console.log(base64)
    //                 if (base64) {
    //                     //  images.push(base64.toString())
    //                     var base64Sub = base64.toString()

    //                     setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
    //                     //  setImgBase64(newObj);
    //                     // 파일 base64 상태 업데이트
    //                     //  console.log(images)
    //                 }
    //             }
    //         }
    //     }




    return (
        <div>
            <h2 className="create-board">게시글 작성</h2>

            <form>
            <div className="card-body">
            <div class="form-group">
                <label> Category </label>
                <select placeholder="category" name="category" className="form-select"
                    value={category} onChange={changeCategoryHandler} >

                    <option value="">카테고리를 선택해주세요.</option>
                    <option value="강의자료">강의자료</option>
                    <option value="공지사항">공지사항</option>
                </select>
                </div>
                
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
                            value={userId} readOnly />
                    </div>
                    {/* <input type="file" id="file" onChange={changeFileHandler} multiple="multiple" /> */}
                    <Input color="primary" type="file" onChange={handleFileInput} />
                    {selectedFile ? (
                        <Button color="primary" onClick={() => uploadFile(selectedFile)}
                        > 파일업로드 </Button>
                    ) : null}
                </div>
            </form>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
            <button className="btn btn-primary" onClick={onClickPost}>등록하기</button>
            {/* <button className="btn btn-success" onClick={getTitle}>Save</button> */}
            <button className="btn btn-danger" onClick={onClickCancel}>작성취소</button>
            </div>
        </div >

    )
}

export default CreateBoard;