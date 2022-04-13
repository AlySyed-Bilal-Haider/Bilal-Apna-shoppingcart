import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
 const notifications = [
  {
    
    avatarIcon: (<HomeIcon/>),
    text: "Home",
  },
  {
   avatarIcon: (<GitHubIcon/>),
   text: "Registerations",
  }, 
  {
    avatarIcon: (<WallpaperIcon/>),
    text: "login",
   },   
   {
    avatarIcon: (<ContactPhoneIcon/>),
    text: "cart",
   }, 
];
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
            <ListItemText style={{color:'white'}} primary={item.text} />
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