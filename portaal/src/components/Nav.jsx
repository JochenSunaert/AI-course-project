import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css'

function Nav({ setSearchQuery, setSelectedWriter }) {
  const [searchInput, setSearchInput] = useState('');


  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  return (
    <>
      <div className="headerimg">
        <div className="z-indexfix">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-left">
                <Link to='/' className="nav-link" ><img src="Logo_Portaal.png" alt="Logo"></img></Link>
              </div>
              <div className="navbar-right">
                <Link to='/about' className="nav-link" >About us</Link>
                <Link to='/sprookjes' className="nav-link" >Sprookjes</Link>
                <Link to='/making' className="nav-link" >Making of</Link>
              </div>
            </div>
          </nav>
          <h1>Betoverende verhalen, één portaal.</h1>
          <form onSubmit={handleSearch}>
            <div className="search-container">
              <div className="search-input">
                <i className="fas fa-search"></i>
                <input 
                  type="text" 
                  placeholder="Zoek hier naar een sprookje of persoon"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <button type="submit" className="search-btn">Search</button>
            </div>
          </form>
        </div>
      </div>
      <img src="cloud_transition.png" className="clouds-overlay" alt="Clouds"></img>
    </>
  )
}
 
export default Nav;
