import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Info1 from 'assets/information/kom_12102020.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    height: 'auto',
    transition: '1s',
    '&:hover': {
      scale: 1.01,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 15px',
      maxWidth: '100%',
      '&:hover': {
        scale: 1.01,
      },
    },
  },

  media: {
    justifyContent: 'center',
    height: '100%',
    width: '90%',
    paddingTop: '56.25%',
    [theme.breakpoints.down('lg')]: {
      height: 'auto',
      paddingTop: '56.25%',
      margin: '10px auto',
    },
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      paddingTop: '56.25%',
      margin: '10px auto',
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    margin: '10px auto',
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
        title="Informacja"
        subheader="Październik 12, 2020"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <CardMedia className={classes.media} image={Info1} title="Informacja COVID" />
        </Typography>
      </CardContent>
    </Card>
  );
}
