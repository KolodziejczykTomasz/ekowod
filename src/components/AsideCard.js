import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Water from '../images/water.jpg';

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
    [theme.breakpoints.down('sm')]: {
      padding: '0 15px',
      maxWidth: "100%",      
    },  
    [theme.breakpoints.down('lg')]: {
  padding: '0 15px',
  maxWidth: "100%",
}  
  },
  media: {
    height: 140,
  },
}));

export default function AsideCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={Water} title="Komunikat" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Komunikat
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>        
        <Button size="small" color="primary">
          Więcej
        </Button>
      </CardActions>
    </Card>
  );
}
