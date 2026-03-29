import { NextResponse } from "next/server";
import { getHomepageContent } from "@/lib/get-homepage-content";

export async function GET() {
  const content = await getHomepageContent();
  return NextResponse.json(content, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
