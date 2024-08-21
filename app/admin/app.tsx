"use client";
import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { ModelList } from "./model/list";
import { ModelCreate } from "./model/create";
import { CategoryCreate } from "./category/create";
import { ModelEdit } from "./model/edit";
import { MakeCreate } from "./make/create";
import { MakeList } from "./make/list";
import { MakeEdit } from "./make/edit";
import { BodyTypeCreate } from "./bodyType/create";
import { BodyTypeList } from "./bodyType/list";
import { CarList } from "./cars/list";
import { CarCreate } from "./cars/create";
import { CarEdit } from "./cars/edit";
const App = () => {
  return (
    <Admin dataProvider={simpleRestProvider("/api")}>
      <Resource
        name="model"
        list={ModelList}
        create={ModelCreate}
        edit={ModelEdit}
        recordRepresentation={"name"}
      />
      <Resource
        name="make"
        list={MakeList}
        edit={MakeEdit}
        create={MakeCreate}
        recordRepresentation={"name"}
      />
      <Resource
        name="category"
        list={ListGuesser}
        create={CategoryCreate}
        recordRepresentation={"name"}
      />
      <Resource
        name="bodyType"
        list={BodyTypeList}
        create={BodyTypeCreate}
        recordRepresentation={"name"}
      />
      <Resource
        name="cars"
        list={CarList}
        edit={CarEdit}
        create={CarCreate}
        recordRepresentation={"makeId"}
      />
    </Admin>
  );
};

export default App;
