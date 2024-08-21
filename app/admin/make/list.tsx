import {
  List,
  TextField,
  ReferenceField,
  NumberField,
  Datagrid,
} from "react-admin";

export const MakeList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="logo" />
      </Datagrid>
    </List>
  );
};
