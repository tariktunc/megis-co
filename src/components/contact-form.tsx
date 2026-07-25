"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site-url";

/**
 * The form has no backend. Submitting opens the visitor's own mail client with
 * every field pre-filled, addressed to CONTACT_EMAIL, and they press send there
 * (owner decision 2026-07-25). Same approach the fleet uses elsewhere.
 *
 * This replaced a POST to /api/contact that was a stub with a
 * "TODO: Entegrasyon eklenecek" comment and no send logic at all. Because that
 * route still answered 200, the form told every visitor "Mesajınız başarıyla
 * gönderildi" while silently discarding the message. The route is deleted.
 *
 * The two builders below are pure so the encoding is verifiable without a DOM.
 */

/** Pure — turns the filled fields into one plain-text mail body. */
export function buildMessageBody(data: FormData, labels: Record<keyof FormData, string>): string {
  return (Object.keys(labels) as Array<keyof FormData>)
    .filter((k) => data[k].trim().length > 0)
    .map((k) => `${labels[k]}: ${data[k].trim()}`)
    .join("\n");
}

/** Pure — mailto: URI with subject and body percent-encoded. */
export function buildMailtoHref(to: string, subject: string, body: string): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  // "opened" = the mail client was handed the message. We deliberately do NOT
  // claim it was sent: only the visitor can press send inside their mail app.
  const [status, setStatus] = useState<"idle" | "opened" | "error">("idle");

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = t("form.validation.nameRequired");
    if (!formData.email.trim()) {
      errs.email = t("form.validation.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t("form.validation.emailInvalid");
    }
    if (!formData.message.trim()) {
      errs.message = t("form.validation.messageRequired");
    } else if (formData.message.trim().length < 10) {
      errs.message = t("form.validation.messageMin");
    }
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const body = buildMessageBody(formData, {
      name: t("form.name"),
      email: t("form.email"),
      phone: t("form.phone"),
      subject: t("form.subject"),
      message: t("form.message"),
    });
    const subject = formData.subject.trim() || t("form.mailtoFallbackSubject");

    try {
      window.location.href = buildMailtoHref(CONTACT_EMAIL, subject, body);
      // The fields are intentionally NOT cleared. If the visitor's device has no
      // mail handler, or they cancel the draft, clearing would destroy what they
      // typed with no way back.
      setStatus("opened");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none";

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-4xl font-bold text-foreground sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mb-10 text-lg text-muted">{t("subtitle")}</p>

        {status === "opened" && (
          <div
            role="status"
            className="mb-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-6 text-center"
          >
            <p className="font-medium text-green-400">{t("form.opened")}</p>
            {/* Recoverable fallback: if no mail handler is registered nothing will
                have opened, so the address is shown plainly rather than leaving
                the visitor with a dead button. */}
            <p className="mt-2 text-sm text-muted">
              {t("form.openedFallback")}{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute -left-[9999px] opacity-0 h-0 w-0"
              onChange={(e) => {
                if (e.target.value) setStatus("error");
              }}
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  {t("form.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t("form.namePlaceholder")}
                  className={inputClass}
                  required
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  {t("form.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t("form.emailPlaceholder")}
                  className={inputClass}
                  required
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                  {t("form.phone")}
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t("form.phonePlaceholder")}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">
                  {t("form.subject")}
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t("form.subjectPlaceholder")}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                {t("form.message")}
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t("form.messagePlaceholder")}
                className={`${inputClass} resize-none`}
                required
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            {/* No disabled/pending state: handing the draft to the mail client is
                synchronous, there is no request to wait on. */}
            <button
              type="submit"
              className="w-full rounded-xl bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              {t("form.send")}
            </button>

            {status === "error" && (
              <p role="alert" className="text-center text-sm text-red-400">
                {t("form.error")}
              </p>
            )}
        </form>
      </div>
    </div>
  );
}
