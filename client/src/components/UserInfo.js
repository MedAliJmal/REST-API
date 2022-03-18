import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../redux/actions";

const UserInfo = () => {
  const { loading, user } = useSelector((state) => state);
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(params.id));
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <h4>{user?.fullName}</h4>
          <h4>{user?.phone}</h4>
          <h4>{user?.email}</h4>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
