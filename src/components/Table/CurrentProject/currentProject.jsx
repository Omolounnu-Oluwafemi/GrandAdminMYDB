import "./currentProject.scss"
import * as React from 'react';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ImageIcon from '@mui/icons-material/Image';
import TableContainer from '@mui/material/TableContainer';
import Divider from '@mui/material/Divider';
import { useState} from "react";
import { useEffect } from "react";
import Axios from "axios"

const CurrentProject = () => {
  const [project, setProject] = useState([])

  useEffect(() => {
  Axios.get('/tables/project').then((response) =>{
        setProject(response.data);
})
  },[])
  return (
    
    <TableContainer sx={{ maxHeight: 400, width:"80%"}} className="current">
      <div className="currrentProject">
      <h4>Current Project</h4>
      </div>
      
      <List className="list">
{project.map((val)=>(
      <>
      <div className="list_img">
        <img src={"${var.projectimg}"} alt="pix" className="img"/> 
        <li>
        <h6>{val.projecttitle}</h6>
        <p>{val.Projectdescription}</p>
      </li>
      </div>
      <Divider variant="fullWidth" component="ul" />
    </>
))}
 </List>
    </TableContainer> 
  )
}

export default CurrentProject