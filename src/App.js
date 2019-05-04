import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Courselist from './courselist';

const courses = [
  { id: 1, title: "Complete Bitcoin A to Z", des:"BLA BLA BLA", image:"https://www.ccn.com/wp-content/uploads/2013/12/bitcoin-image-680x350.jpg" }
 
];


function App() {
  return (
    
    <Router>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/' className="navbar-brand" href="#" target="_blank">UDEMY</Link>

      </nav>
     
      <Courselist courses={courses}/>
      <p className="text-right float">
          Created by  Vijit Shrivastava &copy; {new Date().getFullYear()} 
        </p>
        {/* <Route path="/" exact component={Courselist}/> */}
    </Router>
    /* <div className="App">
      <header className="App-header">
        <Courselist courses={courses}/>
        <p class="text-right float">
          Created by  Vijit Shrivastava &copy; {new Date().getFullYear()} 
        </p>
        
      </header>
    </div> */
  );
}

export default App;
