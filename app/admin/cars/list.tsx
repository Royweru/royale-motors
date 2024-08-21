import {
  List,
  TextField,
  ReferenceField,
  NumberField,
  ArrayField,
  BooleanField,
  Datagrid,
} from "react-admin";

export const CarList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <ReferenceField source="makeId" reference="make" />
        <ReferenceField source="typeId" reference="bodyType" />
        <ReferenceField source="categoryId" reference="category" />
        <ReferenceField source="modelId" reference="model" />

        <ArrayField source="images" label="Images" />
        <ArrayField source="features" label="Features" />

        <TextField source="color" label="Color" />
        <TextField source="year" label="Year of Manufacture" />
        <TextField source="location" label="Location" />
        <TextField source="fuelType" label="Color" />
        <TextField source="engineSize" label="Color" />
        <TextField source="drive" label="Drive" />
        <TextField source="transmission" label="Transmission" />

        <BooleanField source="isFeatured" label="Featured" />
        <BooleanField source="isAvailable" label="Available" />

        <NumberField source="price" label="Price" />
        <NumberField source="rentalPrice" label="Rental Price" />
        <NumberField source="mileage" label="Mileage" />
        <NumberField source="accceration" label="Acceleration" />
        <NumberField source="HP" label="Horse power" />
      </Datagrid>
    </List>
  );
};
