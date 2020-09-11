import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
    root: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '0 15px',
            maxWidth: "100%",           
        },
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
}));

export default function CardSimpleWidget() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
        </Typography>
                <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
        </Typography>
                <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora error animi quam, inventore odio illum eius nostrum neque natus debitis?
          <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
