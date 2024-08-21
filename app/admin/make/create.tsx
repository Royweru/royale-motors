import {
  SimpleForm,
  Create,
  TextField,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export const MakeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Name" validate={[required()]} />
        <TextInput source="logo" label="LogoImage" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
