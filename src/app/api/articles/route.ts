import { NextRequest, NextResponse } from "next/server";

// Data Functions
import { getArticles } from "@/lib/data/articles";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { after, first } = await req.json();

    // If the 'after' cursor is not provided, default to null
    if (!after || !first) {
      return NextResponse.json({
        success: false,
        message:
          "Invalid request parameters. 'after' and 'first' are required.",
      });
    }

    // Fetch articles with the provided 'after' cursor
    const articles = await getArticles(after, first);

    if (!articles) {
      throw new Error("No articles found");
    }

    return NextResponse.json({
      success: true,
      articles,
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    // Handle error
    return NextResponse.json({
      success: false,
      message: "An error occurred while submitting the form. Please try again.",
    });
  }
}
