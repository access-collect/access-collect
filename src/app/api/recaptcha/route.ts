import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Only POST requests allowed" },
      { status: 405 },
    );
  }

  const data = await req.json();
  const { token } = data;
  const secretKey: string | undefined = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    return NextResponse.json({ message: "Token not found" }, { status: 405 });
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey ?? "",
          response: token,
        }),
      },
    );

    const result = await response.json();

    return NextResponse.json({
      success: true,
      message: "Success recaptcha",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Error recpatcha" },
      { status: 500 },
    );
  }
}
