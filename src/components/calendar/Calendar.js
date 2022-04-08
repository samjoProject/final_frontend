import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // for selectable
import { formatDate } from "@fullcalendar/core";
import axios from "axios";
import styled from "styled-components";
import TodoModal from "./modal/TodoModal";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const Calendar = () => {

  const [todoList, setTodoList] = useState([]);
  useEffect( () => {
    axios({
      url: "http://localhost:8080/api/calendar",
      method: "get",

    }).then ((res)=> {
      setTodoList(res.data);
    }).catch((error)=> {
      console.log(error)
    })
  },[]);

  const schedule_list = todoList.map((val) => {
    return {
      title : val.title,
      date : val.date
    };
  })

  const [modalOpen, setModalOpen] = useState(false);
  let todos_list = useSelector((state) => state.todos.list);
  //날짜를 문자열로
  let str = formatDate("2022-03-16", {
    month: "long",
    year: "numeric",
    day: "numeric",
    timeZoneName: "long",
    timeZone: "KST",
    locale: "ko",
  });

  //   const [modal, setModal] = useState(false);

  return (
    // <div className="FullCalendar">
    <div>
      <Container>
        <FullCalendar
          headerToolbar={{
            left: "today",
            center: "title",
            right: "prev,next",
          }}
          plugins={[interactionPlugin, dayGridPlugin]}
          defaultView="dayGridMonth"
          // dateClick={this.handleDateClick}
          weekends={true}
          // navLinks={true} // 달력 날짜 클릭할 수 있게 해줌, 기본값 falase라 설정해줘야함. 날짜 클릭시 그날로 이동
          // droppable={true}
          selectable={true} // 달력에서 드래그로 날짜 선택
          selectMirror={true}
          // editable={true} // 달력 내에서 일정 옮기고 수정

          locale="ko" //  한국어 설정
          // dateClick={handleDateClick} // 요일클릭 이벤트
          // dateClick={function () {
          //   alert("요일 클릭");
          // }} // 요일클릭 이벤트
          // eventClick={handleEventClick} // 일정 클릭 이벤트
          // eventClick={
          //   (arg) => updateModal(arg)
          // } // 일정 클릭 이벤트
          
            events={schedule_list}        
          //   events={[
          //   { title: "event1", date: "2022-03-12" },
          //   { title: "event2", date: "2022-03-14" },
          // ]}        
          
        />

        <Button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalScrollable"
          onClick={() => setModalOpen(true)}
        >
          + 일정 등록
        </Button>
        <TodoModal show={modalOpen} onHide={() => setModalOpen(false)} />
      </Container>
    </div>
  );
};

const Container = styled.div`
  height: 90%;
  width: 90%;
  a {
    cursor: pointer;
  }

  .fc-col-header-cell {
    background-color: #757984;
    color: #fff;
    &.fc-day-sat {
      background-color: #2f74b5;
    }
    &.fc-day-sun {
      background-color: #ca5973;
    }
  }
`;

//모달 열렸을때 #root 엘리먼트 숨겨줘야 하기 때문
// Modal.setAppElement('#root')

export default Calendar;
