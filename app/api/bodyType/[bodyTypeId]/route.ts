import db from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET(
  req: Request,
  { params }: { params: { bodyTypeId: string } }
) {
  try {
    const response = await db.type.findUnique({
      where: {
        id: params.bodyTypeId,
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
  { params }: { params: { bodyTypeId: string } }
) {
  const body = await req.json();

  try {
    const response = await db.type.update({
      where: {
        id: params.bodyTypeId,
      },
      data: { ...body },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE({ params }: { params: { bodyTypeId: string } }) {
  try {
    const response = await db.type.delete({
      where: {
        id: params.bodyTypeId,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.log("type_DELETE", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
