import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 375,
    height: '100%',
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
            O
          </Avatar>
        }
        title="Ogłoszenie o przetargu ustnym"
        subheader="Listopad 29, 2021"
      />
      <CardContent style={{ fontSize: `${activeSize}px` }}>
        <Typography paragraph style={{ textAlign: 'center', fontSize: `${activeSize}px` }}>
          Uwaga!!!
        </Typography>
        <Typography
          style={{ textAlign: 'justify', hyphens: 'auto', fontSize: `${activeSize}px` }}
          paragraph
        >
          <p style={{ fontWeight: 600 }}>
            Ogłoszenie przetargu ustnego nieogranicznonego (licytacja) na sprzedaż koparko-ładowarki
            KOMATSU WB 93 R-2 stanowiącego właśność Zakłądu Budżetowego Związku Gmin "EKOWOD" w
            Lidzbarku Warmińskim
          </p>
          <p>
            Przetarg odbędzie się w dniu 07.12.2021r. o godz. 10:00 w siedzibie Zakładu Budżetowego
            Związku Gmin „EKOWOD” w Lidzbarku Warmińskim, ul. Olsztyńska 10 D, -1 1 -1 00 Lidzbark
            Warmiński, sala konferencyjna p. nr 10.
          </p>
          <p>
            Dodatkowych informacji udziela Pan Adam Puszkiewicz, pokój Nr I , tel. (089) 764 20 26
            w. 12. Kierownik Zakładu Budżetowego Związku Gmin „EKOWOD” w Lidzbarku Warmińskim,
            zastrzega możliwość odwołania przetargu bez podania przyczyn.
          </p>
        </Typography>
        <Typography style={{ textAlign: 'left', fontSize: `${activeSize}px` }}>
          <p>Pliki do pobrania:</p>
          <ul>
            <li>
              <a
                href="http://ekowod-lidzbark.pl/files/przetarg/ogloszenie.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ogłoszenie przetargu ustnego
              </a>
            </li>
            <li>
              <a
                href="http://ekowod-lidzbark.pl/files/przetarg/regulamin.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Regulamin przetargu
              </a>
            </li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
};
export default WidgetPrzetarg1;
