import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import clsx from "clsx";
import styled from "styled-components";

const CardHeader = styled.div`
  padding: 5px 5px;
`;

const AvatarWrapper = styled.div`
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 70px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding-left: 15px;
`;

const SubheaderData = styled.div`
  padding-left: 15px;
`;

const Subtitle = styled.div`
  color: black;
  font-weight: 600;
  padding: 10px 0 10px 16px;
  text-align: center;
`;

const ParagraphFirst = styled.div`
  font-size: 14px;
  padding: 10px 0 10px 16px;
`;

const Paragraph = styled.div`
  font-size: 14px;
  padding: 10px 0 10px 16px;
`;

const LinkWrapper = styled.div`
  padding-left: 15px;
  font-weight: 600;
`;

const DownloadFiles = styled.div``;

const FooterTitle = styled.p`
  padding-left: 15px;
  font-weight: 600;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    minHeight: "580px",
    height: "auto",
    transition: "1s",
    "&:hover": {
      scale: 1.01,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 15px",
      maxWidth: "100%",
      "&:hover": {
        scale: 1.01,
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
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const Default = "/static/images/logo.svg";

  return (
    <Card className={classes.root}>
      <CardHeader>
        <Header>
          <AvatarWrapper>
            <Avatar aria-label="recipe" className={classes.avatar}>
              {title.substring(0, 1)}
            </Avatar>
          </AvatarWrapper>
          <div>
            <div>
              <Title className={classes.title}> {title}</Title>
            </div>
            <div>
              <SubheaderData className={classes.subheader}>
                {data}
              </SubheaderData>
            </div>
          </div>
        </Header>
      </CardHeader>

      <CardContent>
        {image.length ? (
          <>
            <CardMedia
              component="img"
              image={image}
              alt={title}
              style={{ maxHeight: "400px" }}
            />
          </>
        ) : (
          <>
            <CardMedia
              component="img"
              image={Default}
              alt={title}
              style={{
                width: "70%",
                padding: "20px 20px 40px 20px",
                margin: "0 auto",
              }}
            />
          </>
        )}

        <Subtitle>{subtitle}</Subtitle>
        <ParagraphFirst>{content1}</ParagraphFirst>
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
              <Paragraph>{content2}</Paragraph>
              <Paragraph>{content3}</Paragraph>
              <Paragraph>{content4}</Paragraph>

              <DownloadFiles>
                {LinkTo && LinkName ? (
                  <>
                    <LinkWrapper>
                      <Link to={LinkTo} id="linkFooter">
                        {LinkName}
                      </Link>
                    </LinkWrapper>
                  </>
                ) : null}

                {fileName1.length ? (
                  <>
                    <FooterTitle>Pliki do pobrania:</FooterTitle>
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
                        <FooterTitle>Pobierz - całość</FooterTitle>
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
              </DownloadFiles>
            </CardContent>
          </Collapse>
        </>
      ) : null}
    </Card>
  );
};

export default CardWidget;
