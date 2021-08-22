import './App.css';
import React, {useState} from 'react'
import { useForm } from '@formspree/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h1>Welcome to the Todo List!</h1>;
}

function About() {
  return <h2>This website will help you manage what tasks you need to do.<br/>Go to the Todo page and type a task you want to finish.<br/>Once you finish a task, click the Complete button next to the task.<br/>If you have any questions about the website, feel free to contact us on the Contact page.</h2>;
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

  const showIncomplete = async () => {
    setCurrentFilter('incomplete')
  };

  const showCompleted = async () => {
    setCurrentFilter('completed')
  };

  const deleteItem = async (index) => {
    console.log('id is', index)
    let itms = []
    items.map((itm, ix) => {
      if(index !== ix){
        itms.push(itm)
      }
    })

    setItems([...itms])
    //let index = items.findIndex(item => item.id === id)
    //console.log(index)
    //items.splice(index)
    // remove an element from items array using the index value.About
    // HINT: lookup slice array javascript

  }

  const setComplete = async (index) => {
    console.log('id is', index)
    let itemsCopy = items
    itemsCopy.map((item, ix) => {
      if(index === ix){
        return item.completed = true
      }
    })

    setItems([...itemsCopy])
  }

  const setIncomplete = async (index) => {
    console.log('id is', index)
    let itemsCopy = items
    itemsCopy.map((item, ix) => {
      if(index === ix){
        return item.completed = false
      }
    })

    setItems([...itemsCopy])
  }

  return (
    <div>
      <h2>Todo List</h2>
      <br/>

      <input type="text" onChange={(event) => setInputText(event.currentTarget.value)} className={'border'}/>
      <button type="button" className="btn btn-primary" onClick={addItem}>Submit</button>

      <ul>
        {items.map((item, index) => {
          if(currentFilter === 'completed'){
            if(item.completed){
              return <li key={index}>
                {item.txt}
                &nbsp;&nbsp;<button type="button" className="btn btn-danger" onClick={() => deleteItem(index)}>Delete</button>
                <button type="button" className="btn btn-secondary" onClick={() => setIncomplete(index)}>Incomplete</button>
              </li>
            }
          } else if(currentFilter === 'all'){
            return <li key={index}>
              {item.txt}
              &nbsp;&nbsp;<button type="button" className="btn btn-danger" onClick={() => deleteItem(index)}>Delete</button>
              {item.completed ? <button type="button" className="btn btn-secondary" onClick={() => setIncomplete(index)}>Incomplete</button> : <button type="button" className="btn btn-secondary" onClick={() => setComplete(index)}>Completed</button>}
            </li>
          } else {
            if(item.completed === false){
            return <li key={index}>
              {item.txt}
              &nbsp;&nbsp;<button type="button" className="btn btn-danger" onClick={() => deleteItem(index)}>Delete</button>
              <button type="button" className="btn btn-secondary" onClick={() => setComplete(index)}>Completed</button>
            </li>
            }
          }
        })}
      </ul>

<br/>
<br/>
      <button onClick={showAll}>All</button>&nbsp;&nbsp;&nbsp;
      <button onClick={showCompleted}>Completed</button>
      <button onClick={showIncomplete}>Incomplete</button>
    </div>
);
}

function Contact() {
  const [state, handleSubmit] = useForm("xpzkokjv");
  if (state.succeeded) {
      return <p>Thank you for notifying us!</p>;
  }
  return (
  <form id="ContactForm" onSubmit={handleSubmit}>
    <div>Enter your first name: <input type="text" id="fName" required></input></div>
    <div>Enter your last name: <input type="text" id="lName" required></input></div>
    <div>Enter your email: <input type="email" id="email" required></input></div>
    <div>What would you like to notify us about?</div>
    <div><textarea id="info" required></textarea></div>
    <div><button type="submit" disabled={state.submitting} className="btn btn-primary">Submit</button></div>
  </form>
  )
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