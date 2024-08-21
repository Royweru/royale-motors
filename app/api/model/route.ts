import db from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  try {
    const response = await db.model.findMany();
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const response = await db.model.create({
      data: { ...body },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
