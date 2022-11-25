import Axios from "../../Axios";
import { ActionTypes } from "../ActionTypes/ActionTypes";

export const FetchPosts = () => {
  return async (dispatch) => {
    let fetchPosts = await Axios.get("/posts");
    dispatch({
      type: ActionTypes.FETCH_POSTS,
      payload: fetchPosts.data,
    });
  };
};

export const CreatePost = (state) => {
  return async (dispatch) => {
    let createPosts = await Axios.post("/posts", state);
    dispatch({
      type: ActionTypes.CREATE_POST,
      payload: createPosts,
    });
  };
};

export const GetPosts = (id) => {
  return async (dispatch) => {
    let getPost = await Axios.get(`/posts/${id}`);
    dispatch({
      type: ActionTypes.GET_POST,
      payload: getPost.data,
    });
  };
};

export const EditPost = (id, updateState) => {
  return async (dispatch) => {
    let editPosts = await Axios.put(`/posts/${id}`, updateState);
    dispatch({
      type: ActionTypes.EDIT_POST,
      payload: editPosts,
    });
  };
};

export const DeletePost = (id) => {
  return async (dispatch) => {
    let deletePosts = await Axios.delete(`/posts/${id}`);
    dispatch({
      type: ActionTypes.DELETE_POST,
      payload: deletePosts.data,
    });
  };
};
