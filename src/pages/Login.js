import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Container,
  Avatar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { useFormik } from "formik";
import * as Yup from "yup";
import { email, password } from "../utils/validations";
import { postData } from "../utils/postData";
import { AppContext } from "../context/AppContext";

const stylesFunc = makeStyles((theme) => ({
  login: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    // border: "2px solid green",
  },
  image: {
    backgroundImage: "url(https://picsum.photos/640/480)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    height: "calc(100vh - 4rem)",
    // height: "100vh",
    flex: 1,
  },
  wrapper: {
    marginTop: "10rem",
    textAlign: "center",
    backgroundColor: "white",
    flex: 1,
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.primary.main,
  },
  signIn: {
    margin: "1rem",
  },
  register: {
    textDecoration: "none",
    fontWeight: "600",
    paddingLeft: "0.5rem",
  },
}));

const validationSchema = Yup.object({
  email,
  password,
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginError, setLoginError] = useState(null);
  const history = useHistory();
  const { token, setToken } = useContext(AppContext);

  const signinStyles = stylesFunc();

  const formik = useFormik({
    initialValues: {
      email: "faruk@gmail.com",
      password: "123456fC",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        const result = await postData(
          "https://dj-gp-backend.herokuapp.com/dj-rest-auth/login/",
          values
        );
        setToken(result?.data?.key)
        console.log(token)
        localStorage.setItem("token", result?.data?.key);
        history.push("/");
      } catch ({ response }) {
        if (response) {
          console.log(response.data.non_field_errors[0]);
        } else {
          console.log("Something went wrong!");
        }
      }
    },
  });

  return (
    <div className={signinStyles.login}>
      <Grid item xs={false} sm={4} md={7} className={signinStyles.image} />
      <Container className={signinStyles.wrapper} maxWidth="sm">
        <Avatar className={signinStyles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={signinStyles.signIn} variant="h4">
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12}>
              <TextField
                name="displayName"
                label="Display Name"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("displayName")}
                error={formik.touched.displayName && formik.errors.displayName}
                helperText={
                  formik.touched.displayName && formik.errors.displayName
                }
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                {...formik.getFieldProps("email")}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                {...formik.getFieldProps("password")}
                error={formik.touched.password && formik.errors.password}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
        <p>
          Don't have an account?
          <a className={signinStyles.register} href="/register">
            Register
          </a>
        </p>

        {/* <p>
         <a className = {signinStyles.register} href="/forgot-password">Forgot Password?</a>
      </p> */}
      </Container>
    </div>
  );
};

export default Login;
