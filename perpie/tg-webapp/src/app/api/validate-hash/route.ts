import { webcrypto } from "crypto";
import { NextRequest, NextResponse } from "next/server";

type Data = { ok: boolean } | { error: string };

export async function POST(req: Request) {
  console.log("Req JSON", await req.text());

  return NextResponse.json({ hey: "HEy" });

  //   if (!req.body || !req.json() {
  //     return NextResponse.json(
  //       { error: "Missing required field hash" },
  //       { status: 400, statusText: "Missing required field hash" }
  //     );
  //   }

  //   if (!process.env.BOT_TOKEN) {
  //     return NextResponse.status(500).json({ error: "Internal server error" });
  //   }

  //   const data = Object.fromEntries(new URLSearchParams(req.body.hash));
  //   const isValid = await isHashValid(data, process.env.BOT_TOKEN);

  //   if (isValid) {
  //     return NextResponse.status(200).json({ ok: true });
  //   }

  //   return NextResponse.status(403).json({ error: "Invalid hash" });
}


async function isHashValid(data: Record<string, string>, botToken: string) {
  const encoder = new TextEncoder();

  const checkString = Object.keys(data)
    .filter((key) => key !== "hash")
    .map((key) => `${key}=${data[key]}`)
    .sort()
    .join("\n");

  const secretKey = await webcrypto.subtle.importKey(
    "raw",
    encoder.encode("WebAppData"),
    { name: "HMAC", hash: "SHA-256" },
    true,
    ["sign"]
  );

  const secret = await webcrypto.subtle.sign(
    "HMAC",
    secretKey,
    encoder.encode(botToken)
  );

  const signatureKey = await webcrypto.subtle.importKey(
    "raw",
    secret,
    { name: "HMAC", hash: "SHA-256" },
    true,
    ["sign"]
  );

  const signature = await webcrypto.subtle.sign(
    "HMAC",
    signatureKey,
    encoder.encode(checkString)
  );

  const hex = Buffer.from(signature).toString("hex");

  return data.hash === hex;
}
