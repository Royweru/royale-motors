import React from "react";

import { Create, required, SimpleForm, TextInput } from "react-admin";
export const CategoryCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Name" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
