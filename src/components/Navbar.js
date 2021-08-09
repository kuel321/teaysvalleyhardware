import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import RoomIcon from '@material-ui/icons/Room';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';

import bodyBackground from '../media/background.jpg';
import logo from '../media/logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    colorPrimary: "FF8000",
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  image: {
    height: 40
  },
  colorPrimary: "FF80000"
}));



export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    setState(open)
  }
  const list = () => (
   <List>
     <ListItem>
       <Button href="tel:304-757-7225"  endIcon={<PhoneEnabledIcon />}>Contact Us</Button>
       

     </ListItem>
     <ListItem>
     <Button href="https://goo.gl/maps/AebD1YPYmjnNfxw6A" endIcon={<RoomIcon />}>Location</Button>
     </ListItem>
   </List>
  )
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#FFFFFF' }}>
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="primary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
            <img className={classes.image} src={logo}></img>
         
          
        </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={state} onClose={toggleDrawer(false)}>
        {list()}
        </Drawer>
        
    </div>
  );
}
