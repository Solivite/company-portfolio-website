"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SITE } from "@/lib/constants";
import GradientHeadline, {
  GradientText,
} from "@/components/ui/GradientHeadline";
import HeroBackground from "@/components/effects/HeroBackground";
import ScrollReveal from "@/components/ScrollReveal";

const PROJECT_TYPES = [
  "Website",
  "Mobile App",
  "UI/UX Design",
  "Digital Marketing",
  "Multiple services",
  "Something else",
] as const;

const BUDGET_OPTIONS = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Prefer to discuss",
] as const;

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  brief: "",
  budget: "",
};

export default function StartProjectPage() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/start-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await res.json()) as { message?: string; error?: string };

      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback(
        data.message ??
          "Thanks! We'll review your brief and reach out to schedule a call.",
      );
      setFormData(emptyForm);
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 transition-colors focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30";

  const selectClass = `${inputClass} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10`;

  return (
    <>
      <section className="relative overflow-hidden bg-surface-dark pt-28 pb-12 md:pt-36">
        <HeroBackground rayIntensity={0.75} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              Project Brief
            </p>
            <GradientHeadline
              as="h1"
              className="text-4xl md:text-6xl lg:text-7xl"
            >
              Start Your <GradientText>Project</GradientText>
            </GradientHeadline>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
              Share a quick brief so we can research your business and prepare a
              tailored solution before our call.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface-dark mt-12 pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <ScrollReveal className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-white/5 bg-surface-dark-elevated p-8 md:p-10">
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                Tell us about your project
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                A few details help us show up prepared. Takes about two minutes.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Work email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={inputClass}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={inputClass}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Company / brand{" "}
                      <span className="font-normal text-gray-500">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className={inputClass}
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    What do you need?
                  </label>
                  <select
                    id="projectType"
                    required
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className={selectClass}
                  >
                    <option value="" disabled className="bg-surface-dark">
                      Select a service
                    </option>
                    {PROJECT_TYPES.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-surface-dark"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="brief"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Tell us about the project
                  </label>
                  <textarea
                    id="brief"
                    required
                    rows={5}
                    value={formData.brief}
                    onChange={(e) =>
                      setFormData({ ...formData, brief: e.target.value })
                    }
                    className={`${inputClass} resize-none`}
                    placeholder="Goals, current situation, and what success looks like..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Approximate budget{" "}
                    <span className="font-normal text-gray-500">(optional)</span>
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className={selectClass}
                  >
                    <option value="" className="bg-surface-dark">
                      Prefer not to say
                    </option>
                    {BUDGET_OPTIONS.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-surface-dark"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {feedback && (
                  <p
                    className={`rounded-xl border px-4 py-3 text-sm ${
                      status === "success"
                        ? "border-green-500/30 bg-green-500/10 text-green-300"
                        : "border-red-500/30 bg-red-500/10 text-red-300"
                    }`}
                    role="alert"
                  >
                    {feedback}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:from-purple-500 hover:to-violet-500 glow-purple disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "loading" ? "Submitting..." : "Submit Brief"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <p className="text-xs text-gray-500">
                  Prefer email? Reach us at{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-purple-400 transition-colors hover:text-purple-300"
                  >
                    {SITE.email}
                  </a>{" "}
                  or{" "}
                  <a
                    href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                    className="text-purple-400 transition-colors hover:text-purple-300"
                  >
                    {SITE.phone}
                  </a>
                  .
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
