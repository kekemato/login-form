import React from "react";
import { FieldProps, FormikFormProps } from "formik";
import { TextField } from "@material-ui/core";

interface TextFieldProps {
  label?: string;
  type: string;
  isError?: boolean;
  field?: FieldProps;
  form?: FormikFormProps;
}

const MyTextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const { field, type, label, isError } = props;
  return <TextField type={type} label={label} error={isError} {...field} />;
};

export default MyTextField;
