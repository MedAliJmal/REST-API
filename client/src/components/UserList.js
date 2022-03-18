import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";
import { Accordion, Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = () => {
  const { loading, users } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <Accordion defaultActiveKey="0" className="cont-card">
            {users.map((el) => (
              <UserCard user={el} key={el._id} />
            ))}
          </Accordion>
        </>
      )}
    </div>
  );
};

export default UserList;
