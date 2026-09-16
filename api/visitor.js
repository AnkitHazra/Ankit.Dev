export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const response = await fetch(
      "https://api.counterapi.dev/v2/ankit-hazras-team-5546/portfoliowebsitecounter/up",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.COUNTER_API_KEY}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("CounterAPI error:", data);

      return res.status(response.status).json({
        error: "CounterAPI request failed",
        details: data,
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Visitor counter error:", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
}