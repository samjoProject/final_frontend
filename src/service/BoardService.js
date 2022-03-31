import axios from 'axios';


const BOARD_API_BASE_URL = "http://localhost:8080/api/board";

class BoardService {

  getBoards() {
    return axios.get(BOARD_API_BASE_URL);
  }

  createBoard(board) {
    console.log('-------post-------', board);
    return axios.post("http://localhost:8080/api/post", board).then(res => {
      console.log(res.data)
      window.location.href = "/board";            
  });
    
  }
}


export default new BoardService();