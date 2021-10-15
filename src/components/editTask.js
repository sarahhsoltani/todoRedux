import React, { useState } from "react";
import {  Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MDBBtn,MDBIcon } from "mdb-react-ui-kit";
import { editTask } from "./redux/actions/action";
const EditTasks = ({el}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [todo,SetTodo]=useState("")
  const dispatch = useDispatch();
 
   
// handleChange
const handleChange=(e)=>{
SetTodo(
    e.target.value
)
console.log(`todo`, todo)
}

const editTodo=()=>{
    dispatch(editTask(el.id,todo));
    handleClose()
}
  return (
    <div>
        <MDBBtn size="sm"  className="edit" color='warning' tag='a' onClick={handleShow}>
         <MDBIcon className="pt-2" icon="pen-fancy" />
        </MDBBtn>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Editor</Modal.Title>
        </Modal.Header>
        <Modal.Body><input  type='text' className="form-control"  defaultValue={el.input}  onChange={handleChange} /></Modal.Body>
        <Modal.Footer>
          <MDBBtn color="dark"  onClick={handleClose}>Close</MDBBtn>
            <MDBBtn color="default" onClick={editTodo}>Save changes</MDBBtn>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTasks;