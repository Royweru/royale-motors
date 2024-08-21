import {
  SimpleForm,
  Create,
  TextField,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export const BodyTypeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Name" validate={[required()]} />
        <TextInput
          source="image"
          label="Body Type Image"
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};
