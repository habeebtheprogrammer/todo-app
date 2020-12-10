import React, { useState } from "react";
import "materialize-css";
import Navbar from "../../components/navbar";
import { TextInput, Icon } from "react-materialize";
import { useDispatch, useSelector } from "react-redux";
import { saveTodo } from "../../utils/actions/todo";

const Addbox = () => {
  const dispatch = useDispatch();
  const lists = useSelector((s) => s.todo.todos);
  const [title, setText] = useState("");

  const typing = (e) => {
    setText(e.target.value);
  };

  const add = (e) => {
    e.preventDefault();
    if (title.length < 1)  return false;

    var todo = {
        id: Math.floor(Math.random() * 1000) + 1,
        title,
        checkedIn: false,
        date: Date.now()
      }
    dispatch(saveTodo(todo, lists));
    setText("");
  };
  return (
    <>
      <div className="x-addbox x-container">
        <form onSubmit={add}>
          <TextInput
            onChange={typing}
            value={title}
            id="Autocomplete-1"
            placeholder="Add to list..."
            validate={true}
            icon={<Icon>add_outline</Icon>}
          />
        </form>
      </div>
    </>
  );
};

export default Addbox;
