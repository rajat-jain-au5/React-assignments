import React from 'react';
import "./App.css";
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Function from './day2/Function';
import Class from './day2/Class'
import L1 from './day3/L1'
import L2 from './day3/L2'
import L3 from './day3/L3'
import D4L1 from './day4/L1/L1'
import D4L2 from './day4/L2/L2'
import D4L3 from './day4/L3/L3'
import D4L4 from './day4/L4/L4'
import D5L1 from './day5/L1'
import D5L2 from './day5/L2'
import D5L3 from './day5/L3'
import D5L4 from './day5/L4'
import D5L5 from './day5/L5'



function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <h1 className="title">4 Days Practice Files</h1>
        <br />
        <Link className="li" to="/day2">Day 02</Link>
        <Link className="li" to="/day3">Day 03</Link>
        <Link className="li" to="/day4">Day 04</Link>
        <Link className="li" to="/day5">Day 05</Link>
      </div>
      <br />
      <br />
      <div>
        <Route path="/day2">
        <div className="header1">
          <Link className="li1" to="/day2/day21">
            <h4>Class Component</h4>
          </Link>
          <Link className="li1" to="/day2/day22">
            <h4>Function Component</h4>
          </Link>
          </div>
          <br />
          <br />
          <div className="header1">
            <Route path="/day2/day21">
              <Class />
            </Route>
            <Route path="/day2/day22">
              <Function />
            </Route>
          </div>
        </Route>
        <Route path="/day3">
          <div className="header1">
          <Link className="li1" to="/day3/day31">
            <h4>Level 1</h4>
          </Link>
          <Link className="li1" to="/day3/day32">
            <h4>Level 2</h4>
          </Link>
          <Link className="li1" to="/day3/day33">
            <h4>Level 3</h4>
          </Link>
          </div>
          <br />
          <br />
          <div className="header1">
            <Route path="/day3/day31">
              <L1 />
            </Route>
            <Route path="/day3/day32">
              <L2 />
            </Route>
            <Route path="/day3/day33">
              <L3 />
            </Route>
          </div>
        </Route>
        <Route path="/day4">
        <div className="header1">
          <Link className="li1" to="/day4/day41">
          <h4>Level 1</h4>
          </Link>
          <Link className="li1" to="/day4/day42">
          <h4>Level 2</h4>
          </Link>
          <Link className="li1" to="/day4/day43">
          <h4>Level 3</h4>
          </Link>
          <Link className="li1" to="/day4/day44">
          <h4>Level 4</h4>
          </Link>
          </div>
          <br/>
          <br/>
          <div className="header1">
            <Route path="/day4/day41">
             <D4L1/>
            </Route>
            <Route path="/day4/day42">
             <D4L2/>
            </Route>
            <Route path="/day4/day43">
             <D4L3/>
            </Route>
            <Route path="/day4/day44">
             <D4L4/>
            </Route>
          </div>
        </Route>
        <Route path="/day5">
        <div className="header1">
        <Link className="li1" to="/day5/day51">
          <h4>Level 1</h4>
          </Link>
          <Link className="li1" to="/day5/day52">
          <h4>Level 2</h4>
          </Link>
          <Link className="li1" to="/day5/day53">
          <h4>Level 3</h4>
          </Link>
          <Link className="li1" to="/day5/day54">
          <h4>Level 4</h4>
          </Link>
          <Link className="li1" to="/day5/day55">
          <h4>Level 5</h4>
          </Link>
          </div>
          <br/>
          <br/>
          <div className="header1">
          <Route path="/day5/day51">
             <D5L1/>
            </Route>
            <Route path="/day5/day52">
             <D5L2/>
            </Route>
            <Route path="/day5/day53">
             <D5L3/>
            </Route>
            <Route path="/day5/day54">
             <D5L4/>
            </Route>
            <Route path="/day5/day55">
             <D5L5/>
            </Route>
          </div>
        </Route>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
