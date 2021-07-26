import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    transition: '1s',
    backgroundColor: '#fff',
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
    backgroundColor: '#637201',
  },
}));

const WidgetPrzetarg1 = ({ activeColor, activeSize }) => {
  const classes = useStyles();

  return (
    <Card className={activeColor !== 'yellow' ? classes.root : classes.root2}>
      <CardHeader
        style={{ fontSize: `${activeSize}px` }}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Z
          </Avatar>
        }
        title="Zapytanie ofertowe"
        subheader="Lipiec 26, 2021"
      />
      <CardContent style={{ fontSize: `${activeSize}px` }}>
        <Typography paragraph style={{ textAlign: 'center', fontSize: `${activeSize}px` }}>
          Uwaga!!!
        </Typography>
        <Typography
          style={{ textAlign: 'justify', hyphens: 'auto', fontSize: `${activeSize}px` }}
          paragraph
        >
          <p style={{fontWeight: 600}}>Zapytanie ofertowe do złożenia oferty na: "Dobudowę garaży przy siedzibie ZBZG "EKOWOD"
          ulica Olsztyńska 10D, 11-100 Lidzbark Warmiński"</p>
          <p>
            Oferty należy składać w Zakładzie Budżetowym Związku Gmin „EKOWOD” w Lidzbarku
            Warmińskim (adres jak wyżej) lub przesłać na adres e-mail: k.koziel@ekowod-lidzbark.pl
            lub k.jezewska@ekowod-lidzbark.pl w terminie do dnia 02.08.2021r. do godz.
            12:00 
            </p>
            <p>Szczegółowych informacji w zakresie realizacji zamówienia udzieli: Katarzyna
            Kozieł Tel. 89 764 20 26
          </p>
        </Typography>
        <Typography style={{ textAlign: 'left', fontSize: `${activeSize}px` }}>
          <p>Pliki do pobrania:</p>
          <ul>
            <li>
              <a
                href="http://ekowod-lidzbark.pl/files/przetarg/zapytanie.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zapytanie ofertowe
              </a>
            </li>
            <li>
              <a
                href="http://ekowod-lidzbark.pl/files/przetarg/obmiar.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Obmiar
              </a>
            </li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
};
export default WidgetPrzetarg1;
