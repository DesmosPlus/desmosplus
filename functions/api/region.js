export function onRequestGet({ request }) {
  const region = typeof request.cf?.region === "string" ? request.cf.region.trim() : "";
  return Response.json({ region: region || null }, {
    headers: { "Cache-Control": "private, no-store" },
  });
}
