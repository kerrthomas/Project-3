import './App.css';

import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// useState, useEffect
// React Hooks

function Home() {
  return <h1>Welcome to the Todo List!</h1>;
}

function About() {
  return <h2>I am on the About page</h2>;
}

function Users() {
  return <h2>I am on the Users page</h2>;
}

function Todo() {
  const [items, setItems] = useState([{txt: 'Go to the grocery', completed: false}, {txt: 'Work on project', completed: true}]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [inputText, setInputText] = useState('');
  const addItem = async () => {
    let obj = {txt: inputText, completed: false}
    setItems([...items, obj])
  
    // add that input test to the array as a new item object
    // an item could look like this: {txt: 'The text from the input goes here', completed: false}
    // look up the way to add to an array using react hooks
  };

  const showAll = async () => {
    setCurrentFilter('all')
  };

  const showCompleted = async () => {
    setCurrentFilter('completed')

  };

  const deleteItem = async (id) => {
    let index = setItems.findIndex(item => item.id === id)
    setItems.splice(index)
    // remove an element from items array using the index value.About
    // HINT: lookup slice array javascript

  }

  return (
    <div>
      Todo List
      <br/>

      <input type="text" onChange={(event) => setInputText(event.currentTarget.value)} className={'border'}/>
      <button type="button" class="btn btn-primary" onClick={addItem}>Submit</button>

      <ul>
        {items.map((item, index) => {
          if(currentFilter === 'completed'){
            if(item.completed){
              return <li key={index}>
                {item.txt}
                &nbsp;<button type="button" class="btn btn-danger" onClick={() => deleteItem(index)}>Delete</button>
              </li>
            }
          } else if(currentFilter === 'all'){
            return <li key={index}>
              {item.txt}
              &nbsp;<button type="button" class="btn btn-danger" onClick={() => deleteItem(index)}>Delete</button>
            </li>
          }

        })}

      </ul>

<br/>
<br/>
      <button onClick={showAll}>All</button>&nbsp;&nbsp;
      <button onClick={showCompleted}>Completed</button>

    </div>
);
}

function Contact() {
  return <h2>I am on the Contact page</h2>;
}

function App() {

  return (
      <>

        <Router>
          <div>
            <nav>
            <div id="NavBar" style={{display: 'flex', justifyContent: 'center'}}>
              <Link to="/">Home</Link>
              |<Link to="/about">About</Link>
              |<Link to="/todo">Todos</Link>
              |<Link to="/contact/us">Contact</Link>
            </div>

            </nav>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/todo">
                <Todo />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        </>
  );
}

export default App;