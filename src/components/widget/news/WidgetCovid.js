import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import News1 from '../../../assets/information/kom_12102020.jpg';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    transition: '1s',
    '&:hover': {
      scale: 1.01,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 15px',
      maxWidth: '100%',
      '&:hover': {
        scale: 1.21,
      },
    },
  },
  media: {
    height: 400,
    width: '100%',
    Top: '56.25%',
    marginTop: '30px',
    [theme.breakpoints.down('lg')]: {
      height: 400,
      width: '100%',
      Top: '56.25%', 
      marginTop: '30px'     
    },
    [theme.breakpoints.down('md')]: {
      height: 400,
      width: '100%',
      Top: '56.25%', 
      marginTop: '30px',  
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#B2CA39',
  },
}));

export default function CardWidget() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            I
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Informacja"
        subheader="Październik 12, 2020"
      />
      <CardMedia className={classes.media} image={News1} title="Kropla wody" />
      <CardContent>        
      </CardContent> 
    
    </Card>
  );
}
