import db from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET(
  req: Request,
  { params }: { params: { makeId: string } }
) {
  try {
    const response = await db.make.findUnique({
      where: {
        id: params.makeId,
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
  { params }: { params: { makeId: string } }
) {
  const body = await req.json();

  try {
    const response = await db.make.update({
      where: {
        id: params.makeId,
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

export async function DELETE({ params }: { params: { makeId: string } }) {
  try {
    const response = await db.make.delete({
      where: {
        id: params.makeId,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.log("make_DELETE", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
