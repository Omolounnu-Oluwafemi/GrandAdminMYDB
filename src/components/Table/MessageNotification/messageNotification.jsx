import "./messageNotification.scss"
import * as React from 'react';
import List from '@mui/material/List';
import Avatar from "../../../assets/avatar.png"
import TableContainer from '@mui/material/TableContainer';
import Axios from "axios"
import { useEffect, useState } from "react";


const MessageNotification = () => {
const [message, setMessage] = useState([])
      useEffect(() => {
      Axios.get('/tables/message').then((response) =>{
            setMessage(response.data);
 
})
      },
      [])

  return (
    <TableContainer sx={{ maxHeight: 600}} className="chatNotification">
    <h3 className="text">Chat Notifications</h3>

    <List>

    {message.map((val)=>(
      <>
                <li>
                      <img
                            src={Avatar}
                            alt=""
                            className="avatar" />
                      <p>{val.lastname}</p>
                      <span>Hi! Are you still home?</span>
                </li>
                <li>
                      <img
                            src={Avatar}
                            alt=""
                            className="avatar" />
                      <p>John doe</p>
                      <span>Hi! Are you still home?</span>
                </li><li>
                      <img
                            src={Avatar}
                            alt=""
                            className="avatar" />
                      <p>John doe</p>
                      <span>Hi! Are you still home?</span>
                </li><li>
                      <img
                            src={Avatar}
                            alt=""
                            className="avatar" />
                      <p>John doe</p>
                      <span>Hi! Are you still home?</span>
                </li><li>
                      <img
                            src={Avatar}
                            alt=""
                            className="avatar" />
                      <p>John doe</p>
                      <span>Hi! Are you still home?</span>
                </li>
                </>
))}
    </List>
</TableContainer>  
  )
}

export default MessageNotification
