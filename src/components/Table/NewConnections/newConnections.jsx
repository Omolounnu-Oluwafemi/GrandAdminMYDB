import "./newConnections.scss"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
//import Divider from '@mui/material/Divider';
import TableContainer from '@mui/material/TableContainer';
import Button from '@mui/material/Button';


const NewConnections = () => {
  return (
    <TableContainer sx={{ maxHeight: 700, width:"100%"}} className="new">
      <h4>New Connections</h4>
      <List
      sx={{
        //width: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar className="listitemAvatar">
            <ImageIcon className="avatar"/>
        </ListItemAvatar>
        <ListItemText primary="John Doe" secondary="@johndoe" className="listitemText"/>
        <Button variant="contained" color="success" size="medium">Follow</Button>
      </ListItem>
      <ListItem>
        <ListItemAvatar className="listitemAvatar">
            <ImageIcon className="avatar"/>
        </ListItemAvatar>
        <ListItemText primary="John Doe" secondary="@johndoe" className="listitemText"/>
        <Button variant="contained" color="error" size="small">Unfollow</Button>
      </ListItem>
      <ListItem>
        <ListItemAvatar className="listitemAvatar">
            <ImageIcon className="avatar"/>
        </ListItemAvatar>
        <ListItemText primary="John Doe" secondary="@johndoe" className="listitemText"/>
        <Button variant="contained" color="success" size="medium">Follow</Button>
      </ListItem>
      <ListItem>
        <ListItemAvatar className="listitemAvatar">
            <ImageIcon className="avatar"/>
        </ListItemAvatar>
        <ListItemText primary="John Doe" secondary="@johndoe" className="listitemText"/>
        <Button variant="contained" color="error" size="small">Unfollow</Button>
      </ListItem>
    </List>
    
    </TableContainer>



    
  )
}

export default NewConnections
