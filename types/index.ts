import {
  Category,
  Feature,
  Image as ImageType,
  Make,
  Model,
  Type,
  Car,
} from "@prisma/client";

export interface CarType {
  id: string;
  make: Make;
  makeId: string;
  modelId: string;
  categoryId: string;
  typeId: string;
  model: Model;
  category: Category;
  features: Feature[];
  type: Type;
  color: string;
  drive: string;
  rentalPrice: number;
  price: number;
  HP: number;
  location: string;
  fuelType: string;
  engineSize: string;
  acceleration: number;
  year: string;
  mileage: number;
  transmission: string;
  isAvailable: boolean;
  isFeatured: boolean;
  images: ImageType[];
  updatedAt: Date;
  createdAt: Date;
}

// export interface CarType{

// }

export type MakeType = {
  name: string;
  id: string;
  logo: string;
  models: Model[];
};
export type BodyType ={
  
}
