import React, { useState } from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import { Button, Paper } from "@material-ui/core";
import axios from "axios";

import TextField from "../TextField";
import Snackbar from "../Snackbar";
import { useAuth } from "../../contexts/authContext";
import useStyles from "./styles";

const LoginForm = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const { setUser } = useAuth();
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Paper className={classes.formPaper} elevation={3}>
        <Formik
          initialValues={{ login: "", password: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            const url = "https://hpsupport-task.free.beeceptor.com/login";
            try {
              const { status } = await axios.post(url, values);
              if (status === 200) {
                setUser("Jan Nowak");
                sessionStorage.setItem("loggedIn", "true");
              }
            } catch {
              setIsSnackbarOpen(true);
            }
            setSubmitting(false);
          }}
        >
          {(props: FormikProps<any>) => (
            <Form className={classes.container}>
              <h2 className={classes.title}>Zaloguj się</h2>
              <Field
                name="login"
                type="text"
                label="Login"
                component={TextField}
                classes={{ root: classes.textfield }}
              />
              <Field
                name="password"
                type="password"
                label="Hasło"
                component={TextField}
                classes={{ root: classes.textfield }}
              />
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
