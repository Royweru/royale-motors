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
export const ModelEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" label="Name" validate={[required()]} />
        <ReferenceInput source="makeId" reference="make" />
      </SimpleForm>
    </Edit>
  );
};
