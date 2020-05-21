import React from "react";
import { FieldProps, FormikFormProps } from "formik";
import { TextField } from "@material-ui/core";

interface TextFieldProps {
  label?: string;
  type: string;
  field: FieldProps;
  form: FormikFormProps;
}

const MyTextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const { field, type, label } = props;
  return <TextField type={type} label={label} {...field} />;
};

export default MyTextField;
