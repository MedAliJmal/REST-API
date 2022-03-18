import React from "react";
import { Accordion, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../redux/actions";
import EditUser from "./EditUser";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <Accordion.Item eventKey={`${user._id}`} className="par-card">
        <Accordion.Header>
          <h6>{user.fullName}</h6>
        </Accordion.Header>
        <Accordion.Body className="card-body">
          <div className="info-cont">
            <h5>Email : {user.email}</h5>
            <h5>Phone : {user.phone}</h5>
          </div>
          <div className="btns-cont">
            <EditUser user={user} />
            <Button
              variant="outline-danger"
              className="edit-btn"
              onClick={() => {
                dispatch(deleteUser(user._id));
                dispatch(getUsers());
              }}
            >
              Delete
            </Button>

            <Link to={`/Get/${user._id}`}>
              {" "}
              <Button variant="outline-dark" className="edit-btn">
                More info
              </Button>{" "}
            </Link>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default UserCard;
