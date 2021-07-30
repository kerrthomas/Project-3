import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  deleteTask(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  addTask(e) {
    if (this._inputElement.value !== "") {
      var newTask = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newTask)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }


render() {
  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={this.addTask}>
          <input ref={(a) => this._inputElement = a} placeholder="Enter a task to add">
          </input>
          <button type="submit">Add</button>
        </form>
      </div>
      <TodoItems entries={this.state.items} delete={this.deleteTask} />
    </div>
  );
}
}
export default TodoList;