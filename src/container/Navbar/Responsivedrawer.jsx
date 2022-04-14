import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DehazeIcon from '@mui/icons-material/Dehaze';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LogoutIcon from '@mui/icons-material/Logout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from "react-router-dom";
 const notifications = [
  {
    
    avatarIcon: (<HomeIcon/>),
    text: "Home",
    path:'/'
  },
  {
   avatarIcon: (<PersonAddIcon/>),
   text: "Registerations",
   path:'/usersignup'

  }, 
  {
    avatarIcon: (<VpnKeyIcon/>),
    text: "login",
    path:'/userlogin'
   },   
   {
    avatarIcon: (<AddShoppingCartIcon/>),
    text: "cart",
    path:'/shoppingcart'
   },
   {
    avatarIcon: (<LogoutIcon/>),
    text: "logout",
    path:'/logout'
   },  
];
const navlinkstyling={
  textDecoration:'none',
  color:'white'
}
export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          style={{backgroundColor:'#080523',height:'100vh'}}
         >
         <List>
        {notifications.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon style={{color:'white'}}>
            {item.avatarIcon}
            </ListItemIcon>
            <ListItemText >
              <NavLink style={navlinkstyling} to={item.path}>{item.text}</NavLink> 
            </ListItemText>
          </ListItem>
        ))}
      </List>
        </Box>
      );
      return (
        <div>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)} style={{color:'black'}}><DehazeIcon/></Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      );
    };