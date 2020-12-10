import * as CONSTANT from "../constant";

// --- ADD TODO ACTION
export const saveTodo = (todo,alltodo) => dispatch =>{
  dispatch({ type: CONSTANT.ADD_TODO, payload: [todo, ...alltodo] });
}

// --- DELETE TODO ACTION
export const deleteTodo = (todo, alltodo) => (dispatch) => {
  var newList = alltodo.filter((item, key) => item.id != todo.id);
  dispatch({ type: CONSTANT.DELETE_TODO, payload: newList });
};


// --- SAVE TODO ACTION
export const saveEditedTodo = (alltodo) =>({ type: CONSTANT.SAVE_EDITED_TODO, payload:  alltodo });

// --- CHECKIN TODO ACTION
export const checkIn = (todo, alltodo) => (dispatch) => {
  alltodo.map((item, key) => {
    if (item.id == todo.id) {
      todo.checkedIn = item.checkedIn ? false : true;
      todo.date = new Date()
    }
  });
  alltodo.sort((a,b) => new Date(b.date) - new Date(a.date))
  alltodo.sort((a,b) => new Date(a.checkedIn) - new Date(b.checkedIn))
  dispatch({ type: CONSTANT.CHECK_IN_TODO, payload: alltodo });
};
