import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import ImageView from 'react-single-image-viewer';
import News1 from 'assets/images/wielkanoc.jpg';

import styled from 'styled-components';

const FotoWrapper = styled.div`
  display: flex;
  align-item: center;
  height: 100%;
  width: 100%;

  & img {
    display: block;
    height: 80%;
    width: 100%;
  }
`;
const ImageStyled = styled(ImageView)`
  cursor: pointer;
  border: 10px solid white;
`;

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
      height: '100%',
      '&:hover': {
        scale: 1.01,
      },
    },
  },
  root2: {
    maxWidth: '100%',
    height: '100%',
    backgroundColor: 'yellow',
    transition: '1s',
    '&:hover': {
      scale: 1.01,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 15px',
      height: '100%',
      maxWidth: '100%',
      '&:hover': {
        scale: 1.01,
      },
    },
  },
  media: {
    height: '400px',
    width: '100%',
    Top: '56.25%',
    marginTop: '30px',
    [theme.breakpoints.down('lg')]: {
      height: '400px',
      width: '100%',
      Top: '56.25%',
      marginTop: '30px',
    },
    [theme.breakpoints.down('md')]: {
      height: '400px',
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
    backgroundColor: '#637201',
  },
}));

const WidgetWielkanoc = ({ activeColor, activeSize }) => {
  const classes = useStyles();

  return (
    <Card className={activeColor !== 'yellow' ? classes.root : classes.root2}>
      <CardHeader
        style={{ fontSize: `${activeSize}px` }}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            W
          </Avatar>
        }
        title="Wielkanoc"
        subheader="Kwiecień, 2022"
      />
      <FotoWrapper>
        <ImageStyled src={News1} alt="Życzenia" height="100%" />
      </FotoWrapper>
    </Card>
  );
};
export default WidgetWielkanoc;
