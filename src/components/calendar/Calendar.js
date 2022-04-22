import React, { useState, useEffect, useCallback } from "react";
import FullCalendar, {
  WindowScrollController,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // for selectable
import { formatDate } from "@fullcalendar/core";
import axios from "axios";
import styled from "styled-components";
import TodoModal from "./modal/TodoModal";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodoAsync } from "../../redux/todoSlice";


const Calendar = ({ id }) => {
  const userPers = localStorage.getItem("userPers");
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
 
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios({
      url: "http://44.194.225.221:8080/api/calendar",
      method: "get",
    })
      .then((res) => {
        setTodoList(res.data);
        console.log("1. useeffect: ", res.data)
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);


  // 일정 타이틀 캘린더 해당 일자에 띄우는 함수
  const schedule_list = todoList.map((val) => {
    
    // console.log("schedule_list:", val.id);
    return {
      id: val.id,
      title: val.title,
      date: val.date,
    };
  });

  // console.log("schedule_list", schedule_list[0]);
 
  const handleDeleteClick = (e) => {
    // console.log(schedule_list.map((id) => ( id={id} )))
    const deleteYn = window.confirm("일정을 삭제하시겠습니까?");
    if (deleteYn) {
      dispatch(deleteTodoAsync(
        e.event.id
        ));
      // console.log(e.event.id);
    }
    window.location="/calendar"
  };

  //날짜를 문자열로
  let str = formatDate("2022-03-16", {
    month: "long",
    year: "numeric",
    day: "numeric",
    timeZoneName: "long",
    timeZone: "KST",
    locale: "ko",
  });

  if (userPers == "0") {
    return (<div>접근 권한이 없습니다. 
      관계자에게 문의해주세요.</div>)
  } else {

    return (
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
            // eventClick={
            //  console.log("이벤트 클릭")
            // } // 일정 클릭 이벤트

            events={schedule_list}
            // eventClick={() => handleDeleteClick(schedule_list)} // 일정 클릭 이벤트
            eventClick={handleDeleteClick} // 일정 클릭 이벤트
          //   events={[
          //   { title: "event1", date: "2022-03-12" },
          //   { title: "event2", date: "2022-03-14" },
          // ]}
          />
          <br></br>
          {userPers == "1" ? (
            <></>
          ) : (





            <Button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalScrollable"
              onClick={() => setModalOpen(true)}
            >
              + 일정 등록
            </Button>
          )}
          <TodoModal show={modalOpen} onHide={() => setModalOpen(false)} />
        </Container>
      </div>
    );
  }
};

const Container = styled.div`
  height: 90%;
  width: 90%;
  a {
    cursor: pointer;
  }

  /*요일*/
  .fc-col-header-cell-cushion {
    color: #000;
  }
  .fc-col-header-cell-cushion:hover {
    text-decoration: none;
    color: #000;
  }
  /*일자*/
  .fc-daygrid-day-number {
    color: #000;
    font-size: 1em;
  }

  /*종일제목*/
  .fc-event-title.fc-sticky {
  }
  /*more버튼*/
  .fc-daygrid-more-link.fc-more-link {
    color: #000;
  }

  .fc-button-active {
    border-color: #ffc107 !important;
    background-color: #ffc107 !important;
    color: #000 !important;
    font-weight: bold !important;
  }
`;

//모달 열렸을때 #root 엘리먼트 숨겨줘야 하기 때문
// Modal.setAppElement('#root')

export default Calendar;