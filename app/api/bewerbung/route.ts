import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // In a real integration this would forward to Mailgun / SMTP / HubSpot.
    // For now we simply acknowledge – hook in the mail provider of your choice.
    console.log("[BP Bewerbung]", body);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
