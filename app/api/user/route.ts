import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {email, password} = await req.json();
  return NextResponse.json({
    status: 200,
    data: email, password,
    meta: {
      body: req
    }
  });
}


