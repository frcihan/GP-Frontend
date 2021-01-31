import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "auto",
    //marginRight:'10px',
    marginBottom: "30px",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.5)",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "0 20px 70px -13px rgba(0,0,0,0.5)",
    },
  },
  media: {
    height: 200,
    width: "auto",
    resizeMode: "cover",
    boxShadow: "0px 5px 10px -5px rgba(50, 50, 50, 0.75)",

  },
  title: {
    backgroundColor: "#26a69a",
    borderRadius: "5px",
    color: "white",
  },
  content: {
    // textAlign: "left",
  },
  icons: {
      marginBottom: "10px",
    // border: "2px solid red"
  },
  iconButton: {
    marginLeft: "5px",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  numbers: {
    margin: "0px 5px",
  },
});

export default function BlogCard({ id, blog }) {
  const classes = useStyles();
  const history = useHistory();

  const handleCardClick = () => {
    history.push("/#");
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          className={classes.media}
          image={`https://source.unsplash.com/random/300x200?sig=${id}`}
        />
        <CardContent>
          <Typography
            className={classes.title}
            noWrap
            gutterBottom
            variant="h5"
            component="h2"
          >
            {blog.title}
          </Typography>
          <Typography
            className={classes.content}
            variant="body1"
            color="textPrimary"
            component="p"
          >
            {blog.content.slice(0, 60) + "..."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={classes.icons}>
            <IconButton
              edge="start"
              className={classes.iconButton}
              color="inherit"
              aria-label="menu"
              //   onClick={handleHomeClick}
            >
              <AccountCircle />
              <p className={classes.numbers}>{blog.author}</p>
            </IconButton>
          </div>
      <div className={classes.icons}>
            <IconButton
              edge="start"
              className={classes.iconButton}
              color="inherit"
              aria-label="menu"
              //   onClick={handleHomeClick}
            >
              <FavoriteIcon />
              <p className={classes.numbers}>{blog.like_count}</p>
            </IconButton>
            <IconButton
              edge="start"
              className={classes.iconButton}
              color="inherit"
              aria-label="menu"
              //   onClick={handleHomeClick}
            >
              <ChatIcon />
              <p className={classes.numbers}>{blog.comment_count}</p>
            </IconButton>
            <IconButton
              edge="start"
              className={classes.iconButton}
              color="inherit"
              aria-label="menu"
              //   onClick={handleHomeClick}
            >
              <VisibilityIcon />
              <p className={classes.numbers}>{blog.view_count}</p>
            </IconButton>
          </div>
    </Card>
  );
}

// BlogCard.propTypes = {
//   id: PropTypes.string.isRequired,
//   blogImage: PropTypes.string,
//   blogTitle: PropTypes.string,
//   blogContent: PropTypes.string,
// };
