import { NextResponse } from "next/server";

import courses from "./db.json";
export async function GET(request) {
  return NextResponse.json(courses);
}
