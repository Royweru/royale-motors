import {
  List,
  TextField,
  ReferenceField,
  NumberField,
  Datagrid,
} from "react-admin";

export const BodyTypeList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="image" />
      </Datagrid>
    </List>
  );
};
