import React from "react";
import "materialize-css";
import Navbar from "../../components/navbar";
import { Autocomplete, Checkbox, Col, Icon, Row } from "react-materialize";
import { useDispatch, useSelector } from "react-redux";
import { checkIn, deleteTodo, saveEditedTodo } from "../../utils/actions/todo";
import classnames from "classnames"
import $ from "jquery"
const Checklists = () => {
  const dispatch = useDispatch();
  const lists = useSelector((s) => s.todo.todos);
  const check = (todo) => {
    dispatch(checkIn(todo, lists));
  };
  const remove = (todo) => {
    dispatch(deleteTodo(todo, lists));
  };
  const save = (e, todo) => {
    var editedList =  lists;
    editedList.map((item, key) => {
        if (item.id == todo.id) {
          todo.title = $(e.target).text();
        }
      })
    dispatch(saveEditedTodo(editedList));
  }
  return (
    <>
      <div className="x-checklists x-container">
        {lists.map((item, i) => (
          <Row key={i} className="x-item" >
            <Col className="" s={1}>
              <Checkbox
                onChange={()=>check(item)}
                key={item.id}
                filledIn
                id={item.id}
                checked={item.checkedIn}
                value={item.title}
              />
            </Col>
            <Col className="" s={10}>
             {item.checkedIn ?  <div  className="x-title"><s>{item.title}</s></div>
             : <div contentEditable={true} onBlur={(e)=>save(e, item)} className={classnames("x-title")}>{item.title}</div>}
            </Col>
            <Col className="" s={1}>
              <a href="#" onClick={() => remove(item)}>
                <img src="../../images/trash.svg" />
              </a>
            </Col>
          </Row>
        ))}
      </div>
    </>
  );
};

export default Checklists;
