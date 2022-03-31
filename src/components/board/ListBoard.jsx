import React, { Component, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import BoardService from '../../service/BoardService';



class ListBoard extends Component {
  constructor(props) {
    super(props)
    // # 1. 
    this.state = {
      boards: []
    }
    this.createBoard = this.createBoard.bind(this); // createBoard함수 바인딩

  }
  // # 2. 
  componentDidMount() {
    BoardService.getBoards().then((res) => {
      this.setState({ boards: res.data });
    });
  }

  // createBoard() {
  //   this.props.history.push('/create-board/'); // 글작성으로 이동 createBoard 함수정의
  // }
  createBoard = () => {
    console.log('this is:', this);
    window.location.href = "/create-board/"
  }

  

  // # 3.
  render() {
    return (
      <div>
        <h2 className="text-center">Boards List</h2>
        
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>글 번호</th>
                <th>타이틀 </th>
                <th>작성자 </th>
                <th>작성일 </th>

                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.boards.map(
                  board =>
                    <tr key={board.id}>
                      <td> {board.id} </td>
                      <td> {board.title} </td>
                      <td> {board.content} </td>
                      <td> {board.createdDate} </td>
                      {/* <td> {board.counts} </td> */}
                    </tr>
                )
              }
            </tbody>
          </table>
          <div className="row"> 
          <button className="btn btn-primary" onClick={this.createBoard}> 글쓰기 </button> 
        </div>
        </div>
      </div>
    );
  }
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