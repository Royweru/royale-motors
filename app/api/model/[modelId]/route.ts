import db from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET(
  req: Request,
  { params }: { params: { modelId: string } }
) {
  try {
    const response = await db.model.findUnique({
      where: {
        id: params.modelId,
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
  { params }: { params: { modelId: string } }
) {
  const body = await req.json();

  try {
    const response = await db.model.update({
      where: {
        id: params.modelId,
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
