import { endpoint } from "@/utils/scoopika";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const stream = new ReadableStream({
    start(controller) {
      endpoint.handleRequest({
        request: body,
        stream: (s) => controller.enqueue(s),
        end: () => controller.close(),
      });
    },
  });

  return new NextResponse(stream);
}
