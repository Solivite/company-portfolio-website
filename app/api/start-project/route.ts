import { NextResponse } from "next/server";
import { sendStartProjectEmail } from "@/lib/email/send-start-project";

const PROJECT_TYPES = new Set([
  "Website",
  "Mobile App",
  "UI/UX Design",
  "Digital Marketing",
  "Multiple services",
  "Something else",
]);

const BUDGET_OPTIONS = new Set([
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Prefer to discuss",
]);

interface StartProjectPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectType?: string;
  brief?: string;
  budget?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as StartProjectPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const company = body.company?.trim() ?? "";
    const projectType = body.projectType?.trim();
    const brief = body.brief?.trim();
    const budget = body.budget?.trim() ?? "";

    if (!name || !email || !phone || !projectType || !brief) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!PROJECT_TYPES.has(projectType)) {
      return NextResponse.json(
        { error: "Please select a valid project type." },
        { status: 400 },
      );
    }

    if (budget && !BUDGET_OPTIONS.has(budget)) {
      return NextResponse.json(
        { error: "Please select a valid budget option." },
        { status: 400 },
      );
    }

    if (brief.length > 5000) {
      return NextResponse.json(
        { error: "Project brief is too long (max 5000 characters)." },
        { status: 400 },
      );
    }

    await sendStartProjectEmail({
      name,
      email,
      phone,
      company,
      projectType,
      brief,
      budget,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thanks! We'll review your brief and reach out to schedule a call.",
    });
  } catch (error) {
    console.error("[start-project]", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
