import * as CONSTANT from "../constant";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Check social media",
      checkedIn: false,
      date: new Date()
    },
    {
      id: 2,
      title: "Schedule post",
      checkedIn: false,
      date: new Date()
    },
    {
      id: 3,
      title: "Follow up with Jessica Alley",
      checkedIn: true,
      date: new Date()
    }],
};
export default function todo(state = initialState, action) {
  switch (action.type) {
    case CONSTANT.ADD_TODO:
      return {
        ...state,
        todos:  action.payload,
      };
    case CONSTANT.SAVE_EDITED_TODO:
    return {
      ...state,
      todos:  [...action.payload],
    };
    case CONSTANT.DELETE_TODO:
      return {
        ...state,
        todos: [...action.payload],
      };
    case CONSTANT.CHECK_IN_TODO:
      return {
        ...state,
        todos: [...action.payload],
      };
    default:
      return state;
  }
}
