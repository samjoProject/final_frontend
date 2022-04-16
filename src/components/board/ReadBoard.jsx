import React, { Component, useEffect, useState } from 'react'
import { withRouter, useParams } from 'react-router-dom';
import BoardService from '../../service/BoardService';
import axios from 'axios';

function ReadBoard() {


    const { id } = useParams();
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
            console.log('4. res', res)
        });
    }, [])

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
            // console.log("useEffect board => "+ JSON.stringify(board));
            // if(window.confirm("삭제할거야?"))
        }
    };






    return (
        <>
            {/* <h2 className="text-center">{id} Boards List</h2> */}
            {/* <div>{data && <textarea rows={7} value={JSON.stringify(data)} />}</div>  */}

            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> Read Detail</h3>
                <div className="card-body">


                    <div className="row">

                        <label> Category </label> : {data.category}
                    </div>
                    <div className="row">

                        <label> Title </label> : {data.title}
                    </div>

                    <div className="row">
                        <label> Contents </label> : <br></br>
                        <textarea value={data.content} readOnly />
                    </div >

                    <div className="row">
                        <label> UserId  </label>: {data.userId}
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



// // class ReadBoard extends Component {
// //     constructor(props) {
// //         super(props)

// //         this.state = {
// //             id: props.match.params.id,
// //             board: {}
// //         }


// // // const Profile = () => {
// // // 	const { username } = useParams();
// // // }
// // // let id = props.match.params.id 에서 
// // // const { id } = useParams(); 로 바꿈 

// //      }


// //     componentDidMount() {
// //         BoardService.getOneBoard(this.state.id).then( res => {
// //             this.setState({board: res.data});
// //         });
// //     }


// //     returnBoardCategory(categoryNo) {
// //         let category = null;
// //         if (categoryNo === 1) {
// //             category = "자유게시판";

// //         } else if (categoryNo === 2 ) {
// //             category = "질문과 답변 게시판";

// //         } else {
// //             category = "타입 미지정";
// //         }

// //         return (
// //             <div className = "row">
// //                 <label> Category : </label> {category}
// //             </div>
// //         )

// //     }

// //     returnDate(cTime) {
// //         return (
// //             <div className = "row">
// //                 <label>생성일 : [ {cTime} ]  </label>
// //             </div>
// //         )
// //     }


// //     goToList() {
// //         window.location.href = "/board";
// //     }

// //     render() {
// //         return (
// //             <div>
// //                 <div className = "card col-md-6 offset-md-3">
// //                     <h3 className ="text-center"> Read Detail</h3>
// //                     <div className = "card-body">

// //                             {this.returnBoardCategory(this.state.board.category)} 
// //                             <div className = "row">      

// //                                 <label> Title </label> : {this.state.board.title}
// //                             </div>

// //                             <div className = "row">
// //                                 <label> Contents </label> : <br></br>
// //                                 <textarea value={this.state.board.content} readOnly/> 
// //                             </div >

// //                             <div className = "row">
// //                                 <label> UserId  </label>: 
// //                                 {this.state.board.userId}
// //                             </div>

// //                             {this.returnDate(this.state.board.createdDate) }

// //                             <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
// //                     </div>
// //                 </div>

// //             </div>
// //         );
// //     }
// // }


export default ReadBoard;