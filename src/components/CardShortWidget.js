import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Water from 'assets/images/water.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    transition: '1s',
    '&:hover': {
      scale: 1.1,
    },
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
      maxWidth: '100%',
      textAlign: 'left',
      padding: '0 0',
      margin: '0 0',
      width: '100%',
      '&:hover': {
        scale: 1.0,
      },
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    [theme.breakpoints.down('sm')]: {     
      maxWidth: '100%',
      width: '100%',
    },
  },
  image: {
    width: 128,
    height: 128,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
      margin: '0 auto',
    },
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '0 auto',
    },
  },
}));

export default function CardShortWidget() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={Water} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>          
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam quibusdam vitae ab neque officiis voluptatum alias perspiciatis iure sunt dignissimos, ipsa temporibus soluta natus nulla aut suscipit culpa, doloremque ea distinctio! Architecto voluptate possimus suscipit at deserunt distinctio sequi, fugiat praesentium debitis enim doloribus iusto! Voluptatum cupiditate cum doloribus!
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>            
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
