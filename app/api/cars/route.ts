import db from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  try {
    const response = await db.car.findMany();
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  const {
    makeId,
    typeId,
    modelId,
    categoryId,
    year,
    color,
    rentalPrice,
    price,
    isAvailable,
    isFeatured,
    location,
    mileage,
    engineSize,
    drive,
    transmission,
    HP,
    acceleration,
    fuelType,
    images,
    features,
  } = body;

  if (!mileage) return new NextResponse("Mileage is missing!");
  if (!year) return new NextResponse("Year is missing!");
  if (!color) return new NextResponse("Color is missing!");
  if (!price) return new NextResponse("Price is missing!");
  if (!images || images.length === 0)
    return new NextResponse("Images  are missing !");
  if (!features || features.length === 0)
    return new NextResponse("Features are missing!");
  if (!engineSize) return new NextResponse("Engine size is missing!");
  if (!drive) return new NextResponse("Drive is missing!");
  if (!transmission) return new NextResponse("Transmission is missing!");
  if (!typeId) return new NextResponse("Type id is missing!");
  if (!categoryId) return new NextResponse("category Id is missing!");
  if (!makeId) return new NextResponse("make Id is missing!");
  if (!modelId) return new NextResponse("model Id is missing!");
  if (!HP) return new NextResponse("HP is missing!");
  if (!fuelType) return new NextResponse("Fuel Type is missing!");
  if (!location) return new NextResponse("Location is missing!");
  if (!acceleration) return new NextResponse("acceleration is missing!");

  try {
    const response = await db.car.create({
      data: {
        makeId,
        typeId,
        modelId,
        categoryId,
        color,
        transmission,
        acceleration,
        isAvailable,
        isFeatured,
        location,
        fuelType,
        drive,
        engineSize,
        year,
        HP,
        rentalPrice,
        price,
        mileage,
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
        features: {
          createMany: {
            data: [...features.map((feature: { name: string }) => feature)],
          },
        },
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
