import React, { Component, useContext }  from 'react'
import "./mobilenav.scss"
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png"
import Ourlogo from "../../assets/giblogo.png"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import LoginIcon from '@mui/icons-material/Login';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmailIcon from '@mui/icons-material/Email';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import { useState} from "react"

const Mobilenav = () => {

    // const { currentUser, logout } = useContext(AuthContext);
    const [toggle, setToggle]= useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

  return (
    <nav className={toggle? 'navbar expanded':'navbar'}>
          {/* <div className="top "> */}
            
            <img className="logo"  src={Ourlogo} alt="GIB HORIZONS"/> 
          
            <div className='toggle-icon' onClick={handleClick}>
            {toggle? <CloseIcon/>:<MenuOpenIcon/>} 
            </div>
          {/* </div> */}
          <hr />
            {/* <Link className="item" to="/viewprofile">
            <img 
            src={avatar}
            alt=""
            className="avatar"/>
          </Link> */}
          {/* <div> */}
        <ul className='links'>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
                {/* <li>
                    <Link  className="link" to="/mydashboard">
                    <DashboardIcon className="icon"/>
                    <span>MY DASHBOARD</span>
                    </Link>
                </li>
                <li>
                <Link className="link" to="/viewprofile">
                    <ContactPageIcon className="icon"/>
                    <span>VIEW PROFILE</span> 
                    </Link>
                </li>
                <li>
                <Link className="link" to="/updateprofile">
                    <InfoIcon className="icon"/>
                    <span>UPDATE PROFILE</span>
                    </Link>
                </li> */}
            {/* </ul> */}
            {/* </div> */}
    </nav>
  )
};

export default Mobilenav