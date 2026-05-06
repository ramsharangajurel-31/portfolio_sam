function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const budget = body.budget?.trim() || "Not specified";
    const project = body.project?.trim() || "";

    if (!name || !email || !project) {
      return Response.json(
        { message: "Name, email, and project details are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    console.log("New portfolio inquiry:", {
      name,
      email,
      budget,
      project,
      sentTo: "tamangsamarpan555@gmail.com",
      receivedAt: new Date().toISOString(),
    });

    return Response.json(
      {
        message:
          "Thanks. Your message was received. Samarpan will contact you soon.",
      },
      { status: 200 },
    );
  } catch {
    return Response.json(
      { message: "Invalid request. Please try again." },
      { status: 400 },
    );
  }
}