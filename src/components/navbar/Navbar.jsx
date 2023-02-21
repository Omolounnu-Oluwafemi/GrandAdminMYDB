 import React, { useContext } from "react";
import "./Navbar.scss"
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <h5>My Horizon Dashboard</h5>
          <p>Welcome to your Home</p>
        </div>
        <div className="items">
          <div className="item">
            <NotificationAddIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <Link className="item" to={`/viewprofile/${currentUser.id}`}>
            <img 
            src={currentUser?.image}
            alt=""
            className="avatar"/>
          </Link>
            <div className="user">{currentUser?.firstname}</div>
          {currentUser ? (
            <Link className="out_in" onClick={logout} to="/login"> Logout</Link>
          ) : (
            <Link className="out_in" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar