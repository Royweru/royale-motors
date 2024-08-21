import {
  SimpleForm,
  Create,
  Edit,
  TextField,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
  ArrayInput,
  BooleanInput,
  SimpleFormIterator,
} from "react-admin";

export const CarEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <ReferenceInput source="makeId" reference="make" />
        <ReferenceInput source="typeId" reference="bodyType" />
        <ReferenceInput source="categoryId" reference="category" />
        <ReferenceInput source="modelId" reference="model" />

        <ArrayInput source="images">
          <SimpleFormIterator>
            <TextInput source="url" helperText={false} />
          </SimpleFormIterator>
        </ArrayInput>

        <ArrayInput source="features">
          <SimpleFormIterator>
            <TextInput source="name" helperText={false} />
          </SimpleFormIterator>
        </ArrayInput>

        <TextInput source="color" label="Color" validate={[required()]} />
        <TextInput
          source="year"
          label="Year Of Manufacture"
          validate={[required()]}
        />
        <TextInput source="location" label="Location" validate={[required()]} />
        <TextInput
          source="fuelType"
          label="Fuel Type"
          validate={[required()]}
        />
        <TextInput
          source="engineSize"
          label="Engine Size"
          validate={[required()]}
        />
        <TextInput source="drive" label="Drive" validate={[required()]} />
        <TextInput
          source="transmission"
          label="Transmission"
          validate={[required()]}
        />

        <BooleanInput
          source="isFeatured"
          label="Featured"
          validate={[required()]}
        />
        <BooleanInput
          source="isAvailable"
          label="Available"
          validate={[required()]}
        />
        <NumberInput source="price" label="Price" validate={[required()]} />
        <NumberInput source="rentalPrice" label="Rental Price" />
        <NumberInput source="mileage" label="Mileage" validate={[required()]} />
        <NumberInput
          source="acceleration"
          label="Acceleration"
          validate={[required()]}
        />
        <NumberInput source="HP" label="Horse power" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};
