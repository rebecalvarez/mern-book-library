import React from "react";
import {Link} from 'react-router-dom';
import './style.css';

function Nav() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/">
    //     React Reading List
    //   </a>
    // </nav>

    <nav className="navbar sticky-top navbar-expand-lg navbar-dark nav-background">
   <Link to='/' 
        className={window.location.pathname === '/' || window.location.pathname === '/search'
         ? 'nav-link active navbar-brand' :'nav-link navbar-brand'} >MERN Book Search ~ <small>by Rebeca Dodero</small></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
<div className="collapse navbar-collapse "  id="navbarNavDropdown">
    <ul className= "navbar-nav menu-position">
      <li  className="nav-item active">
        <Link to='/' 
        className={window.location.pathname === '/' || window.location.pathname === '/search'
         ? 'nav-link active' :'nav-link'} >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item" >
        <Link to="/bookshelf" className={window.location.pathname === '/bookshelf'
         ? 'nav-link active' :'nav-link'}>My Bookshelf</Link>
      </li>
      
    </ul>
  </div>
 
</nav>
  );



}



export default Nav;
