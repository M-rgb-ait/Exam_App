import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://flower.elevateegy.com/api/v1/categories"
  );

  const payload: APIResponse<PaginatedResponse<{ categories: Category[] }>> =
    await response.json();

  return NextResponse.json(payload, { status: response.status });
}
