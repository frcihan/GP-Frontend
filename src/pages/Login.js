import React, { useState } from "react";
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

import { Formik } from "formik";
import * as Yup from "yup";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import Image from "../wp.jpg";

const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required!!"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

const stylesFunc = makeStyles((theme) => ({
  login: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    // border: "2px solid green",
  },
  image: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    height: "100vh",
    flex: 1,
  },
  wrapper: {
    marginTop: "3rem",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center",
    marginBottom: "9rem",
    // border: "2px solid red",
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

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginError, setLoginError] = useState(null);
  const history = useHistory();
  const signinStyles = stylesFunc();

  const handleFormSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    // firebase.signIn(values.email, values.password).then((res) => {
    //   if (res) {
    //     setLoginError(res);
    //     return;
    //   }
    //   history.push("/");
    // });
  };

  return (
    <div className={signinStyles.login}>
      <div className={signinStyles.image}></div>
      <Container className={signinStyles.wrapper} maxWidth="sm">
        <Avatar className={signinStyles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={signinStyles.signIn} variant="h4">
          Login
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={signInValidationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    value={values.password}
                    onChange={handleChange}
                    error={errors.password}
                    helperText={errors.password}
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
              <p style={{ textAlign: "center", color: "red" }}>
                <small>{loginError}</small>
              </p>
              {/* 
            //TODO: Add register & forgot password text & links
            */}
            </form>
          )}
        </Formik>
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
