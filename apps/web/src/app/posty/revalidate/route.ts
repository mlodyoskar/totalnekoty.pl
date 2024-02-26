import { revalidateTag } from "next/cache";

export async function POST() {
 revalidateTag("articles");
 return Response.json({ revalidated: true, now: Date.now() });
}
