import { ActionTypes } from "../ActionTypes/ActionTypes";

const initialState = {
  items: [],
  item: [],
  updateId: [],
  updatePost: [],
  deletePost: [],
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case ActionTypes.CREATE_POST:
      return {
        ...state,
        item: action.payload,
      };
    case ActionTypes.GET_POST:
      return {
        ...state,
        updateId: action.payload,
      };
    case ActionTypes.EDIT_POST:
      return {
        ...state,
        updatePost: action.payload,
      };
    case ActionTypes.DELETE_POST:
      return {
        ...state,
        deletePost: action.payload,
      };

    default:
      return state;
  }
};
export default PostReducer;
