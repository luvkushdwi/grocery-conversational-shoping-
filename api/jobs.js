const API_TARGET =
  process.env.API_URL ??
  "https://cpab.cogitx.ai/project/exports/rest-api/6a016bf971e1d54ed336d155/jobs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).json({
      statusCode: 500,
      message:
        "Missing CLIENT_ID or CLIENT_SECRET on server. Add them in Vercel Environment Variables.",
    });
  }

  try {
    const upstream = await fetch(API_TARGET, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": clientId,
        "x-client-secret": clientSecret,
      },
      body: JSON.stringify(req.body ?? {}),
    });

    const body = await upstream.text();

    res
      .status(upstream.status)
      .setHeader("Content-Type", "application/json")
      .send(body);
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Failed to reach CogitX API",
      data: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
