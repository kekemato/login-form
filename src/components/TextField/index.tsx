import React from "react";
import { FieldProps, FormikFormProps } from 'formik';
import { TextField } from '@material-ui/core';

interface TextFieldProps {
   placeholder?: string;
   field: FieldProps;
   form: FormikFormProps;
 }

const MyTextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
   const {field, placeholder} = props;
    return (
       <TextField placeholder={placeholder} {...field}/>
    );
  };
  
  export default MyTextField;
  