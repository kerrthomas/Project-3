import React from "react";
import { render } from "react-dom";
import "./index.js";
import "./index.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

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
  return <div class="Form"><div class="Header"><p>Todo List</p></div>
  </div>
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