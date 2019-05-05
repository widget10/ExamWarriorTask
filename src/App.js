import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import './App.css';
import Courselist from './courselist';
import Createcourse from './components/createcourse';
// const courses = [
//   { id: 1, title: "Complete Bitcoin A to Z", des:"BLA BLA BLA", image:"https://www.ccn.com/wp-content/uploads/2013/12/bitcoin-image-680x350.jpg" }
 
// ];


class App extends Component {

  render(){
    return (
    
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to='/' className="navbar-brand" href="#" target="_blank">UDEMY</Link>
          <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Courses</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Course</Link>
                </li>
              </ul>
            </div>
        </nav>
       
        
       
          <Route path="/" exact component={Courselist} />
          <Route path="/create" component={Createcourse} />
          <p className="text-right float">
            Created by  Vijit Shrivastava &copy; {new Date().getFullYear()} 
          </p>
  
            </div>
          
  
      </Router>
    );
  }
}

export default App;
