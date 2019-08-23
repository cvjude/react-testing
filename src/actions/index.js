import axois from "axios";
import { types } from "./types";

export const fetchPosts = () => async dispatch => {
  try {
    const responce = await axois.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    dispatch({
      type: types.GET_POSTS,
      payload: responce.data
    });
  } catch (err) {
    console.log(err);
  }
};
