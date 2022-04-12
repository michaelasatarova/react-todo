import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      active: true
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
        <input
        type="text"
        placeholder="What needs to be done?"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      /* <button className="todo-button"> Add todo </button> */
        )
    : (
        <input
        type="text"
        placeholder="Update your Item?"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      /* <button className="todo-button"> Update </button> */
    )}

    </form>
  );
}

export default TodoForm;
