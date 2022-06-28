import React from "react";
import { Link } from "gatsby";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import clsx from "clsx";
import "./CardWidget.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    minHeight: 620,
    height: "auto",
    transition: ".3s",
    backgroundColor: "#fff",
    "&:hover": {
      scale: 2,
    },

    [theme.breakpoints.down("sm")]: {
      padding: "0 15px",
      maxWidth: "100%",
      "&:hover": {
        scale: 2,
      },
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    [theme.breakpoints.down("lg")]: {
      height: 0,
      paddingTop: "56.25%",
      marginLeft: "15px",
    },
    [theme.breakpoints.down("md")]: {
      height: 0,
      paddingTop: "56.25%",
      marginLeft: "15px",
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#637201",
  },
  root2: {
    backgroundColor: "yellow",
    maxWidth: "100%",
    minHeight: 620,
    height: "auto",
    transition: "1s",
    "&:hover": {
      scale: 2,
    },
  },
}));

const CardWidget = ({
  image,
  title,
  data,
  LinkName,
  LinkTo,
  subtitle,
  content1,
  content2,
  content3,
  content4,
  fileName1,
  fileLink1,
  fileName2,
  fileLink2,
  fileName3,
  fileLink3,
  zipName,
  zipLink,
  activeColor,
  activeSize,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const Default = "/images/logo.svg";

  return (
    <Card>
      <div className="root" style={{ backgroundColor: `${activeColor}` }}>
        <div id="cardHeader" style={{ fontSize: `${activeSize}px` }}>
          <div id="headerCard">
            <div id="avatarWrapper">
              <Avatar aria-label="recipe" id="avatar">
                {title.substring(0, 1)}
              </Avatar>
            </div>
            <div>
              <div>
                <div id="titleCard"> {title}</div>
              </div>
              <div>
                <div id="subheaderData">{data}</div>
              </div>
            </div>
          </div>
        </div>
        <CardContent style={{ fontSize: `${activeSize}px` }}>
          {image.length ? (
            <>
              <a href={image} target="_blank" without rel="noreferrer">
                <img
                  component="img"
                  src={image}
                  alt={title}
                  style={{
                    display: "block",
                    maxWidth: "90%",
                    height: "auto",
                    margin: "0 auto",
                    cursor: "pointer",
                  }}
                />
              </a>
            </>
          ) : (
            <>
              <img
                component="img"
                src={Default}
                alt={title}
                style={{
                  display: "block",
                  width: "70%",
                  padding: "20px 20px 40px 20px",
                  margin: "0 auto",
                  maxHeight: "340px",
                }}
              />
            </>
          )}

          <div id="subtitleCard" style={{ fontSize: `${activeSize}px` }}>
            {subtitle}
          </div>
          <div id="paragraphFirst" style={{ fontSize: `${activeSize}px` }}>
            {content1}
          </div>
        </CardContent>
        {content2.length ? (
          <>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Zobacz więcej">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <div id="paragraph" style={{ fontSize: `${activeSize}px` }}>
                  {content2}
                </div>
                <div id="paragraph" style={{ fontSize: `${activeSize}px` }}>
                  {content3}
                </div>
                <div id="paragraph" style={{ fontSize: `${activeSize}px` }}>
                  {content4}
                </div>

                <div id="DownloadFiles">
                  {LinkTo && LinkName ? (
                    <>
                      <div
                        id="linkWrapper"
                        style={{ fontSize: `${activeSize}px` }}>
                        <Link to={LinkTo} id="linkFooter">
                          {LinkName}
                        </Link>
                      </div>
                    </>
                  ) : null}

                  {fileName1.length ? (
                    <>
                      <div
                        id="footerTitle"
                        style={{ fontSize: `${activeSize}px` }}>
                        Pliki do pobrania:
                      </div>
                      <ul>
                        <li>
                          <a
                            href={fileLink1}
                            target="_blank"
                            rel="noopener noreferrer">
                            {fileName1}
                          </a>
                        </li>
                        <li>
                          <a
                            href={fileLink2}
                            target="_blank"
                            rel="noopener noreferrer">
                            {fileName2}
                          </a>
                        </li>
                        <li>
                          <a
                            href={fileLink3}
                            target="_blank"
                            rel="noopener noreferrer">
                            {fileName3}
                          </a>
                        </li>
                      </ul>

                      {zipName.length ? (
                        <>
                          <div
                            id="FooterTitle"
                            style={{ fontSize: `${activeSize}px` }}>
                            Pobierz - całość
                          </div>
                          <ul>
                            <li>
                              <a
                                href={zipLink}
                                target="_blank"
                                rel="noopener noreferrer">
                                {zipName}
                              </a>
                            </li>
                          </ul>
                        </>
                      ) : null}
                    </>
                  ) : null}
                </div>
              </CardContent>
            </Collapse>
          </>
        ) : null}
      </div>
    </Card>
  );
};

export default CardWidget;
