"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  compact?: boolean;
  className?: string;
}

export default function NewsletterForm({ compact = false, className }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setMessage("Thanks! Newsletter signup is coming soon.");
    setEmail("");
  };

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex gap-2",
          compact ? "flex-col sm:flex-row" : "flex-col sm:flex-row"
        )}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={cn(
            "min-w-0 flex-1 rounded-full border px-5 py-3 text-sm transition-colors focus:outline-none focus:ring-2",
            compact
              ? "border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-purple-500/50 focus:ring-purple-500/30"
              : "border-purple-200 bg-white text-slate-900 placeholder-slate-400 focus:border-purple-400 focus:ring-purple-200"
          )}
        />
        <button
          type="submit"
          className={cn(
            "shrink-0 rounded-full px-6 py-3 text-sm font-semibold transition-all",
            compact
              ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-500 hover:to-violet-500"
              : "bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-500 hover:to-violet-500 glow-purple"
          )}
        >
          Subscribe Now
        </button>
      </form>
      {message && (
        <p
          className={cn(
            "mt-3 text-sm",
            compact ? "text-gray-400" : "text-purple-700"
          )}
        >
          {message}
        </p>
      )}
    </div>
  );
}
