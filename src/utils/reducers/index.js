import {combineReducers} from "redux"
import todo from "./todo"
var allReducer = combineReducers({
    todo,
})

export default allReducer;