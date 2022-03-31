import React, { Component } from 'react'
import BoardService from '../../service/BoardService';


class CreateBoard extends Component {
    constructor(props) {
        super(props);

        // form 에서 사용 될 파라미터 변수 정의
        this.state = {
            title: '',
            content: '',
        }

        // save 버튼 클릭 -> API request 함수 바인드
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentHandler = this.changeContentHandler.bind(this);

        this.createBoard = this.createBoard.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    // this.state 에 정의 된 변수에 setState 로 값 정의
    changeTitleHandler = (event) => {
        this.setState({ title: event.target.value });
    }

    changeContentHandler = (event) => {
        this.setState({ content: event.target.value });
    }

    // save 버튼클릭 -> API request 함수 선언
    createBoard = (event) => {
        event.preventDefault();
        let board = {
            title: this.state.title,
            content: this.state.content,
        };
        console.log("board => "+ JSON.stringify(board));
        // BoardService.createBoard(board);
        BoardService.createBoard(board)
    }

    // cancel 버튼클릭 -> 글목록 페이지로 이동 
    cancel = () => {
            console.log('this is cancel:', this);
            window.location.href = "/board";
        }

    render() {

        return (
            <>
            <form>

          
                <div>
                    제목
                    <input type='text' placeholder="title" name="title"
                    value={this.state.title} onChange={this.changeTitleHandler} />
                </div>

                <div>
                    내용
                    <textarea placeholder='content' name="content" value={this.state.content} onChange={this.changeContentHandler}/>
                </div>
                </form>
                <button className="btn btn-success" onClick={this.createBoard}>Save</button>
            <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>
            </>

        )
    }
}

export default CreateBoard;





// class CreateBoard extends Component {
//     constructor(props) {
//         super(props);


//         this.state = {
//             category: '',
//             title: '',
//             content: '',
//             userId: ''
//         }


//         this.changeTypeHandler = this.changeTypeHandler.bind(this);
//         this.changeTitleHandler = this.changeTitleHandler.bind(this);
//         this.changeContentsHandler = this.changeContentsHandler.bind(this);
//         this.changeMemberNoHandler = this.changeMemberNoHandler.bind(this);
//         this.createBoard = this.createBoard.bind(this);
//         this.cancel = this.cancel.bind(this);
//     }


//     changeTypeHandler = (event) => {
//         this.setState({category: event.target.value});
//     }

//     changeTitleHandler = (event) => {
//         this.setState({title: event.target.value});
//     }

//     changeContentsHandler = (event) => {
//         this.setState({content: event.target.value});
//     }

//     changeMemberNoHandler = (event) => {
//         this.setState({userId: event.target.value});
// }


// createBoard = (event) => {
//     event.preventDefault();
//     let board = {
//         category: this.state.category,
//         title: this.state.title,
//         content: this.state.content,
//         userId: this.state.userId
//     };
//     console.log("board => " + JSON.stringify(board));

//     BoardService.createBoard(board).then(res => {
//         window.location.href = "/board"
//     });
// }


// cancel = () => {
//     console.log('this is cancel:', this);
//     window.location.href = "/board";
// }


// render() {
//     return (
//         <div>
//             <div className="container">
//                 <div className="row">
//                     <div className="card col-md-6 offset-md-3 offset-md-3">
//                         <h3 className="text-center">새글을 작성해주세요</h3>
//                         <div className="card-body">
//                             <form>
//                                 <div className="form-group">
//                                     <label> Category </label>
//                                     <select placeholder="category" name="category" className="form-control"
//                                         value={this.state.category} onChange={this.changeTypeHandler}>
//                                         <option value="1">강의자료</option>
//                                         <option value="2">공지사항</option>
//                                     </select>
//                                 </div>
//                                 <div className="form-group">
//                                     <label> Title </label>
//                                     <input type="text" placeholder="title" name="title" className="form-control"
//                                         value={this.state.title} onChange={this.changeTitleHandler} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label> Content  </label>
//                                     <textarea placeholder="content" name="content" className="form-control"
//                                         value={this.state.content} onChange={this.changeContentsHandler} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label> userId  </label>
//                                     <input placeholder="userId" name="userId" className="form-control"
//                                         value={this.state.userId} onChange={this.changeMemberNoHandler} />
//                                 </div>
//                                 <button className="btn btn-success" onClick={this.createBoard}>Save</button>
//                                 <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>
//                             </form>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// }


// export default CreateBoard;

