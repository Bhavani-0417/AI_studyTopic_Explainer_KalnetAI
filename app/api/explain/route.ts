import { NextRequest, NextResponse } from "next/server";
import { generateExplanation } from "@/lib/aiClient";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const topic = body.topic?.trim();

    if (!topic) {
      return NextResponse.json(
        { error: "Please enter a topic to continue." },
        { status: 400 }
      );
    }

    const explanation = await generateExplanation(topic);
    return NextResponse.json({ explanation });

  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}