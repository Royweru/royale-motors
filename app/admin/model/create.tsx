import {
  SimpleForm,
  Create,
  TextField,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export const ModelCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Name" validate={[required()]} />
        <ReferenceInput source="makeId" reference="make" />
      </SimpleForm>
    </Create>
  );
};
