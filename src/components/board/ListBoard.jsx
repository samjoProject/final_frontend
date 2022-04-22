import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";
import BoardService from "../../service/BoardService";
import "./board.css";

function ListBoard() {
  const userPers = localStorage.getItem("userPers");
  // const pageNum = 1;
  // const {paging, setPaging} = {};
  const [boards, setBoards] = useState([]);

  // this.createBoard = this.createBoard.bind(this); // createBoard함수 바인딩

  // 글목록
  useEffect(() => {
    BoardService.getBoards().then((res) => {
      console.log("1", boards);
      // pageNum(res.data.pagingData.currentPageNum),
      // setPaging(res.data.pagingData),
      setBoards(res.data);
      console.log(res.data);
    });
  }, []);

  // 글쓰기 버튼 클릭
  const createBoard = () => {
    window.location.href = "/create-board/create";
  };

  // 글 선택 -> 상세보기
  const readBoard = (id) => {
    console.log("this is:", id);
    window.location.href = `/read-board/${id}`;
  };

  // const listBoard = (pageNum) => {
  //   console.log('listboard pageNum:', pageNum);
  //   BoardService.getBoards(pageNum).then((res) => {
  //     console.log(res.data);
  //       pageNum(res.data.pagingData.currentPageNum),
  //       setPaging(res.data.pagingData),
  //       setBoards(res.data);
  //   })
  // }

  // const viewPage = () => {
  //   const pageNums = [];

  //   for (let i = paging.startNum; i <= paging.endNum; i++ ) {
  //     pageNums.push(i);
  //   }

  //   return (pageNums.map((page) => {
  //     <li className="page-item" key={page.toString()} >
  //           <a className="page-link" onClick = {() => listBoard(page)}>{page}</a>
  //     </li>
  //   }))
  // }

  // const isPagingPrev = () => {
  //   if ( paging.prev ) {
  //     return (
  //       <li className="page-item">
  //           <a className="page-link" onClick = {() => listBoard( (paging.currentPageNum - 1) )} tabindex="-1">Previous</a>
  //       </li>
  //     )
  //   }
  // }

  if (userPers == "0") {
    return <div>접근 권한이 없습니다. 관계자에게 문의해주세요.</div>;
  } else {
    return (
      <div>
        <h2 className="text-center">자료실</h2>

        <br></br>
        <table class="table table-hover">
          {/* <table className="table table-striped table-bordered"> */}

          <thead>
            <tr>
              <th>no</th>
              <th>카테고리 </th>
              <th>타이틀 </th>
              <th>작성자 </th>
              <th>작성일 </th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody class="ListBoard-tbody">
            {boards.map((board) => (
              <tr key={board.id}>
                <td> {board.id} </td>
                <td> {board.category} </td>
                <td>
                  {" "}
                  <a onClick={() => readBoard(board.id)}>{board.title} </a>
                </td>
                <td> {board.userId} </td>
                <td> {board.regDate} </td>
                <td> {board.counts} </td>
              </tr>
            ))}
          </tbody>
        </table>
        {userPers == "1" ? (
          <></>
        ) : (
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              type="button"
              class="btn btn-primary btn"
              onClick={createBoard}
            >
              {" "}
              ✏️ 글쓰기
            </button>
          </div>
        )}

        <div class="center">
          <div class="pagination">
            <a href="#">&laquo;</a>
            <a href="#" class="active">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            {/* <a href="#">5</a>
            <a href="#">6</a> */}
            <a href="#">&raquo;</a>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* function ListBoard() {
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
          "http://44.194.225.221:8080/api/board",
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
} */
}

export default ListBoard;
