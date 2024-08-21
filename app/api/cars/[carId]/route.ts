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
    const response = await db.car.update({
      where: { id: params.carId },
      data: {},
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
