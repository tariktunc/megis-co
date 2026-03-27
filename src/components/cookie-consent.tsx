"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

interface ConsentState {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CONSENT_KEY = "megis_cookie_consent";
const CONSENT_VERSION = "1";

function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed.consent;
  } catch {
    return null;
  }
}

function storeConsent(consent: ConsentState) {
  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify({ consent, version: CONSENT_VERSION, timestamp: Date.now() })
  );
}

export function CookieConsent() {
  const t = useTranslations("cookie");
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      setVisible(true);
    } else {
      setConsent(stored);
    }
  }, []);

  const handleAcceptAll = useCallback(() => {
    const allAccepted: ConsentState = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setConsent(allAccepted);
    storeConsent(allAccepted);
    setVisible(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    const allRejected: ConsentState = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setConsent(allRejected);
    storeConsent(allRejected);
    setVisible(false);
  }, []);

  const handleSavePreferences = useCallback(() => {
    storeConsent(consent);
    setVisible(false);
    setShowPreferences(false);
  }, [consent]);

  const toggleCategory = (key: keyof Omit<ConsentState, "essential">) => {
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
          role="dialog"
          aria-label={t("title")}
          aria-modal="true"
        >
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface/95 p-6 shadow-2xl backdrop-blur-xl">
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              {t("title")}
            </h2>
            <p className="mb-4 text-sm text-muted">{t("description")}</p>

            <AnimatePresence>
              {showPreferences && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mb-4 space-y-3 overflow-hidden"
                >
                  {(
                    [
                      { key: "essential", disabled: true },
                      { key: "analytics", disabled: false },
                      { key: "marketing", disabled: false },
                      { key: "functional", disabled: false },
                    ] as const
                  ).map(({ key, disabled }) => (
                    <label
                      key={key}
                      className="flex items-center justify-between rounded-lg border border-border p-3"
                    >
                      <div className="flex-1">
                        <span className="text-sm font-medium text-foreground">
                          {t(key)}
                        </span>
                        <p className="text-xs text-muted">
                          {t(`${key}Desc`)}
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={consent[key]}
                        disabled={disabled}
                        onChange={() =>
                          !disabled &&
                          toggleCategory(
                            key as keyof Omit<ConsentState, "essential">
                          )
                        }
                        className="ml-4 h-5 w-5 shrink-0 accent-accent"
                        aria-label={t(key)}
                      />
                    </label>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              {!showPreferences ? (
                <>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {t("preferences")}
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="rounded-lg border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-surface-light"
                  >
                    {t("rejectAll")}
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                  >
                    {t("acceptAll")}
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {t("rejectAll")}
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                  >
                    {t("save")}
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
