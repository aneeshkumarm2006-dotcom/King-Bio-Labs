"use client";

import { useEffect, useState } from "react";
import { Check, Send } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const SUBJECT_OPTIONS = [
  { value: "Product Question", label: "Product Question" },
  { value: "Order Issue", label: "Order Issue" },
  { value: "COA Request", label: "COA Request" },
  { value: "General Inquiry", label: "General Inquiry" },
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(SUBJECT_OPTIONS[0].value);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sent) return;
    const id = window.setTimeout(() => setSent(false), 3000);
    return () => window.clearTimeout(id);
  }, [sent]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Frontend-only — no backend. Log the payload and show a confirmation.
    console.log("Contact form submission", { name, email, subject, message });
    setSent(true);
    setName("");
    setEmail("");
    setSubject(SUBJECT_OPTIONS[0].value);
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex items-end justify-between gap-4 border-b-2 border-brand-navy pb-4">
        <span className="font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
          Send A Message
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-navy/45">
          §02
        </span>
      </div>

      <div className="flex flex-col gap-7 pt-8">
        <div className="grid gap-7 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="contact-name"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
            >
              Name
            </Label>
            <Input
              id="contact-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="h-11 rounded-none border-brand-border"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label
              htmlFor="contact-email"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
            >
              Email
            </Label>
            <Input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="h-11 rounded-none border-brand-border"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="contact-subject"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            Subject
          </Label>
          <Select
            items={SUBJECT_OPTIONS}
            value={subject}
            onValueChange={(value) => {
              if (typeof value === "string") setSubject(value);
            }}
          >
            <SelectTrigger
              id="contact-subject"
              className="w-full justify-between rounded-none border-brand-border data-[size=default]:h-11"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              {SUBJECT_OPTIONS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="contact-message"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            Message
          </Label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us how we can support your research."
            required
            rows={6}
            className="w-full min-w-0 resize-y rounded-none border border-brand-border bg-transparent px-3 py-2.5 text-base outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
          />
        </div>

        <button
          type="submit"
          className={cn(
            "inline-flex h-12 w-full items-center justify-center gap-2 rounded-none px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors",
            sent ? "bg-emerald-600" : "bg-brand-navy hover:bg-brand-blue"
          )}
        >
          {sent ? (
            <>
              <Check className="size-4" />
              Message Sent
            </>
          ) : (
            <>
              <Send className="size-4" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
