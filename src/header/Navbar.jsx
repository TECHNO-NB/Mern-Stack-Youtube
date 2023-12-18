import React, { Children, useState } from 'react'
import "./Navbar.css";
import { Link,useNavigate } from 'react-router-dom';

const Navbar = ({children}) => {
  const [login,setLogin] = useState(false);
  const navigate=useNavigate();

  const navigateLogin=()=>{
    navigate("/register")
  }

  return (
 
    <div className="navbar">
    <div id="sidebar">
    <h1>YouTube</h1>
    <Link to="#" className="active"><i className="fas fa-home"></i> Home</Link>
    <Link to="#"><i className="fas fa-fire"></i> Trending</Link>
    <Link to="#"><i className="fas fa-layer-group"></i> Subscriptions</Link>
    <Link to="#"><i className="fas fa-video"></i> Library</Link>
    <Link to="#"><i className="fas fa-history"></i> History</Link>
    <Link to="#"><i className="fas fa-video"></i> Your videos</Link>
    <Link to="#"><i className="fas fa-clock"></i> Watch later</Link>
    <Link to="#"><i className="fas fa-thumbs-up"></i> Liked videos</Link>
    <Link to="#"><i className="fas fa-chevron-down"></i> Show more</Link>
    <button onClick={navigateLogin} class="button">{login ? "LOGOUT" :"LOGIN IN" }</button>
  </div>

  <div id="content">
   {children}
  </div>


  <div id="mobile-tabs">
    <Link hr="#"><i className="fas fa-home"></i></Link>
    <Link to="#"><i className="fas fa-fire"></i></Link>
    <Link to="#"><i className="fas fa-layer-group"></i></Link>
    <Link to="/register"><i className="fas fa-inbox"></i></Link>
    <Link to="#"><i className="fas fa-user"></i></Link>
  </div>
  </div>

  )
}

export default Navbar