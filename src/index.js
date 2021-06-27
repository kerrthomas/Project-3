import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import "style";
function Nav() {
    return (
        <>
            <div id="NavBar"><Link to="/about">About</Link> | <Link to="/todo">Todos</Link> | <Link to="/contact/us">Contact</Link></div>
        </>
    );
}

function App() {
    return (
        <Router>
          <Nav />
            <Switch>
                <Route path="/about" exact component={About} />
                <Route path="/todo" component={Todo} />
                <Route path="/contact/us" component={Contact} />
            </Switch>
        </Router>

    )

}

function About() {
  <div class="Form">
  return <div class="Header"><p>Welcome!</p></div>;
  <p>This website allows you to set up a todo list so you can keep track of your tasks.</p>;
  <p>If you would like to contact us, please go to the contact page and fill out what you would like to notify us about.</p>;
  </div>
}

function Todo() {
  const [tasks, setTasks] = useState( [{txt: 'Study React', completed: true}, {txt: 'Go Shopping', completed: false}, {txt: 'Do Laundry', completed: true}]);
  
  return <div class="Form"><div class="Header"><p>Todo List</p></div>
  <input type="text" placeholder="Add a task" id="task"></input>
  <button onClick="addTask()">Add Task</button>
  </div>

function addTask() {
  document.getElementById("task");
  const [tasks, setTasks] += {task};
}

}

function Contact() {
  return <div class="Form"><div class="Header"><p>Contact Page</p></div>;
  </div>
}

function NotFound() {
  return <div class="Form"><div class="Header"><p>Page not found!</p></div>;
  </div>
}

render(<App />, document.getElementById("root"));