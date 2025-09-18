// app/api/clerk/route.ts

import type { WebhookEvent } from "@clerk/nextjs/dist/api"; // adjust import if types differ
import { verifyWebhook } from "@clerk/nextjs/server"; // helper exists in docs
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  // NOTE: Clerk's docs show ways to verify; you can also use svix library directly
  const payload = await req.text();
  // verifyWebhook(payload, req.headers, process.env.CLERK_WEBHOOK_SIGNING_SECRET)
  // parse payload, switch on event.type (user.created/user.updated), then upsert into DB
  console.log("clerk webhook payload:", payload);
  return NextResponse.json({ ok: true });
}
