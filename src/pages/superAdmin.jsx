import { Link } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';
import "./superAdmin.scss"
import Ourlogo from "../assets/gibmpcsl.png"
 import DashboardIcon from '@mui/icons-material/Dashboard';
 import ContactPageIcon from '@mui/icons-material/ContactPage';
 import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
 import { useContext } from "react";
import { AuthContext } from "../context/authContext";
 


const SuperAdmin = () => {

  const date = new Date();
  const time = date.toTimeString().split(' ')[0].split(':');

  const {currentUser, superadminlogout } = useContext(AuthContext);

  return (
  
    <div className="superadmin">
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
        {currentUser ? (
             <Link className="out_in" onClick={superadminlogout} to="/"> Logout</Link>
          ) : (
            <Link className="out_in" to="/"> Login </Link>
          )}
        </nav>
        <div>
          <h4> SuperAdmin Dashboard</h4>
          <div className="superadminbutton">
            <div >
            <Link className="buttonright" to="/users"> 
            <Button>VIEW ALL MEMBERS</Button>
            </Link> 
            <Link className="buttonright" to="/createtoken">
            <Button>CREATE NEW ACCESS TOKEN</Button>
            </Link>
            </div>
            <div >
            <Link  className="buttonleft" to="/messages">
            <Button>VIEW  MEMBERS MESSSAGES</Button>
            </Link>
            <Link className="buttonleft"  to="/createadmin">
            <Button>CREATE NEW ADMIN</Button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuperAdmin