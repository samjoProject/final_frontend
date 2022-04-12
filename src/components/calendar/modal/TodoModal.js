import React from 'react';
import { Modal, Button } from "react-bootstrap";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const TodoModal = (props) => {

  // let dateInfo = React.useRef();

  // const modal_scheduleInfo = useSelector(state => state.schedule.modal_scheduleInfo);

  // useEffect(() => {
  //   setContents(modal_scheduleInfo.contents);
  //   dateInfo.current.value = `${modal_scheduleInfo.date_info}T${modal_scheduleInfo.time_info}`;
  // }, [modal_scheduleInfo])
  

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ** 일정 등록창 **
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>일정 추가</h4>
        <span>
          <AddTodoForm />
          {/* <TodoList /> */}
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TodoModal;
