import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  capitalize,
  CircularProgress,
  Button,
} from "@material-ui/core";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    maxWidth: "80%",
    marginTop: "5rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
  circular: {
    margin: "auto",
  },
}));

const Main = () => {
  const [blogList, setBlogList] = useState([]);
  const [nextUrl, setNextUrl] = useState();

  const mainStyles = stylesFunc();

  const fetchData = async (url = "https://dj-gp-backend.herokuapp.com/list/") => {
    try {
      const result = await axios.get(url);
      setBlogList([...blogList, ...result?.data?.results]);
      setNextUrl(result?.data?.next);
    } catch ({ response }) {
      if (response) {
        console.log(response.data.non_field_errors[0]);
      } else {
        console.log("Something went wrong!");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    fetchData(nextUrl);
  };

  console.log(blogList);

  return (
    <Container className={mainStyles.wrapper}>
      {!blogList ? (
        <CircularProgress className={mainStyles.circular} />
      ) : (
        <Grid justify="center" container spacing={1}>
          {blogList?.map((blog, index) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                <BlogCard id={index} blog={blog} />
              </Grid>
            );
          })}
        </Grid>
      )}
      <div className="viewmore">
        {nextUrl ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleLoadMore()}
          >
            View More
          </Button>
        ) : null}
      </div>
    </Container>
  );
};

export default Main;
