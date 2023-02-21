import "./Sidebar.scss"
import Ourlogo from "../../assets/gibmpcsl.png"
//import "../../assets/giblogo.png"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactPageIcon from '@mui/icons-material/ContactPage';  
import InfoIcon from '@mui/icons-material/Info';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import React, { useContext } from "react";


const Sidebar = () => {

    const { currentUser } = useContext(AuthContext);

  return (
    <div className='sidebar'>
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
                    <span>MY DASHBOARD</span>
                    </Link>
                </li>
                <li>
                <Link className="link" to={`/viewprofile/${currentUser.id}`}>
                    <ContactPageIcon className="icon"/>
                    <span>VIEW PROFILE</span> 
                    
                    </Link>
                </li>
                <li>
                <Link className="link" to={`/updateprofile/${currentUser.id}`}>
                    <InfoIcon className="icon"/>
                    <span>UPDATE PROFILE</span>
                    </Link>
                </li>
                <li>
                    <QuestionAnswerIcon className="icon"/>
                    <span>GET HELP</span>
                </li>
            </ul>
            </div>
    </div>
  )
}

export default Sidebar