import { preventDefault } from "@fullcalendar/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../../../redux/todoSlice";

const AddTodoForm = () => {
  let dateInfo = React.useRef();
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addTodoAsync({
          title: value,
          date: document.getElementById("start").value,
        })
      );
    } // console.log('user entered: ' + value);
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      {/* <label className="sr-only">Name</label> */}
      <input type="date" id="start" />

      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="추가할 일정을 입력하세요"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button
        type="submit"
        className="btn btn-primary mb-2"
        onClick={(e) => {
          window.location = "/calendar";
        }}
      >
        + 일정 추가
      </button>
    </form>
  );
};

export default AddTodoForm;
