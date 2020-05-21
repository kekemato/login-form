import React from "react";
import { Formik, Form, Field, FormikProps } from 'formik';
import { Button } from '@material-ui/core';

import TextField from '../TextField';

const LoginForm  = () => {
    return (
        <Formik
        initialValues={{ login: '', password: ''}}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(props: FormikProps<any>) => (
            <Form>
                <Field name="login" placeholder="login" component={TextField}/>
                <Field name="password" placeholder="hasło" component={TextField}/>
                <Button variant="contained" type="submit" color="primary">Submit</Button>
            </Form>
        )}
      </Formik>
    );
  };
  
  export default LoginForm;
  