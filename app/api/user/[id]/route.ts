import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: any}) {
    const team = context.params

    return NextResponse.json({
        status: 200,
        data: team,
        meta: {
          body: req,
          params: context
        }
      });
  }

