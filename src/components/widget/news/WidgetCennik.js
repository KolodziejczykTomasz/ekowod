import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    transition: '1s',
    fontSize: '14px',
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

const WidgetCennik = ({ activeColor, activeSize }) => {
  const classes = useStyles();

  return (
    <Card
      className={activeColor !== 'yellow' ? classes.root : classes.root2}
      style={{ fontSize: `${activeSize}px` }}
    >
      <CardHeader
        style={{ fontSize: `${activeSize}px` }}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Z
          </Avatar>
        }
        title="Zmiana cennika wody i ścieków"
        subheader="Wrzesień 14, 2020"
      />

      <CardContent activeSize>
        <Typography
          paragraph
          style={{ textAlign: 'center', marginTop: 20, fontSize: `${activeSize}px` }}
        >
          Informacja o zmianie ceny wody i ścieków
        </Typography>
        <Typography
          style={{ textAlign: 'justify', hyphens: 'auto', fontSize: `${activeSize}px` }}
          paragraph
        >
          Zakład Budżetowy Związku Gmin "EKOWOD" w Lidzbarku Warmińskim podaje do wiadomości, iż na
          podstawie złożonego wniosku do Państwowego Gospodarstwa Wody Polskie Dyrektor Regionalnego
          Zarządu Gospodarki Wodnej w Białymstoku zatwierdził nową taryfę opłat za pobraną wodę i
          odprowadzanie ścieków, która obowiązuje
        </Typography>
        <Typography style={{ textAlign: 'center', fontSize: `${activeSize}px` }}>
          od 13 czerwca 2020 r. (w okresie od 25 do 36 miesiąca obowiązywania taryfy)
        </Typography>
        <Typography style={{ textAlign: 'center', fontSize: `${activeSize}px` }}>
          <Link to="/tariff" id="linkFooter">
            Cennik
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};
export default WidgetCennik;
