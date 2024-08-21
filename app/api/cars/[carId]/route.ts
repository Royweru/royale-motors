import db from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET(
  req: Request,
  { params }: { params: { carId: string } }
) {
  try {
    const response = await db.car.findUnique({
      where: {
        id: params.carId,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
export async function PUT(
  req: Request,
  { params }: { params: { carId: string } }
) {
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
  try {
    await db.car.update({
      where: { id: params.carId },
      data: {
        images: {
          deleteMany: {},
        },
        features: {
          deleteMany: {},
        },
        HP,
        transmission,
        acceleration,
        fuelType,
        drive,
        engineSize,
        mileage,
        location,
        isFeatured,
        isAvailable,
        makeId,
        typeId,
        categoryId,
        modelId,
        year,
        color,
        price,
        rentalPrice,
      },
    });
    const response = await db.car.update({
      where: { id: params.carId },
      data: {
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
    console.error(["CARS_PUT"], error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE({ params }: { params: { carId: string } }) {
  try {
    const response = await db.car.delete({
      where: {
        id: params.carId,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.log("CAR_DELETE", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
