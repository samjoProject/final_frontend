import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAsync } from "../../../redux/todoSlice";

const TodoItem = ({ id, title, date }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
	  dispatch(deleteTodoAsync({ id }))
  }

  return (
    // <li className={`list-group-item ${completed && "list-group-item-success"}`}>
    <li className={`list-group-item`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          {/* <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleCompleteClick}
          ></input> */}
          {title}
        </span>
        <button onClick={handleDeleteClick}
		className="btn btn-danger">삭제</button>
      </div>
    </li>
  );
};

export default TodoItem;
