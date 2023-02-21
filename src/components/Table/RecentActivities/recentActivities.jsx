import "../RecentActivities/recentActivities.scss"
import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Axios from "axios"
import { useState} from "react";
import { useEffect } from "react";

const RecentActivities = () => {
  const [message, setMessage] = useState([])
  useEffect(() => {
  Axios.get('/tables/recent').then((response) =>{
        setMessage(response.data);
})
  },[])
  return (
    <div className="recent">
      <div className="text">
        <h5>Recent Activities</h5>
        <span>Last one month</span>
      </div>
      
      <List className="list">
{message.map((val)=>(
      <>
       
      <div className="list_img">
      <Divider variant="fullWidth" component="li" />
        <img src={"${var.img}"} alt="" className="img"/>
        <li>
        <h6>{val.title}</h6>
        <p>{val.details}</p>
      </li>
      </div>
      <Divider variant="fullWidth" component="li" />
    </>
))}
 </List>
</div>
)}

export default RecentActivities