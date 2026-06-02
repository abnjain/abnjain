"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactFormData } from "@/types/home";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ContactFormData) => void;
};

const emptyForm: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export function ContactModal({ isOpen, onClose, onSubmit }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="relative w-full max-w-md rounded-2xl border border-text/10 bg-surface p-6 shadow-glow">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 cursor-pointer text-2xl leading-none text-muted hover:text-text"
          aria-label="Close dialog"
        >
          &times;
        </button>

        <p
          id="contact-modal-title"
          className="mb-4 text-center text-sm font-bold text-text"
        >
          Provide your details to send
          <br />
          me a quick email
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="mb-4 w-full rounded-lg border border-text/10 bg-bg px-4 py-2 text-center text-text focus:border-accent focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="mb-4 w-full rounded-lg border border-text/10 bg-bg px-4 py-2 text-center text-text focus:border-accent focus:outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Custom Message"
            rows={3}
            className="mb-4 w-full rounded-lg border border-text/10 bg-bg px-4 py-2 text-center text-text focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-accent px-6 py-2 font-medium text-white transition hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
