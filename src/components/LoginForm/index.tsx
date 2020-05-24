import React, { useState } from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import { Button, Paper } from "@material-ui/core";
import axios from "axios";
import * as Yup from "yup";

import TextField from "../TextField";
import Snackbar from "../Snackbar";
import { useAuth } from "../../contexts/authContext";
import useStyles from "./styles";

const loginSchema = Yup.object().shape({
  login: Yup.string()
    .email("Nieprawidłowy adres email")
    .matches(
      /^[\w!#$%&"'*+-/=?^_`{|}~]{1,64}@([\w-!#$%&"'*+-/=?^_`{|}~]{1,63})(\.[\w]{2,6})+$/,
      "Nieprawidłowy adres email"
    )
    .required("Wymagane"),
  password: Yup.string()
    .min(5, "Hasło musi zawierać min. 5 znaków")
    .required("Wymagane"),
});

const LoginForm = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const { setUser } = useAuth();
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Paper className={classes.formPaper} elevation={3}>
        <Formik
          initialValues={{ login: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const url = "https://hpsupport-task.free.beeceptor.com/login";
            //randomize login success
            const isSuccess = Math.floor(Math.random() * 2);
            if (isSuccess) {
              try {
                const { status } = await axios.post(url, values);
                if (status === 200) {
                  setUser("Jan Nowak");
                  return localStorage.setItem("loggedIn", "true");
                }
              } catch {
                setIsSnackbarOpen(true);
              }
            } else {
              setIsSnackbarOpen(true);
            }
            setSubmitting(false);
          }}
        >
          {({ errors, touched }: FormikProps<any>) => (
            <Form className={classes.container}>
              <h2 className={classes.title}>Zaloguj się</h2>
              <Field
                name="login"
                type="text"
                label="E-mail"
                component={TextField}
                isError={errors.login && touched.login}
              />
              <p className={classes.errorText}>
                {errors.login && touched.login ? errors.login : " "}
              </p>
              <Field
                name="password"
                type="password"
                label="Hasło"
                component={TextField}
                isError={errors.password && touched.password}
              />
              <p className={classes.errorText}>
                {errors.password && touched.password ? errors.password : " "}
              </p>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                classes={{ root: classes.submitButton }}
              >
                Zaloguj
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
      <Snackbar
        handleSnackbarClose={() => setIsSnackbarOpen(false)}
        isSnackbarOpen={isSnackbarOpen}
      />
    </div>
  );
};

export default LoginForm;
