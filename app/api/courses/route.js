import { NextResponse } from "next/server";
import courses from "../db.json";
export function GET() {
  return NextResponse.json(courses);
}
