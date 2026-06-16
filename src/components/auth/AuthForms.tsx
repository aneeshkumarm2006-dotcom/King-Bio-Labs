"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, LogIn, UserPlus } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Tab = "login" | "register";

export function AuthForms() {
  const [tab, setTab] = useState<Tab>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(tab === "login" ? "Login" : "Register", { email, password });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  function switchTab(next: Tab) {
    setTab(next);
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
    setSubmitted(false);
  }

  const tabs: Tab[] = ["login", "register"];

  return (
    <div className="w-full border border-brand-border bg-white">
      {/* Tab bar */}
      <div className="grid grid-cols-2 border-b border-brand-border">
        {tabs.map((t, i) => (
          <button
            key={t}
            type="button"
            onClick={() => switchTab(t)}
            className={cn(
              "flex items-center justify-center gap-2 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors",
              i === 0 && "border-r border-brand-border",
              tab === t
                ? "bg-brand-navy text-white"
                : "text-muted-foreground hover:text-brand-navy"
            )}
          >
            <span className="text-current/50">§0{i + 1}</span>
            {t === "login" ? "Sign In" : "Register"}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 sm:p-8">
        {tab === "register" && (
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="auth-name"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-navy"
            >
              Full Name
            </Label>
            <Input
              id="auth-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dr. Jane Smith"
              required
              className="h-11 rounded-none border-brand-border text-brand-navy"
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="auth-email"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-navy"
          >
            Email
          </Label>
          <Input
            id="auth-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@institution.edu"
            required
            className="h-11 rounded-none border-brand-border text-brand-navy"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="auth-password"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-navy"
          >
            Password
          </Label>
          <div className="relative">
            <Input
              id="auth-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={8}
              className="h-11 rounded-none border-brand-border pr-10 text-brand-navy"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-brand-navy"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        </div>

        {tab === "register" && (
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="auth-confirm"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-navy"
            >
              Confirm Password
            </Label>
            <Input
              id="auth-confirm"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={8}
              className="h-11 rounded-none border-brand-border text-brand-navy"
            />
          </div>
        )}

        {tab === "login" && (
          <div className="flex justify-end">
            <Link
              href="#"
              className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-blue underline-offset-4 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        )}

        <button
          type="submit"
          className={cn(
            "mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-none text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors",
            submitted
              ? "bg-emerald-600"
              : "bg-brand-navy hover:bg-brand-blue"
          )}
        >
          {tab === "login" ? (
            <>
              <LogIn className="size-4" />
              {submitted ? "Signed In!" : "Sign In"}
            </>
          ) : (
            <>
              <UserPlus className="size-4" />
              {submitted ? "Account Created!" : "Create Account"}
            </>
          )}
        </button>
      </form>

      {tab === "register" && (
        <p className="border-t border-brand-border px-6 py-5 text-center text-xs leading-relaxed text-muted-foreground sm:px-8">
          Creating an account means you accept our{" "}
          <Link
            href="/legal/terms"
            className="text-brand-blue underline-offset-4 hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/legal/privacy"
            className="text-brand-blue underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      )}
    </div>
  );
}
