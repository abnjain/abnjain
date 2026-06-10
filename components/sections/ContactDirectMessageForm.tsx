"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { contactPageContent } from "@/lib/data/contact";
import { sendContactEmail } from "@/lib/emailjs";

const inlineInputClassName =
  "inline-block min-w-[6rem] max-w-full border-0 border-b-2 border-black bg-transparent px-1 py-0.5 font-mono text-base text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none";

const detailsClassName =
  "mt-6 w-full resize-y border border-black bg-bg px-4 py-3 font-mono text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent";

export function ContactDirectMessageForm() {
  const { form } = contactPageContent;
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const trimmedName = name.trim();
  const trimmedTopic = topic.trim();
  const trimmedEmail = email.trim();
  const trimmedDetails = details.trim();
  const canSubmit =
    trimmedName.length > 0 && trimmedTopic.length > 0 && trimmedEmail.length > 0;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!canSubmit) return;

    setStatus("sending");

    const message = [
      `${form.greeting} ${trimmedName} ${form.topicPrefix} ${trimmedTopic}.`,
      `${form.emailPrefix} ${trimmedEmail}.`,
      trimmedDetails ? `${form.detailsPrefix} ${trimmedDetails}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");

    const result = await sendContactEmail({
      name: trimmedName,
      email: trimmedEmail,
      message,
    });

    if (result.ok) {
      setName("");
      setTopic("");
      setEmail("");
      setDetails("");
      setStatus("success");
      return;
    }

    setStatus("error");
    setErrorMessage(result.error);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="font-mono text-base leading-8 text-ink md:text-lg md:leading-9">
        {form.greeting}{" "}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="your name"
          required
          autoComplete="name"
          aria-label="Your name"
          className={inlineInputClassName}
        />{" "}
        {form.topicPrefix}{" "}
        <input
          type="text"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="your project"
          required
          aria-label="Project or topic"
          className={inlineInputClassName}
        />
        .<br />
        {form.emailPrefix}{" "}
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          required
          autoComplete="email"
          aria-label="Your email"
          className={inlineInputClassName}
        />
        .
      </p>

      <div>
        <p className="mb-2 font-mono text-base text-muted md:text-lg">{form.detailsPrefix}</p>
        <textarea
          name="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Timeline, budget, tech stack, links..."
          rows={4}
          aria-label="Extra details (optional)"
          className={detailsClassName}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={!canSubmit || status === "sending"}
        showArrow={false}
        className="px-8 py-5 text-lg"
      >
        {status === "sending" ? form.sendingLabel : form.submitLabel}
      </Button>

      {status === "success" ? (
        <p className="font-mono text-sm font-bold text-accent" role="status">
          {form.successMessage}
        </p>
      ) : null}

      {status === "error" ? (
        <p className="font-mono text-sm font-bold text-alert" role="alert">
          [ERR] {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
