import { z } from "zod";
import { getDb } from "@/db";
import { enquiries } from "@/db/schema";

const payload = z.object({
  reference: z.string().uuid(),
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().min(2).max(150),
  email: z.string().trim().email().max(254),
  interest: z.string().trim().min(2).max(180),
  requirements: z.string().trim().min(10).max(3000),
});
export async function POST(req: Request) {
  if (req.headers.get("origin") && req.headers.get("origin") !== new URL(req.url).origin)
    return Response.json({error:"This request must be made from the enquiry form."},{status:403});
  const raw = await req.text();
  if(raw.length > 12000) return Response.json({error:"Please shorten your enquiry."},{status:413});
  let input;
  try { input = JSON.parse(raw); } catch { return Response.json({error:"Invalid request."},{status:400}); }
  const parsed = payload.safeParse(input);
  if (!parsed.success) return Response.json({error:"Please check your contact details and project description."},{status:400});
  try {
    await getDb().insert(enquiries).values({...parsed.data,createdAt:new Date().toISOString()}).onConflictDoNothing();
    return Response.json({reference:parsed.data.reference},{status:201});
  } catch {
    return Response.json({error:"Your request could not be saved. Please try again."},{status:503});
  }
}
