import React from 'react'
import { makeStyles } from '@material-ui/styles';
import {Avatar, Typography, IconButton, CardMedia} from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader  from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';




const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

const MachineCard = (props) => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


return(
  <Card style={{height: "100%", display:"flex", flexDirection:'column' }}>
  <CardHeader 
    avatar={
        <Avatar aria-label="recipe" className={classes.avatar} src={props.imgUrl} />
        
      }
      action={
        <IconButton aria-label="settings">
          <ShareIcon />
        </IconButton>
      }
      title={props.title}
      subheader={props.preco}
      style={{height: "10%"}}
  
  
  
  />
  <CardMedia image={props.imgUrl}  style={{height: 300}}/>

  <CardContent style={{flex: 1}}>
    <Typography variant="body2" component="p">
      {props.descricao  }
     
    </Typography>
  </CardContent>
  <CardActions style={{ justifySelf: "flex-end"}}>
    <Button size="small" color="primary">BUY NOW</Button>
    <Button size="small" color="primary">SHARE</Button>
  </CardActions>  
</Card>


);

}

export default MachineCard; 
