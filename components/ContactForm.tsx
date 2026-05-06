"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      budget: String(formData.get("budget") || ""),
      project: String(formData.get("project") || ""),
    };

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setMessage(data.message || "Message sent successfully.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl"
    >
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Name
          </label>
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Project Budget
          </label>
          <select
            name="budget"
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
          >
            <option value="">Select range</option>
            <option value="Below Rs. 25,000">Below Rs. 25,000</option>
            <option value="Rs. 25,000 - Rs. 75,000">
              Rs. 25,000 - Rs. 75,000
            </option>
            <option value="Rs. 75,000 - Rs. 150,000">
              Rs. 75,000 - Rs. 150,000
            </option>
            <option value="Rs. 150,000+">Rs. 150,000+</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Project Details
          </label>
          <textarea
            name="project"
            required
            rows={5}
            placeholder="Tell me about the website, dashboard, API, admin panel, or full-stack app you want to build."
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>

        {message && (
          <p
            aria-live="polite"
            className={`text-sm ${
              status === "success" ? "text-emerald-300" : "text-red-300"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}