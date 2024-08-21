import {
  List,
  TextField,
  ReferenceField,
  NumberField,
  Datagrid,
} from "react-admin";

export const ModelList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <ReferenceField source="makeId" reference="make" />
      </Datagrid>
    </List>
  );
};
