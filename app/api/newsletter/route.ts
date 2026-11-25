import { z } from "zod";
import { getDb } from "@/db";
import { newsletterSubscribers } from "@/db/schema";

const payload = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254).transform((value) => value.toLowerCase()),
});

export async function POST(req: Request) {
  if (req.headers.get("origin") && req.headers.get("origin") !== new URL(req.url).origin)
    return Response.json({ error: "This request must be made from the E-One website." }, { status: 403 });

  const raw = await req.text();
  if (raw.length > 3000)
    return Response.json({ error: "Please check your details and try again." }, { status: 413 });

  let input: unknown;
  try {
    input = JSON.parse(raw);
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = payload.safeParse(input);
  if (!parsed.success)
    return Response.json({ error: "Enter a valid name and email address." }, { status: 400 });

  const now = new Date().toISOString();
  try {
    await getDb()
      .insert(newsletterSubscribers)
      .values({ ...parsed.data, status: "subscribed", createdAt: now, updatedAt: now })
      .onConflictDoUpdate({
        target: newsletterSubscribers.email,
        set: { name: parsed.data.name, status: "subscribed", updatedAt: now },
      });
    return Response.json({ ok: true }, { status: 201 });
  } catch {
    return Response.json({ error: "Your subscription could not be saved. Please try again." }, { status: 503 });
  }
}
