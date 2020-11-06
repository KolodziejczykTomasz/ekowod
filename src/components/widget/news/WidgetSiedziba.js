import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import News2 from 'assets/information/kom_2.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
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
  root2: {
    maxWidth: '100%',
    backgroundColor: 'yellow',
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
    height: 0,
    paddingTop: '56.25%',
    [theme.breakpoints.down('lg')]: {
      height: 0,
      paddingTop: '56.25%',
      marginLeft: '15px',
    },
    [theme.breakpoints.down('md')]: {
      height: 0,
      paddingTop: '56.25%',
      marginLeft: '15px',
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

const WidgetSiedziba = ({ activeColor }) => {
  const classes = useStyles();

  return (
    <Card className={activeColor !== 'yellow' ? classes.root : classes.root2}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            N
          </Avatar>
        }
        title="Nowa siedziba"
        subheader="Wrzesień 14, 2020"
      />
      <CardMedia className={classes.media} image={News2} title="Nowa siedziba" />
      <CardContent>
        <Typography paragraph style={{ textAlign: 'center' }}>
          Uwaga!!!
        </Typography>
        <Typography style={{ textAlign: 'justify', hyphens: 'auto' }} paragraph>
          Zawiadamiamy, że zakończył się remont siedziby Związku Gmin "EKOWOD" i Zakładu Budżetowego
          Związku Gmin "EKOWOD", zapraszamy do nowej siedziby na ul. Olsztyńską 10D,11-100 Lidzbark
          Warmiński. Interesantów informujemy, że już nie urzędujemy w budynku Urzędu Gminy w
          Lidzbarku Warmińskim Za utrudnienia przepraszamy.
        </Typography>
        <Typography style={{ textAlign: 'center' }}>Za utrudnienia przepraszamy.</Typography>
      </CardContent>
    </Card>
  );
};
export default WidgetSiedziba;