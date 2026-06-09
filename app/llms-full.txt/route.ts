import { generateLlmsFull } from "@/lib/llms/generateLlmsFull";

export const dynamic = "force-static";

export function GET() {
  const body = generateLlmsFull();
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
