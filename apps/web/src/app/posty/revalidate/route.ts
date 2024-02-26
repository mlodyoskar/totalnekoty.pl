import { revalidateTag } from "next/cache";

export async function GET() {
 revalidateTag("articles");
 return Response.json({ revalidated: true, now: Date.now() });
}
