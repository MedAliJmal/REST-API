import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { addUser } from "../redux/actions";
import { useDispatch } from "react-redux";
import UserList from "./UserList";

const AddUser = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      fullName,
      email,
      phone,
    };
    dispatch(addUser(newUser));
    handleClose();
  };
  return (
    <div>
      <>
        <Button variant="outline-dark" onClick={handleShow}>
          Add User
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label>Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              {" "}
              Add User
            </Button>
          </Modal.Footer>
        </Modal>

        <UserList />
      </>
    </div>
  );
};

export default AddUser;
