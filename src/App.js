import './App.css';

import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// useState, useEffect
// React Hooks

function Home() {
  const [items, setItems] = useState([{txt: 'Go to the grocery', completed: false}, {txt: 'Work on project', completed: true}]);
  const [currentFilter, setCurrentFilter] = useState('all');

  const addItem = async () => {
    // write code here to get the text from the input
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

  return (
      <div>
        I am on the home page
        <br/>
        <br/>
        <br/>

        <input type="text" className={'border'}/>
        <button onClick={addItem}>Submit</button>

        <ul>
          {items.map((item, index) => {
            if(currentFilter == 'completed'){
              if(item.completed){
                return <li key={index}>
                  {item.txt}
                </li>
              }
            } else if(currentFilter == 'all'){
              return <li key={index}>
                {item.txt}
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

function About() {
  return <h2>I am on the About page</h2>;
}

function Users() {
  return <h2>I am on the Users page</h2>;
}

function App() {

  const [counter, setCounter] = useState(0);
  const [names, setNames] = useState(['Jack', 'Jane', 'John']);

  const [inputTxt, setInputTxt] = useState('');

  useEffect(() => {
    console.log('counter value changed')
    if(counter == 5){
      alert('yay we are at 5!');
    }
  }, [counter])

  useEffect(() => {
    console.log('this code only runs once during the page load')
  }, [])

  const countClicks = async () => {
    console.log('countClicks was called')
    let counterCopy = counter
    counterCopy = counterCopy + 1
    setCounter(counterCopy)
  };

  const onInputChange = async (event) => {
    // console.log('the input was changed')
    console.log(event.currentTarget.value)
    setInputTxt(event.currentTarget.value)
  };

  const addName = async () => {
    // let namesCopy = names
    // namesCopy.push(inputTxt)
    // setNames(namesCopy)

    setNames([...names, inputTxt])
  };


  return (
      <>

        <Router>
          <div>
            <nav>
            <div id="NavBar"><Link to="/about">About</Link> | <Link to="/todo">Todos</Link> | <Link to="/contact/us">Contact</Link></div>
            </nav>

            <br/>
            <br/>
            <br/>
            <br/>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>








    {/*<div className="App">*/}
    {/*  /!*JSX*!/*/}
    {/*  <header className="App-header">*/}
    {/*    /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
    {/*    /!*ternary operator*!/*/}
    {/*    /!*{counter == 5 && alert('we are at 5!')}*!/*/}


    {/*    /!*props*!/*/}
    {/*    <Button txt={'Sign Up'} />*/}
    {/*    <Button txt={'Sign In'} color={'red'} />*/}

    {/*    <br/>*/}
    {/*    <br/>*/}
    {/*    <br/>*/}
    {/*    <br/>*/}
    {/*    <hr/>*/}

    {/*    <input value={inputTxt} onChange={onInputChange} type="text"/>*/}
    {/*    <p>The current value of the inputTxt is: {inputTxt}</p>*/}
    {/*    <br/>*/}
    {/*    <button onClick={addName}>Submit</button>*/}

    {/*    <ul>*/}
    {/*      {names.map((name, index) => {*/}
    {/*        // return <li key={index}>{name}</li>*/}
    {/*        return <Name key={index} name={name} />*/}
    {/*      })}*/}
    {/*    </ul>*/}

    {/*    <p style={{color: (counter == 5 ? 'red' : 'white')}}>Counter: {counter}</p>*/}

    {/*    {counter == 5 && <h1>the counter is at 5, YAY!</h1>}*/}

    {/*    <button onClick={countClicks}>Click me</button>*/}

    {/*    <br/>*/}
    {/*    <br/>*/}
    {/*    <br/>*/}
    {/*    <p>*/}
    {/*      Edit <code>src/App.js</code> and save to reload.*/}
    {/*    </p>*/}
    {/*    <a*/}
    {/*      className="App-link"*/}
    {/*      href="https://reactjs.org"*/}
    {/*      target="_blank"*/}
    {/*      rel="noopener noreferrer"*/}
    {/*    >*/}
    {/*      Learn React*/}
    {/*    </a>*/}
    {/*  </header>*/}
    {/*</div>*/}
        </>
  );
}

export default App;