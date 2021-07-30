import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./ToDoList";
import "./index.css";

var list = document.querySelector("#container");

ReactDOM.render(
  <div>
    <ToDoList/>
  </div>,
  list
);