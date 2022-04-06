import React, { Component, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import BoardService from '../../service/BoardService';



function ListBoard() {
  
   
      const [boards, setBoards] = useState([]);
    
    // this.createBoard = this.createBoard.bind(this); // createBoard함수 바인딩

  
  // 글목록 
  useEffect(() => {
    BoardService.getBoards().then((res) => {
      console.log('1',boards)
      setBoards(res.data);
  })
},[])

  // 글쓰기 버튼 클릭 -> 클쓰기
  // const createBoard = () => {
  //   window.location.href = "/create-board/"
  // }
  const createBoard = () => {
    window.location.href = "/create-board/create"
  }

  // 글 선택 -> 상세보기 
  const readBoard = (id) => {
    console.log('this is:', id);
    window.location.href = `/read-board/${id}`;
  }

  
    return (
      <div>
        <h2 className="text-center">Boards List</h2>
        

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>글 번호</th>
                <th>카테고리 </th>
                <th>타이틀 </th>
                <th>작성자 </th>
                <th>작성일 </th>

                {/* <th>조회수</th> */}
              </tr>
            </thead>
            <tbody>
              {
                boards.map(
                  
                  board =>
                    <tr key={board.id}>
                      <td> {board.id} </td>
                      <td> {board.category} </td>
                      <td> <a onClick={() => readBoard(board.id)}>{board.title} </a></td>
                      <td> {board.userId} </td>
                      <td> {board.regDate} </td>
                      {/* <td> {board.updatedTime} </td> */}
                      {/* <td> {board.likes} </td> */}
                      {/* <td> {board.counts} </td> */}
                      
                    </tr>
                )
              }
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-primary" onClick={createBoard}> 글쓰기 </button>
          </div>
        </div>
      </div>
    );
  }




{/* function ListBoard() {
  const [boards, setBoards] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setBoards(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8080/api/board",
        );
        setBoards(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchBoards();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!boards) return null;
  return (
    <ul>
      {boards.map(board => (
        <li key={board.id}>
          {board.title} ({board.content})
        </li>
      ))}
    </ul>
  );
} */}



export default ListBoard;