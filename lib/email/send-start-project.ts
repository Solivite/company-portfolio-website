import { SITE } from "@/lib/constants";

export interface StartProjectEmailPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  brief: string;
  budget: string;
}

export async function sendStartProjectEmail(
  payload: StartProjectEmailPayload,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.info("[start-project] RESEND_API_KEY not set — logged only:", payload);
    }
    return;
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const to = process.env.CONTACT_TO_EMAIL ?? SITE.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Solivite Solutions <onboarding@resend.dev>";

  const who = payload.company || payload.name;
  const subject = `[Project Inquiry] ${who} — ${payload.projectType}`;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Company: ${payload.company || "—"}`,
      `Project type: ${payload.projectType}`,
      `Budget: ${payload.budget || "Not specified"}`,
      "",
      "Brief:",
      payload.brief,
    ].join("\n"),
    html: `
      <h2>New project inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company || "—")}</p>
      <p><strong>Project type:</strong> ${escapeHtml(payload.projectType)}</p>
      <p><strong>Budget:</strong> ${escapeHtml(payload.budget || "Not specified")}</p>
      <hr />
      <p><strong>Brief:</strong></p>
      <p>${escapeHtml(payload.brief).replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
