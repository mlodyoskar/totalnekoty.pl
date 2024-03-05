import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const API_SECRET_KEY = process.env.API_SECRET_KEY;

if (!API_SECRET_KEY) {
 throw new Error("No API secret key found");
}

const middleware = (request: NextRequest, response: NextResponse) => {
 const headers = new Headers(request.headers);
 const auth = headers.get("Authorization");
 console.log("BYLIM TUTAJ LEEE");
 if (auth !== API_SECRET_KEY) {
  return new Response("Unauthorized", {
   status: 401,
  });
 }

 return NextResponse.next();
};

export const config = {
 matcher: "/image",
};

export default middleware;
