import { Link } from "react-router-dom";
import React from 'react';
import "./tokensuccess.scss"
import Ourlogo from "../assets/giblogo.png"
 import DashboardIcon from '@mui/icons-material/Dashboard';
 import ContactPageIcon from '@mui/icons-material/ContactPage';
 import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
 import { useContext } from "react";
import { AuthContext } from "../context/authContext";


const TokenSuccess = () => {

  const date = new Date();
  const time = date.toTimeString().split(' ')[0].split(':');

  const {currentUser } = useContext(AuthContext);
    
  return (
    <div className="admin">
      <div className="left">
      <div className="top">
        <span>
        <img className="logo"  src={Ourlogo} alt="GIB HORIZONS"/> 
        </span> 
    </div>
    <hr />
    <div className="center">
    <ul>
            <li>
                <Link  className="link" to="/home">
                <DashboardIcon className="icon"/>
                <span>My Dashboard</span>
                </Link>
            </li>
            <li>
                <Link  className="link" to="/createtoken">
                <DashboardIcon className="icon"/>
                <span>Create Token</span>
                </Link>
            </li>
            <li>
                <Link className="link" to="/users">
                <ContactPageIcon className="icon"/>
                <span>View Users</span> 
                </Link>
            </li>
            <li>
            <Link className="link" to="/messages">
            <QuestionAnswerIcon className="icon"/>
                <span>View Messages</span>
                </Link>
            </li>
            <li>
            <Link className="link" to="/createadmin">
            <QuestionAnswerIcon className="icon"/>
                <span>Create Admin</span>
                </Link>
            </li>
        </ul>
        </div>
      </div>
      <div className="right">
        <nav className="nav">
        <p>{time[0] + ':' + time[1]} | {new Date().toLocaleDateString() + ''}</p>
        <p> Welcome,   {currentUser?.name}</p> 
        </nav>
        <div>
         TOKEN HAS BEEN CREATED FOR NEW USER IN THE DATABASE
         NEW USER CAN PROCEED TO SIGN UP NOW
        </div>
      </div>
    </div>
  )
}

export default TokenSuccess