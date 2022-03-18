import {
  ADD_USERS,
  DELETE_USERS,
  EDIT_USERS,
  GET_USER,
  GET_USERS,
} from "./actiontypes";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/Get");
    console.log(res);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (error) {
    alert("get error");
  }
};

export const getUser = (_id) => async (dispatch) => {
  try {
    const res = await axios.get(`/Get/${_id}`);
    console.log(res);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (error) {
    alert("get error");
  }
};

export const addUser = (newUser) => async (dispatch) => {
  try {
    const { data } = await axios.post("/add", newUser);
    dispatch({
      type: ADD_USERS,
      payload: data,
    });
  } catch (error) {
    alert("post error");
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/delete/${id}`);
    dispatch({
      type: DELETE_USERS,
      payload: id,
    });
  } catch (error) {
    alert("delete error");
  }
};

export const editUsers = (editedUser) => async (dispatch) => {
  try {
    const res = await axios.put(`/update/${editedUser.id}`, editedUser);
    dispatch({
      type: EDIT_USERS,
      payload: res.data,
    });
  } catch (error) {
    alert("edit error");
  }
};
