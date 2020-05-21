import React, { useState } from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import { Button } from "@material-ui/core";
import axios from "axios";

import TextField from "../TextField";
import Snackbar from "../Snackbar";
import { useAuth } from "../../contexts/authContext";

const LoginForm = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const { setUser } = useAuth();

  return (
    <>
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
          <Form>
            <Field
              name="login"
              type="text"
              label="Login"
              component={TextField}
            />
            <Field
              name="password"
              type="password"
              label="Hasło"
              component={TextField}
            />
            <Button variant="contained" type="submit" color="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <Snackbar
        handleSnackbarClose={() => setIsSnackbarOpen(false)}
        isSnackbarOpen={isSnackbarOpen}
      />
    </>
  );
};

export default LoginForm;
