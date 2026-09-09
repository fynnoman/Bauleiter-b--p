import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const fd = await req.formData();
      const data: Record<string, unknown> = {};
      for (const [k, v] of fd.entries()) {
        if (v instanceof File) {
          data[k] = { name: v.name, size: v.size, type: v.type };
        } else {
          data[k] = v;
        }
      }
      console.log("[BP Bewerbung]", data);
    } else {
      const body = await req.json();
      console.log("[BP Bewerbung]", body);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
