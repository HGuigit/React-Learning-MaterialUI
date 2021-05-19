import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';


 
const useStyles = makeStyles(() => ({
    toolbarStyle:{
       flexDirection:'row',
       justifyContent:'space-between',
    } 
}));

const Header = () => {

const classes = useStyles();

return(
<AppBar position="static">
    <Toolbar className={classes.toolbarStyle} >
        <Typography>
            Guilherme Souza
        </Typography>
        <AccountCircleIcon/>    
    </Toolbar>

</AppBar>
);
}

export default Header;