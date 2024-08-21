import React from "react";
import {
  SimpleForm,
  Edit,
  TextField,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";
export const MakeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" label="Name" validate={[required()]} />
        <TextInput source="logo" label="logo image" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};
