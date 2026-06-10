import emailjs from "@emailjs/browser";
import type { ContactFormData } from "@/types/home";

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_zln2j7l",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_tmjormr",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "RTOt4G16KUG0gULNa",
} as const;

export async function sendContactEmail(
  formData: ContactFormData,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const templateParams = {
    ...formData,
    sender_email: formData.email,
  };

  try {
    await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey,
    );
    return { ok: true };
  } catch (err: unknown) {
    const apiText =
      typeof err === "object" &&
      err !== null &&
      "text" in err &&
      typeof (err as { text: unknown }).text === "string"
        ? (err as { text: string }).text
        : "";

    if (/invalid grant|reconnect your gmail/i.test(apiText)) {
      return {
        ok: false,
        error:
          "Email service auth expired (Gmail). Reconnect Gmail in the EmailJS dashboard, then retry — or email abnjain25@gmail.com directly.",
      };
    }

    if (apiText) {
      return { ok: false, error: apiText };
    }

    return {
      ok: false,
      error: "Transmission failed. Retry or email abnjain25@gmail.com directly.",
    };
  }
}
