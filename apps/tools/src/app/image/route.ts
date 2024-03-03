import OpenAI from "openai";

const API_KEY = process.env.OPENAI_API_KEY;

if (!API_KEY) {
 throw new Error("No OpenAI API key found");
}

const openai = new OpenAI({
 apiKey: API_KEY,
});

const generateImage = async (prompt: string) => {
 console.log({ prompt });
 const { data } = await openai.images.generate({
  prompt,
  model: "dall-e-3",
  quality: "standard",
  response_format: "url",
  size: "1792x1024",
 });

 //  const data = [
 //   {
 //    url: "https://picsum.photos/1024/1024",
 //    revised_prompt: "A painting of a cat",
 //   },
 //  ];

 if (!data[0].url) {
  throw new Error("No image generated");
 }

 return { url: data[0].url, prompt: data[0].revised_prompt };
};
export const POST = async (request: Request) => {
 const body = (await request.json()) as { prompt: string };
 const { url, prompt } = await generateImage(body.prompt);

 return new Response(JSON.stringify({ url, prompt }), {
  headers: {
   "Content-Type": "application/json",
  },
 });
};
